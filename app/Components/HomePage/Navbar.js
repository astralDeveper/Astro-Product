'use client'
import React, { useEffect } from "react";
import Link from "next/link";
import cart from "./cart.svg";
import "./Navbar.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar(props) {

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
    <>
      <nav className="navbar navbar-expand-lg " data-aos="fade-down">
        <div className="container mb-5">
          <Link href={"/"}>
            <span className="navbar-brand">
              {/* <video
                className="logo_web"
                style={{ width: "300px" }}
                autoPlay
                loop
                muted
              >
                <source src={logo1.src} type="video/webm" />
                Your browser does not support the video tag.
              </video> */}
              <img src="/logo192.png" style={{ height: '100px'}} />
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="#navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-5 mb-lg-0 w-100 justify-content-end">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  <Link href={"/"} style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  <Link href={"/about"} style={{ textDecoration: "none" }}>
                    About
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link active"
                  style={{ textDecoration: "none" }}
                  aria-current="page"
                >
                  <Link style={{ textDecoration: "none" }} href={"/services"}>
                    Services
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link active"
                  style={{ textDecoration: "none" }}
                  aria-current="page"
                >
                  <Link style={{ textDecoration: "none" }} href={"/product"}>
                    Product
                  </Link>
                </span>
              </li>
              {/* <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  <Link href={"/Contact"} style={{ textDecoration: "none" }}>
                    Contact
                  </Link>
                </span>
              </li> */}
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  <Link href={"/cart"} style={{ textDecoration: "none" }}>
                    <img src={cart.src} width={35} className="cartImage" alt="cart" />{" "}
                    <span className="cartCount">{props?.items ? props.items : 0}</span>{" "}
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
