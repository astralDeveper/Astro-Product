import React from "react";
import Footer from "../HomePage/Footer/Footer";
import Navbar from "../HomePage/Navbar";
import g1 from "./Serviuce/Group (7).svg";
import g2 from "./Serviuce/Group (9).svg";
import g3 from "./Serviuce/Group (10).svg";
import g4 from "./Serviuce/Group (11).svg";
import g5 from "./Serviuce/Group (12).svg";
import g6 from "./Serviuce/Group (13).svg";
import g7 from "./Serviuce/Group (14).svg";
import g8 from "./Serviuce/Group (15).svg";
import g9 from "./Serviuce/Group (16).svg";
import "./Service.css";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

function Service() {
  const router = useRouter();
  const toWeb = () => {
    router.push("/services/Web_development");
  };

  const toDigi = () => {
    router.push("/services/Digital_Marketing");
  };
  const toSeo = () => {
    router.push("/services/SEO");
  };
  const toApp = () => {
    router.push("/services/App_development");
  };
  const toUi = () => {
    router.push("/services/UI/UX");
  };
  const toQuality = () => {
    router.push("/services/Quality_Assurance");
  };
  const toProdutrc = () => {
    router.push("/services/Product_Management");
  };
  const toGraphics = () => {
    router.push("/services/Graphics_Designing");
  };
  const ToEcom = () => {
    router.push("/services/Ecommerce");
  };


  const selector = useSelector(state => state.cartItems.cartItems);
  return (
    <>
      <section className="hero2-sec">
        <section className="About_1_sec">
          <Navbar items={selector.length}/>

          <div className="container">
            <div className="row">
              <div className="col-12 services  d-flex justify-content-center align-items-center flex-column">
                <h1 className="w-55  text-white text-center">
                  Explore Our Services
                </h1>
                <p className="w-50 text-white text-center fw-lighter">
                  Committed to delivering cutting-edge solutions, seamlessly
                  blending creativity and technology to empower businesses
                  worldwide.
                </p>
              </div>
            </div>
          </div>
            </section>
            <div className="container pt-lg-5">
          <div className="row my-lg-5">
            <div className="col-lg-12 col-sm-12 col-md-12 my-1 d-flex service-offer  justify-content-center align-items-center flex-column">
              <h1 className="text-white text-center">Services We Offer</h1>
              <p className="text-white fw-lighter text-center w-50">
                Transform your digital vision into reality with our expert
                software development services, crafting innovative solutions to
                propel your business into the future.
              </p>
            </div>
          </div>
            </div>
        <section />
        {/* CARDS */}
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-sm-12 col-md-12 "
              style={{ cursor: "pointer" }}
              // onClick={toWeb}
                >
              <div
                className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        "
              >
                <div>
                  <img alt="img" src={g1.src} style={{ width: "30px" }} />
                </div>
                <div>
                  <h2 className="text-white fs-1">Web Development</h2>
                  <p className="text-white fw-lighter ">
                    Crafting dynamic and responsive websites that not only
                    engage users but also elevate your online presence to new
                    heights.
                  </p>
                </div>
                <div className="d-flex justify-content-lg-start justify-content-center  align-items-center ">
                  {/* <h6 className="text-danger pt-2 ">Explore More</h6> */}
                  <div className="d-flex justify-content-center align-items-center  ms-2">
                    <i className="fa-solid fa-arrow-right-long text-danger "></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12 " /* onClick={toDigi} */>
              <div
                className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        "
              >
                <div>
                  <img alt="img" src={g2.src} style={{ width: "30px" }} />
                </div>
                <div>
                  <h2 className="text-white fs-1">Digital Marketing</h2>
                  <p className="text-white fw-lighter ">
                    Driving growth through strategic digital marketing
                    campaigns, we ensure your brand stands out in the digital
                    landscape.
                  </p>
                </div>
                <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                  {/* <h6 className="text-danger pt-2 ">Explore More</h6> */}
                  <div className="d-flex justify-content-center align-items-center  ms-2">
                    <i className="fa-solid fa-arrow-right-long text-danger "></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12 " /* onClick={toSeo} */>
              <div
                className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        "
              >
                <div>
                  <img alt="img" src={g3.src} style={{ width: "30px" }} />
                </div>
                <div>
                  <h2 className="text-white fs-1">SEO Services</h2>
                  <p className="text-white fw-lighter ">
                    Optimizing your online visibility and rankings, our SEO
                    services enhance your digital footprint and attract the
                    right audience.
                  </p>
                </div>
                <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                  {/* <h6 className="text-danger pt-2 ">Explore More</h6> */}
                  <div className="d-flex justify-content-center align-items-center  ms-2">
                    <i className="fa-solid fa-arrow-right-long text-danger "></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12 mt-5" /* onClick={toApp} */>
              <div
                className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        "
              >
                <div>
                  <img alt="img" src={g4.src} style={{ width: "30px" }} />
                </div>
                <div>
                  <h2 className="text-white fs-1">App Development</h2>
                  <p className="text-white fw-lighter ">
                    Innovative app solutions tailored to your needs, bringing
                    your ideas to life and connecting you with users on the go.
                  </p>
                </div>
                <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                  {/* <h6 className="text-danger pt-2 ">Explore More</h6> */}
                  <div className="d-flex justify-content-center align-items-center  ms-2">
                    <i className="fa-solid fa-arrow-right-long text-danger "></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12 mt-5" /* onClick={toUi} */>
              <div
                className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        "
              >
                <div>
                  <img alt="img" src={g5.src} style={{ width: "30px" }} />
                </div>
                <div>
                  <h2 className="text-white fs-1">UI/UX Designing</h2>
                  <p className="text-white fw-lighter ">
                    Creating immersive and user-centric experiences, our UI/UX
                    design services captivate audiences and enhance user
                    satisfaction.
                  </p>
                </div>
                <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                  {/* <h6 className="text-danger pt-2 ">Explore More</h6> */}
                  <div className="d-flex justify-content-center align-items-center  ms-2">
                    <i className="fa-solid fa-arrow-right-long text-danger "></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-12 col-md-12 mt-5"
              // onClick={toQuality}
            >
              <div
                className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        "
              >
                <div>
                  <img alt="img" src={g6.src} style={{ width: "30px" }} />
                </div>
                <div>
                  <h2 className="text-white fs-1">Quality Assurance</h2>
                  <p className="text-white fw-lighter ">
                    Unlocking valuable insights from data to guide informed
                    decisions, our data analysis services empower your business
                    strategy.
                  </p>
                </div>
                <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                  {/* <h6 className="text-danger pt-2 ">Explore More</h6> */}
                  <div className="d-flex justify-content-center align-items-center  ms-2">
                    <i className="fa-solid fa-arrow-right-long text-danger "></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-12 col-md-12 mt-5"
              // onClick={toProdutrc}
            >
              <div
                className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        "
              >
                <div>
                  <img alt="img" src={g8.src} style={{ width: "30px" }} />
                </div>
                <div>
                  <h2 className="text-white fs-1">Product Management</h2>
                  <p className="text-white fw-lighter ">
                    Unlocking valuable insights from data to guide informed
                    decisions, our data analysis services empower your business
                    strategy.
                  </p>
                </div>
                <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                  {/* <h6 className="text-danger pt-2 ">Explore More</h6> */}
                  <div className="d-flex justify-content-center align-items-center  ms-2">
                    <i className="fa-solid fa-arrow-right-long text-danger "></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-12 col-md-12 mt-5 Service_card"
              // onClick={toGraphics}
            >
              <div
                className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        "
              >
                <div>
                  <img alt="img" src={g7.src} style={{ width: "30px" }} />
                </div>
                <div>
                  <h2 className="text-white fs-1">Graphic Designing</h2>
                  <p className="text-white fw-lighter ">
                    Innovative app solutions tailored to your needs, bringing
                    your ideas to life and connecting you with users on the go.
                  </p>
                </div>
                <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                  {/* <h6 className="text-danger pt-2 ">Explore More</h6> */}
                  <div className="d-flex justify-content-center align-items-center  ms-2">
                    <i className="fa-solid fa-arrow-right-long text-danger "></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12 mt-5" /* onClick={ToEcom} */>
              <div
                className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column">
                <div>
                  <img alt="img" src={g9.src} style={{ width: "30px" }} />
                </div>
                <div>
                  <h2 className="text-white fs-1">Ecommerce Development</h2>
                  <p className="text-white fw-lighter ">
                    Unlocking valuable insights from data to guide informed
                    decisions, our data analysis services empower your business
                    strategy.
                  </p>
                </div>
                <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                  {/* <h6 className="text-danger pt-2 ">Explore More</h6> */}
                  <div className="d-flex justify-content-center align-items-center  ms-2">
                    <i className="fa-solid fa-arrow-right-long text-danger "></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Service;
