'use client'
import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../Components/HomePage/Navbar';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const page = () => {

  const cartItems = useSelector(state => state.cartItems.cartItems);

  console.log(cartItems);


  const getStarRating = (stars) => {
    return (
      <>
        {Array.from({ length: stars }, (_, index) => (
          <FaStar key={`filled-${index}`} />
        ))}
        {Array.from({ length: 5 - stars }, (_, index) => (
          <FaRegStar key={`empty-${index}`} />
        ))}
      </>
    );
  };
  

  return (
    <section className="hero2-sec pb-4">
    <section className="About_1_sec">
      <Link href='/'>
        <button className='m-5 btn btn-primary'>Back to home</button>
      </Link>
      <div className="container">
        <div className="row">
          <div className="col-12 services  d-flex justify-content-center align-items-center flex-column">
            <h1 className="w-75  text-white text-center">
              Download Our Products
            </h1>
            <p className="w-50 text-white text-center fw-lighter">
              We are committed to conveying imaginative items that
              consistently mix inventiveness and innovation, enabling
              organizations all over the planet.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className='text-white'>
        <div className="container d-flex flex-wrap">
          {/* Card Section */}
          <div className="row gx-4 gy-4">
            {cartItems.length > 0 ? cartItems.map((item, index) => (
              <div key={index} className=" w-50 ">
                <div className="card border shadow-0">
                  <Image src={item.image} width={400} height={400} className="card-img-top rounded-2 h-50 object-fit-cover w-full h-full" alt={item.title} />
                  <div className="card-body d-flex flex-column pt-3 border-top">
                    <strong>{item.title}</strong>
                    <div className="price-wrap mb-2">
                      <p>{item.description}</p>
                    </div>
                    <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                      <a href={item.downloadLink} download className="btn btn-outline-primary w-100">Download</a>
                    </div>
                  </div>
                </div>
              </div>
            )) : <h1 className='fs-6 text-center mt-5 pt-5'> No Items in Cart </h1>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default page