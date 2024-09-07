import React, { useEffect } from "react";
import Navbar from "../HomePage/Navbar";
import "./product.css";
import Footer from "../HomePage/Footer/Footer";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from 'react-redux'
import Swal from "sweetalert2";
import { addToCart } from "../config/reducers/cartSlice";
import { addToSuccess } from "../config/reducers/successSlice";

import measure from '@/app/asset/New-folder/images/measure-boss.png'
import papaRazzi from '@/app/asset/New-folder/images/papaRazi.png'
import management from '@/app/asset/New-folder/images/management.jpg'
import i9Innovation from '@/app/asset/New-folder/images/i9-pic.jpg'
import hospital from '@/app/asset/New-folder/images/hospital.jpg'
import kamer from '@/app/asset/New-folder/images/kamer.jpg'
import materialDash from '@/app/asset/New-folder/images/material-dashboard.jpg'
import materialKit from '@/app/asset/New-folder/images/material-kit.jpg'
import messIndia from '@/app/asset/New-folder/images/mess-india.jpg'
import rayzi from '@/app/asset/New-folder/images/rayzi.jpg'
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Products() {
  const router = useRouter()
  const cardData = [
    {
      image: management.src,
      title: "Astral Management",
      price: "2500",
      id: "1",
      star: 2,
      description: "Astral Management is a robust task management platform built with React. It streamlines team productivity by offering features for task assignment and submission. With an intuitive interface, users can effortlessly assign tasks, monitor progress, and submit completed work. Perfect for teams seeking an efficient way to manage and track tasks in a dynamic environment.",
      downloadLink: "https://mega.nz/file/V6V3HBbK#I-wOhXGxtTgBz0_dn_ScZfiBGs2MkcA2gxpLc56-Rcg",
    },
    {
      image: i9Innovation.src,
      title: "i9 Innovation",
      price: "2000",
      id: "2",
      star: 2,
      description: "i9 Innovation is an informative web platform developed using React, designed to deliver cutting-edge insights and updates in the world of innovation. The site features a user-friendly interface that provides engaging content, detailed articles, and the latest trends in technology and innovation. Ideal for professionals and enthusiasts looking to stay ahead in the fast-evolving landscape of tech advancements.",
      downloadLink: "https://mega.nz/file/4jN13Y7Z#bIlrkL7SGyioQSLgH81oxjizQNBrjdWvNO0O3UKm0LQ",
    },
    {
      image: hospital.src,
      title: "Hospital Pages",
      price: "400",
      id: "3",
      star: 4,
      description: "Hospital Pages is a comprehensive admin dashboard designed for managing hospital operations, built with React. This platform provides an intuitive interface for healthcare administrators to efficiently handle patient records, staff schedules, and medical inventory. With features tailored for streamlined hospital management, Hospital Pages enhances operational efficiency and ensures smooth day-to-day functioning of healthcare facilities.",
      downloadLink: "https://mega.nz/file/Uz0zlZLD#66Q1SNaXEcV0B9LkfUbQ8e0VBg-Fi7J2UpkpIJoRDlE",
    },
    {
      image: kamer.src,
      title: "Kamer-Lark",
      price: "400",
      id: "4",
      star: 3,
      description: "Kamer-Lark is a sleek hotel booking platform developed with React, designed to simplify the process of finding and reserving accommodations. Featuring an intuitive interface, it allows users to effortlessly search for hotels, compare rates, and book rooms with ease. Ideal for travelers seeking a seamless booking experience, Kamer-Lark combines modern design with functionality to enhance your travel planning.",
      downloadLink: "https://mega.nz/file/I7NnmZjT#gEEmLtiLJUUg1qiDpSZSYKp2wNtDWaOUibu7NIZH1Dc",
    },
    {
      image: materialDash.src,
      title: "Material Dashboard",
      price: "1500",
      id: "5",
      star: 5,
      description: "Material Dashboard is a dynamic admin dashboard crafted using Material-UI and React. This platform offers a modern and responsive interface, providing an array of customizable widgets and components for effective data visualization and management. With its clean design and intuitive navigation, Material Dashboard is ideal for developers and businesses looking to create and manage comprehensive administrative interfaces with ease.",
      downloadLink: "https://mega.nz/file/B2NVXDqI#nyrHiQXms9qjfQzTLCcM-iD2bR2AU_r1Z700qOLz8Ik",
    },
    {
      image: materialKit.src,
      title: "Material-Kit",
      price: "300",
      id: "6",
      star: 1,
      description: "Material-Kit is a versatile collection of UI components and design elements built with Material-UI and React. This kit provides a comprehensive set of pre-designed, customizable components that adhere to Material Design principles, enabling developers to create visually appealing and consistent user interfaces quickly. Ideal for accelerating development and enhancing the aesthetics of web applications, Material-Kit offers a streamlined approach to building modern, responsive designs.",
      downloadLink: "https://mega.nz/file/smUDkCCA#hRX_Nchtd9PTVIKIDoTGrvUTEnhDQ8_e9oufclxGoq0",
    },
    {
      image: measure.src,
      title: "Measure",
      price: "800",
      id: "7",
      description: "Measure is an informative platform featuring a suite of registration forms and data collection tools, developed with React. Designed for ease of use, it offers a variety of customizable and user-friendly forms for gathering and managing information. Whether you're handling registrations, surveys, or other data-driven tasks, Measure provides a streamlined and efficient way to capture and organize user input, enhancing your data management processes.",
      downloadLink: "https://mega.nz/file/x3t0xJKS#s8oF8GMdhp46sdQu4gZlc6v4ng9FrTrm5j3ZgLuMY18",
    },
    {
      image: messIndia.src,
      title: "Mess-India",
      price: "1200",
      id: "8",
      star: 4,
      description: "Mess-India is a food e-commerce platform built with React, designed to provide daily meal solutions with ease. Offering a wide range of meal options that cater to diverse tastes and dietary preferences, this platform allows users to browse, order, and enjoy freshly prepared meals delivered right to their doorstep. Ideal for busy individuals and families, Mess-India simplifies meal planning and ensures a convenient, delicious dining experience every day.",
      downloadLink: "https://mega.nz/file/gillnKyI#fgB5Zk8fIdsOihBRluwd35bKb1u9H5JRgLlv3gkI_lM",
    },
    {
      image: papaRazzi.src,
      title: "Paparazi",
      price: "900",
      id: "9",
      description: "Paparazi is an informative web platform developed using Next.js and Sanity, designed to deliver engaging and up-to-date content. Combining the power of Next.js for fast, server-side rendering with Sanity’s flexible content management system, Paparazi provides a seamless user experience and easy content updates. Ideal for media and information-rich websites, it offers a dynamic and efficient way to present news, articles, and other informative content to your audience.",
      downloadLink: "https://mega.nz/file/VrVlWQyD#eYb-Typzhx_aFocSXsFQuaHCdYbFcd6S_IWj6eKXxa0",
    },
    {
      image: rayzi.src,
      title: "Rayzi Frontend",
      price: "500",
      id: "10",
      star: 2,
      description: "Rayzi is a comprehensive dashboard designed for managing and exploring movie-related data, built with React. This platform provides an intuitive interface for browsing movie collections, tracking ratings, and managing content. With features tailored for movie enthusiasts and industry professionals, Rayzi offers a centralized hub for organizing and analyzing film data, ensuring a streamlined and enjoyable user experience.",
      downloadLink: "https://mega.nz/file/N7NTXToS#U2UZe3OH4cS8OAPNsehHIx-NCOvyTgstYKWXUm-pP-8",
    },
    
  ];
  const selector = useSelector(state => state.cartItems.cartItems);

  const dispatch = useDispatch()

  const productAddToCart = (event, product) => {
    event.stopPropagation()

    if (selector.length === 0) {

      // Product Addedd to Redux cart
      dispatch(addToCart({
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        id: product.id,
        star: product.star,
        downloadLink: product.downloadLink
      }));

      dispatch(addToSuccess({ // Updated dispatch
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        id: product.id,
        star: product.star,
        downloadLink: product.downloadLink
      }));

      // Sweet Alert
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product Added to Cart",
        showConfirmButton: false,
        timer: 1500
      });
    }
    else {
      let productAlreadyExist = false

      // Checking Product Exist in Cart or Not
      selector.map((item) => {

        if (item.id === product.id) {
          productAlreadyExist = true
        }
      })

      if (productAlreadyExist) {

        // Sweet Alert
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Product Already in Cart",
          showConfirmButton: false,
          timer: 1500
        });
      }
      else {

        // Product Addedd to Redux
        dispatch(addToCart({
          title: product.title,
          price: product.price,
          description: product.description,
          image: product.image,
          id: product.id,
          star: product.star,
          downloadLink: product.downloadLink
        }))

        // Sweet Alert
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product Added to Cart",
          showConfirmButton: false,
          timer: 1500
        });
      }

    }
    
  }

  //   ------AOS Scroll Animtion--------

