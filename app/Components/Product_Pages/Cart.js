'use client'
import React, { useState } from "react";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../config/reducers/cartSlice";
import Modal from 'react-bootstrap/Modal';
import { useRouter } from "next/navigation";
import { FaRegStar, FaStar } from "react-icons/fa";
// import { loadStripe } from '@stripe/stripe-js';
import Image from "next/image";
import {
  PayPalScriptProvider,
  PayPalCardFieldsProvider,
  PayPalCardFieldsForm,
  usePayPalCardFields,
  PayPalButtons,
  PayPalNameField,
  PayPalNumberField,
  PayPalExpiryField,
  PayPalCVVField,
} from "@paypal/react-paypal-js";

// Load your Stripe public key from environment variables
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

function Cart() {
  const [transactionCompleted, setTransactionCompleted] = useState(false);
  const selector = useSelector(state => state.cartItems.cartItems);

  const router = useRouter();
  const dispatch = useDispatch();

  const dltCartItem = (index) => {
    dispatch(removeCartItem({ index }));
  };

  const calculateTotal = () => {
    return selector.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  const getStarRating = (stars) => (
    <>
      {Array.from({ length: stars }, (_, index) => (
        <FaStar key={`filled-${index}`} />
      ))}
      {Array.from({ length: 5 - stars }, (_, index) => (
        <FaRegStar key={`empty-${index}`} />
      ))}
    </>
  );

  // const handleCheckout = async () => {
  //   try {
  //     const stripe = await stripePromise;

  //     const res = await fetch('/api/checkout', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(selector)
  //     });

  //     const json = await res.json();

  //     if (res.ok && stripe) {
  //       const { error } = await stripe.redirectToCheckout({ sessionId: json.data.session.id });

  //       if (error) {
  //         console.error("Stripe Checkout Error:", error);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Checkout Error:", error);
  //   }
  // };

  return (
    <section className="hero2-sec">
      <section className="About_1_sec">
        <Navbar items={selector.length} />
        <div className="container">
          <div className="row">
            <div className="col-12 services d-flex justify-content-center align-items-center flex-column">
              <h1 className="w-75 text-white text-center">Products Cart</h1>
              <p className="w-50 text-white text-center fw-lighter">
                At Products cart, we are dedicated to delivering imaginative products that seamlessly blend creativity and innovation. Our offerings empower organizations around the globe to thrive and excel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        {selector.length > 0 ? <h2 className="text-white text-center mt-5">Your Items</h2> : <h2></h2>}

        <div className="text-white">
          {selector.length > 0 ? selector.map((item, index) => (
            <div key={index}>
              <div className="container py-2">
                <div className="row justify-content-center mb-3">
                  <div className="col-md-12 col-xl-10">
                    <div className="card bg-transparent text-white shadow-0 rounded-3 border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                              <Image width={400} height={400} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="img" src={item.image} className="w-100" />
                              <a href="#!">
                                <div className="hover-overlay">
                                  <div className="mask" style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>{item.title}</h5>
                            <div className="d-flex flex-row">
                              <div className="text-danger mb-1 me-2">
                                {getStarRating(item.star)}
                              </div>
                            </div>
                            {/* <div className="mt-1 mb-0 text-muted small">
                              <span className="text-white">100% cotton</span>
                              <span className="text-primary"> • </span>
                              <span className="text-white">Light weight</span>
                              <span className="text-primary"> • </span>
                              <span className="text-white">Best finish<br /></span>
                            </div>
                            <div className="mb-2 text-muted small">
                              <span className="text-white">Unique design</span>
                              <span className="text-primary"> • </span>
                              <span className="text-white">For men</span>
                              <span className="text-primary"> • </span>
                              <span className="text-white">Casual<br /></span>
                            </div> */}
                            <p className="text-truncate mb-4 mb-md-0">
                              {item.description}
                            </p>
                          </div>
                          <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center ">
                              <h4 className="mb-1 me-1">${item.price}</h4>
                            </div>
                            <div className="d-flex flex-column mt-4">
                              <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm w-100" style={{ transition: "150ms", height: "35px" }} type="button" onClick={() => router.push(`/productdetails/${item.id}`)}>Details</button>
                              <button onClick={() => dltCartItem(index)} data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-danger btn-sm mt-2 w-100" style={{ transition: "150ms", height: "35px" }} type="button">
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )) : <h1 className='fs-6 text-center mt-5 pt-5'> No Items in Cart </h1>}
        </div>

        {selector.length > 0 && (
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <div className="card bg-transparent p-4 border">
                  <h3 className="mb-4 text-center text-white">Checkout</h3>
                  <div className="d-flex justify-content-between mb-3">
                    <span className="text-white">Total:</span>
                    <span className="text-white">${calculateTotal()}</span>
                  </div>
                  {/* <button className="btn btn-primary w-100 text-white" style={{ height: "40px" }} onClick={handleCheckout}>Proceed to Checkout</button> */}
                  <PaypalBtn amount={calculateTotal()} cart={selector} setTransactionCompleted={setTransactionCompleted} />
                </div>
              </div>
            </div>
          </div>
        )}

      {transactionCompleted &&
        <div className='text-white mt-5'>
          <div className="container d-flex flex-wrap">
            {/* Card Section */}
            <div className="row gx-4 gy-4">
              {selector.length > 0 && selector.map((item, index) => (
                <div key={index} className="w-50">
                  <div className="card border shadow-0">
                    <Image src={item.image} width={400} height={400} className="card-img-top rounded-2 h-50 object-fit-cover w-full h-full" alt={item.title} />
                    <div className="card-body d-flex flex-column pt-3 border-top">
                      <strong className="text-white">{item.title}</strong>
                      <div className="price-wrap mb-2">
                        <p className="text-white">{item.description}</p>
                      </div>
                      <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                        <a href={item.downloadLink} download className="btn btn-outline-primary w-100">Download</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
      </section>
      <Footer />
    </section>
  );
}

export default Cart;


function PaypalBtn({ amount, cart, setTransactionCompleted }) {

  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState('');
  const [isPaying, setIsPaying] = useState(false);
  const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    "currency": "USD",
    "data-page-type": "product-details",
    "components": "buttons,card-fields",
    "data-sdk-integration-source": "developer-studio",
  };

  async function createOrder() {
    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: {
            totalAmount: amount,
            items: cart
          },
        }),
      });

      const orderData = await response.json();
      console.log(orderData);

      if (orderData.data.id) {
        return orderData.data.id;
      } else {
        const errorDetail = orderData?.details?.[0];
        const errorMessage = errorDetail
          ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
          : JSON.stringify(orderData);

        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error(error);
      return `Could not initiate PayPal Checkout...${error}`;
    }
  }

  async function onApprove(data, actions) {
    try {
      const response = await fetch('/api/capture-order', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: data.orderID,
        }),
      });

      const orderData = await response.json();
      // Three cases to handle:
      //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
      //   (2) Other non-recoverable errors -> Show a failure message
      //   (3) Successful transaction -> Show confirmation or thank you message

      const transaction = orderData.data?.purchase_units?.[0]?.payments?.captures?.[0] ||
        orderData.data?.purchase_units?.[0]?.payments?.authorizations?.[0];
      const errorDetail = orderData.data?.details?.[0];

      if (errorDetail || !transaction || transaction.status === "DECLINED") {
        // (2) Other non-recoverable errors -> Show a failure message
        let errorMessage;
        if (transaction) {
          errorMessage = `Transaction ${transaction.status}: ${transaction.id}`;
        } else if (errorDetail) {
          errorMessage = `${errorDetail.description} (${orderData.data.debug_id})`;
        } else {
          errorMessage = JSON.stringify(orderData.data);
        }

        throw new Error(errorMessage);
      } else {
        // (3) Successful transaction -> Show confirmation or thank you message
        // Or go to another URL:  actions.redirect('thank_you.html');
        console.log(
          "Capture result",
          orderData.data,
          JSON.stringify(orderData.data, null, 2)
        );

        setIsPaying(false);
        setMsg('Transaction successful!');
        setTransactionCompleted(true);
        setShow(true);
        return `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`;
      }
    } catch (error) {
      setMsg('Sorry, your transaction could not be processed.');
      return `Sorry, your transaction could not be processed...${error}`;
    }
  }

  function onError(error) {
    setIsPaying(false);
    setShow(true);
    setMsg('Something went wrong. Try again later')
  }

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
        style={{
          shape: "rect",
          layout: "vertical",
          color: "gold",
          label: "paypal",
        }}
      />

      <PayPalCardFieldsProvider
        createOrder={createOrder}
        onApprove={onApprove}
        style={{
          input: {
            "font-size": "inherit",
            "font-family": "inherit",
            "color": "#444",
            "padding": "1rem",
            "border-radius": "0.25rem",
            "width": "100%",
          },
          ".invalid": { color: "red" },
        }}
      >
        <PayPalNameField />
        <PayPalNumberField />
        <PayPalExpiryField />
        <PayPalCVVField />

        <SubmitPayment isPaying={isPaying}setIsPaying={setIsPaying}/>
      </PayPalCardFieldsProvider>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Body>{msg}</Modal.Body>
        <Modal.Footer>
          <button variant="btn btn-primary" onClick={() => setShow(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </PayPalScriptProvider>
  );
}

const SubmitPayment = ({ isPaying, setIsPaying, billingAddress }) => {
  const { cardFieldsForm, fields } = usePayPalCardFields();

  const handleClick = async () => {
    if (!cardFieldsForm) {
      const childErrorMessage = "Unable to find any child components in the <PayPalCardFieldsProvider />";

      throw new Error(childErrorMessage);
    }
    const formState = await cardFieldsForm.getState();

    if (!formState.isFormValid) {
      return alert("The payment form is invalid");
    }
    setIsPaying(true);

    cardFieldsForm
      .submit({ billingAddress })
      .then((res) => {
        setIsPaying(false)
      })
      .catch((err) => {
        setIsPaying(false);
      });
  };

  return (
    <button className="btn btn-primary d-block mx-auto px-5" onClick={handleClick} disabled={isPaying}>
      {isPaying && <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>}
      <span role="status">Pay</span>
    </button>
  );
};
