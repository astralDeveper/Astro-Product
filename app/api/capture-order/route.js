const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PAYPAL_URI } = process.env;

export async function POST(req) {
  const res = await req.json();
  
  try {
    const { orderID } = res;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);

    return Response.json({
      status: httpStatusCode,
      data: jsonResponse,
    });
  } catch (error) {
    console.error("Failed to create order:", error);
    return new Response("Failed to capture order.", { status: 500 });
  }
}

async function captureOrder(orderID) {
  const accessToken = await generateAccessToken();
  const url = `${PAYPAL_URI}/v2/checkout/orders/${orderID}/capture`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
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