useEffect(() => {
  AOS.init({
    // Optional settings:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });
}, []);

  return (
    <section className="hero2-sec">
      <section className="About_1_sec">
        <Navbar items={selector.length}/>
        
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-md-12 my-5 d-flex service-offer  justify-content-center align-items-center flex-column">
            <h1 className="text-white text-center">Products We Offer</h1>
            <p className="text-white fw-lighter text-center w-50">
              Investigate our scope of skillfully created programming
              arrangements intended to meet your business needs. From custom
              applications to state of the art computerized stages, our items
              are custom fitted to drive your business forward and guarantee
              outcome in the advanced age..
            </p>
          </div>
        </div>
      </div>
      </section>
      <div className="container my-lg-5">
        <div className="row">
          {cardData.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              style={{ cursor: "pointer" }}
              key={item.id} // `key` should be on the outermost element of the map function
            >
              <div className="card border-dark rounded"  onClick={()=> router.push(`/productdetails/${item.id}`)}>
                <Image
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ objectFit: "cover", height: "200px" }}
                  width={400}
                  height={400}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-white">{item.title}</h5>
                  <p className="card-text text-white">${item.price}</p>
                  <div className="d-flex justify-content-center align-items-center mt-3">
                    <button className="btn btn-outline-danger d-flex align-items-center" onClick={(event) => productAddToCart(event, item)}>
                      <span className="me-2" style={{height: "26px"}}>Add to cart</span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Products;

{
  /* <div className="cartCardData">
{cardData.map((item) => (
  <div key={item.id} className="">
    <div className="product-card ">
      <img src={item.image} alt="Alpargatas" className="product-image" />
      <div className="product-details">
        <div>
          <h3 className="product-name">{item.title}</h3>
          <p className="product-price">₹{item.price}</p>
        </div>
        <div>
          <button className="cart_button">Buy Product</button>
        </div>
      </div>
    </div>
  </div>
))}
</div> */
}

// coporo9893@coloruz.com
// 0,K4x;ZS27\3