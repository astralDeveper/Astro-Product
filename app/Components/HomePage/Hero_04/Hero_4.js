import React, { useEffect } from "react";
import im1 from "./hero_04_imges/Group (1).svg";
import im2 from "./hero_04_imges/Group (2).svg";
import im3 from "./hero_04_imges/Group (3).svg";
import im4 from "./hero_04_imges/Group (4).svg";
import im5 from "./hero_04_imges/Group (5).svg";
import im6 from "./hero_04_imges/Group (6).svg";
import im7 from "./hero_04_imges/Group.svg";
// import Footer from '../HomePage/Footer/Footer'
// import Navbar from '../HomePage/Navbar'
import g1 from "./Serviuce/Group (7).svg";
import g2 from "./Serviuce/Group (9).svg";
import g3 from "./Serviuce/Group (10).svg";
import g4 from "./Serviuce/Group (11).svg";
import g5 from "./Serviuce/Group (12).svg";
import g6 from "./Serviuce/Group (13).svg";
import g7 from "./Serviuce/Group (14).svg";
import g8 from "./Serviuce/Group (15).svg";
import g9 from "./Serviuce/Group (16).svg";
import AOS from "aos";
import "aos/dist/aos.css";

import { useRouter } from "next/navigation";
function Hero_4() {
  const router = useRouter();
  const toWeb = () => {
    router.push("/Services/Web_development");
  };

  const toDigi = () => {
    router.push("/Services/Digital_Marketing");
  };
  const toSeo = () => {
    router.push("/Services/SEO");
  };
  const toApp = () => {
    router.push("/Services/App_development");
  };
  const toUi = () => {
    router.push("/Services/UI/UX");
  };
  const toQuality = () => {
    router.push("/Services/Quality_Assurance");
  };
  const toProdutrc = () => {
    router.push("/Services/Product_Management");
  };
  const toGraphics = () => {
    router.push("/Services/Graphics_Designing");
  };
  const ToEcom = () => {
    router.push("/Services/Ecommerce");
  };

  //   ------AOS Scroll Animtion--------

  useEffect(() => {
    AOS.init({
      // Optional settings:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <>
      <div className="container py-5 her0_4">
        <div className="row">
          <div
            className="col-lg-4 col-sm-12 col-md-12 mb-lg-5 "
            style={{ cursor: "pointer" }} /* onClick={toWeb} */
          >
            <div
              className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column"
              data-aos="flip-down">
              <div>
                <img src={g1.src} style={{ width: "30px" }} />
              </div>
              <div>
                <h2 className="text-white fs-4">Web Development</h2>
                <p className="text-white fw-lighter ">
                  Crafting dynamic and responsive websites that not only engage
                  users but also elevate your online presence to new heights.
                </p>
              </div>
              <div className="d-flex justify-content-lg-start justify-content-center  align-items-center ">
                {/* <h6 className='text-danger pt-2 '>Explore More</h6> */}
                <div className="d-flex justify-content-center align-items-center  ms-2">
                  <i className="fa-solid fa-arrow-right-long text-danger "></i>
                </div>
              </div>
            </div>
            </div>
          
          <div
            className="col-lg-4 col-sm-12 col-md-12 mb-lg-5 " /* onClick={toDigi} */
          >
            <div
              className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        "
              data-aos="flip-down">
              <div>
                <img src={g2.src} style={{ width: "30px" }} />
              </div>
              <div>
                <h2 className="text-white fs-4">Digital Marketing</h2>
                <p className="text-white fw-lighter ">
                  Driving growth through strategic digital marketing campaigns,
                  we ensure your brand stands out in the digital landscape.
                </p>
              </div>
              <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                {/* <h6 className='text-danger pt-2 '>Explore More</h6> */}
                <div className="d-flex justify-content-center align-items-center  ms-2">
                  <i className="fa-solid fa-arrow-right-long text-danger "></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-12 col-md-12 mb-lg-5 " /* onClick={toSeo} */
          >
            <div
              className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        "
              data-aos="flip-down">
              <div>
                <img src={g3.src} style={{ width: "30px" }} />
              </div>
              <div>
                <h2 className="text-white fs-4">SEO Services</h2>
                <p className="text-white fw-lighter ">
                  Optimizing your online visibility and rankings, our SEO
                  services enhance your digital footprint and attract the right
                  audience.
                </p>
              </div>
              <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                {/* <h6 className='text-danger pt-2 '>Explore More</h6> */}
                <div className="d-flex justify-content-center align-items-center  ms-2">
                  <i className="fa-solid fa-arrow-right-long text-danger "></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-12 col-md-12 mb-lg-5" /* onClick={toApp} */
          >
            <div
              className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        "
              data-aos="flip-down">
              <div>
                <img src={g4.src} style={{ width: "30px" }} />
              </div>
              <div>
                <h2 className="text-white fs-4">App Development</h2>
                <p className="text-white fw-lighter ">
                  Innovative app solutions tailored to your needs, bringing your
                  ideas to life and connecting you with users on the go.
                </p>
              </div>
              <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                {/* <h6 className='text-danger pt-2 '>Explore More</h6> */}
                <div className="d-flex justify-content-center align-items-center  ms-2">
                  <i className="fa-solid fa-arrow-right-long text-danger "></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-12 col-md-12 mb-lg-5" /* onClick={toUi} */
          >
            <div
              className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        "
              data-aos="flip-down">
              <div>
                <img src={g5.src} style={{ width: "30px" }} />
              </div>
              <div>
                <h2 className="text-white fs-4">UI/UX Designing</h2>
                <p className="text-white fw-lighter ">
                  Creating immersive and user-centric experiences, our UI/UX
                  design services captivate audiences and enhance user
                  satisfaction.
                </p>
              </div>
              <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                {/* <h6 className='text-danger pt-2 '>Explore More</h6> */}
                <div className="d-flex justify-content-center align-items-center  ms-2">
                  <i className="fa-solid fa-arrow-right-long text-danger "></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-12 col-md-12 mb-lg-5" /* onClick={toQuality} */
          >
            <div
              className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        "
              data-aos="flip-down">
              <div>
                <img src={g6.src} style={{ width: "30px" }} />
              </div>
              <div>
                <h2 className="text-white fs-4">Quality Assurance</h2>
                <p className="text-white fw-lighter ">
                  Unlocking valuable insights from data to guide informed
                  decisions, our data analysis services empower your business
                  strategy.
                </p>
              </div>
              <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                {/* <h6 className='text-danger pt-2 '>Explore More</h6> */}
                <div className="d-flex justify-content-center align-items-center  ms-2">
                  <i className="fa-solid fa-arrow-right-long text-danger "></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-12 col-md-12 mb-lg-5" /* onClick={toProdutrc} */
          >
            <div
              className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        "
              data-aos="flip-down">
              <div>
                <img src={g8.src} style={{ width: "30px" }} />
              </div>
              <div>
                <h2 className="text-white fs-4">Product Management</h2>
                <p className="text-white fw-lighter ">
                  Unlocking valuable insights from data to guide informed
                  decisions, our data analysis services empower your business
                  strategy.
                </p>
              </div>
              <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                {/* <h6 className='text-danger pt-2 '>Explore More</h6> */}
                <div className="d-flex justify-content-center align-items-center  ms-2">
                  <i className="fa-solid fa-arrow-right-long text-danger "></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-12 col-md-12 mb-lg-5 Service_card" /* onClick={toGraphics} */
          >
            <div
              className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        "
              data-aos="flip-down">
              <div>
                <img src={g7.src} style={{ width: "30px" }} />
              </div>
              <div>
                <h2 className="text-white fs-4">Graphic Designing</h2>
                <p className="text-white fw-lighter ">
                  Innovative app solutions tailored to your needs, bringing your
                  ideas to life and connecting you with users on the go.
                </p>
              </div>
              <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                {/* <h6 className='text-danger pt-2 '>Explore More</h6> */}
                <div className="d-flex justify-content-center align-items-center  ms-2">
                  <i className="fa-solid fa-arrow-right-long text-danger "></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-12 col-md-12 mb-lg-5" /* onClick={ToEcom} */
          >
            <div
              className=" her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        "
              data-aos="flip-down">
              <div>
                <img src={g9.src} style={{ width: "30px" }} />
              </div>
              <div>
                <h2 className="text-white fs-4">Ecommerce Development</h2>
                <p className="text-white fw-lighter ">
                  Unlocking valuable insights from data to guide informed
                  decisions, our data analysis services empower your business
                  strategy.
                </p>
              </div>
              <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                {/* <h6 className='text-danger pt-2 '>Explore More</h6> */}
                <div className="d-flex justify-content-center align-items-center  ms-2">
                  <i className="fa-solid fa-arrow-right-long text-danger "></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero_4;
