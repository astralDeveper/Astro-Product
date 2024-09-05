'use client'
import React from "react";
import Link from "next/link";
import logo1 from "./Logo (1).gif";
import cart from "./cart.svg";
import "./Navbar.css";

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
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
              <img src="/logo192.png" />
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
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
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
