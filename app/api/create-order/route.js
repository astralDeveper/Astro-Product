const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PAYPAL_URI } = process.env;

export async function POST(req) {
  const res = await req.json();
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    const { cart } = res;
    const { jsonResponse, httpStatusCode } = await createOrder(cart);

    return Response.json({
      status: httpStatusCode,
      data: jsonResponse,
    });
  } catch (error) {
    console.error("Failed to create order:", error);
    return new Response("Failed to create order:", { status: 500 });
  }
}

async function createOrder(cart) {
  // use the cart information passed from the front-end to calculate the purchase unit details
  // console.log("shopping cart information passed from the frontend createOrder() callback:", cart);

  const accessToken = await generateAccessToken();
  const url = `${PAYPAL_URI}/v2/checkout/orders`;
  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: cart.totalAmount,
        },
      },
    ],
  };


  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
      // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
      // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
};

async function generateAccessToken() {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      throw new Error("MISSING_API_CREDENTIALS");
    }
    const auth = Buffer.from(PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET).toString("base64");
    const response = await fetch(`${PAYPAL_URI}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
  }
};

async function handleResponse(response) {
  try {
      const jsonResponse = await response.json();
      return {
          jsonResponse,
          httpStatusCode: response.status,
      };
  } catch (err) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
  }
}