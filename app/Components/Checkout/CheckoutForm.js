import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios'; // Make sure to install axios

const CheckoutForm = ({ cartItems }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
      return;
    }

    try {
      const response = await axios.post('/api/create-payment-intent', {
        amount: cartItems.reduce((total, item) => total + parseFloat(item.price), 0) * 100, // amount in cents
        currency: 'usd',
        paymentMethodId: paymentMethod.id,
      });

      const { clientSecret } = response.data;

      const { error: confirmError } = await stripe.confirmCardPayment(clientSecret);

      if (confirmError) {
        console.error(confirmError);
        return;
      }

      // Handle successful payment
      alert('Payment successful!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
