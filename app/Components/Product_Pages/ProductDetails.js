import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useParams } from 'next/navigation'
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer/Footer";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../config/reducers/cartSlice";
import Swal from "sweetalert2";


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

const ProductDetails = () => {
  const params = useParams().id

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


  const selectedCard = cardData.find(card => card.id === params);
  // console.log(selectedCard);

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
  

  const productAddToCart = (event, product) => {
    event.stopPropagation()
  
    console.log(product);

    if (selector.length === 0) {

      // Product Addedd to Redux cart
      dispatch(addToCart({
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        id: product.id,
        star: product.star
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
          star: product.star
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

  return (
    <section className="hero2-sec">
    <section>
      <Navbar items={selector.length}/>
      {/* <div className="container">
        <div className="row">
          <div className="col-12 services  d-flex justify-content-center align-items-center flex-column">
            <h1 className="w-75  text-white text-center">
              Explore Our Products
            </h1>
            <p className="w-50 text-white text-center fw-lighter">
              We are committed to conveying imaginative items that
              consistently mix inventiveness and innovation, enabling
              organizations all over the planet.
            </p>
          </div>
        </div>
      </div> */}
    </section>
    <Container className="my-5 text-white">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <Image
            src={selectedCard.image}
            alt="Product"
            className="img-fluid"
            width={400}
                  height={400}
          />
        </Col>
        <Col md={6}>
          <h2 className="text-danger">Web</h2>
          <h1>{selectedCard.title}</h1>
          <p>{getStarRating(selectedCard.star)}</p>
          <p>{selectedCard.description}</p>
          <h3>
            ${selectedCard.price}
          </h3>
          <Form>
            {/* <Form.Group className="my-3">
              <Form.Label htmlFor="sizeSelect">Size:</Form.Label>
              <Form.Control as="select" id="sizeSelect">
                <option>Medium</option>
                <option>Small</option>
                <option>Large</option>
              </Form.Control>
            </Form.Group> */}

            {/* <Form.Group className="my-3">
              <Form.Label htmlFor="quantitySelect">Quantity:</Form.Label>
              <div className="d-flex align-items-center">
                <Button variant="outline-secondary" className="mr-2">
                  -
                </Button>
                <Form.Control
                  type="number"
                  value="1"
                  style={{ width: '60px', textAlign: 'center' }}
                />
                <Button variant="outline-secondary" className="ml-2">
                  +
                </Button>
              </div>
            </Form.Group> */}

            <div className="d-flex gap-3">
              <Button variant="primary" className="mr-3" style={{height: "40px"}} onClick={(event) => productAddToCart(event, selectedCard)}>
                Add to Cart
              </Button>
              {/* <Button variant="outline-secondary" style={{height: "37px"}}>
                Add to Wishlist
              </Button> */}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    <Footer />
    </section>
  );
};

export default ProductDetails;
