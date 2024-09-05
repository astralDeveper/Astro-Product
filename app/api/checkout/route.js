import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const res = await req.json();

  const lineItems = res.map((item) => ({
    quantity: 1,
    price_data: {
      unit_amount: item.price * 100,
      currency: 'usd',
      product_data: {
        name: item.title,
        description: item.description,
        images: [
          item.image.src
        ],
      },
    },
  }))

  try {
    const session = await stripe.checkout.sessions.create({
      success_url: `${process.env.EXTERNAL_URL}/success`,
      cancel_url: `${process.env.EXTERNAL_URL}/cart`,
      mode: 'payment',
      // client_reference_id: req.params.id,
      // customer_email: req.user.email,
      payment_method_types: ['card'],
      line_items: lineItems
    });

    return Response.json({
      status: 200,
      revalidated: true,
      data: { session },
    });
  } catch (error) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}