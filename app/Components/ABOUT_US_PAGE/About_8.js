import React from "react";
import p1 from "./About_8_images/div.company-news__logo (1).png";
import p2 from "./About_8_images/div.company-news__logo (2).png";
import p3 from "./About_8_images/div.company-news__logo (3).png";
import p4 from "./About_8_images/div.company-news__logo (4).png";
import p5 from "./About_8_images/div.company-news__logo (5).png";
import p6 from "./About_8_images/div.company-news__logo (6).png";
import t1 from "./About_8_images/imges_SECONG/div.company-news__top.png";
// import t1 from './About_8_images/imges_SECONG/div.company-news__top.png'
import t2 from "./About_8_images/imges_SECONG/div.company-news__top (2).png";
import t3 from "./About_8_images/imges_SECONG/div.company-news__top (3).png";
import t4 from "./About_8_images/imges_SECONG/div.company-news__top (1).png";

import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About_8() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 660);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isVisible]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 660, // Breakpoint for small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
      <section className="Section_8">
        <div className="container py-5">
          <div className="row">
            {/* <div className='col-lg-12 col-sm-12 col-md-12 mt-5 d-flex justify-content-center align-items-center'>
                            <div className='text-center'>
                                <button className='about_tbn'>View careers</button>
                            </div>
                        </div> */}
            <div className="col-lg-12 col-sm-12 col-md-12 mt-5 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h1 className="text-white text-center fw-bolder">
                  Featured in
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          {isVisible ? (
            <div className="row">
              <div className="col-lg-3 col-sm-12 col-md-12">
                <div
                  className="featured-in-card"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine">
                  <div className="card-bg-AB position-relative d-flex justify-content-center">
                    {/* BG IMAGES */}
                    <img src={t1.src} />
                    {/* <h1></h1> */}
                  </div>
                  <div className="text-div">
                    <h1 className="text-white  fs-4">
                      10 things <span className="fw-lighter">Astero</span> can
                      do for your business
                    </h1>
                    <p className="text-white fw-lighter">
                      From growth, revenue recovery, to gateway and currency
                      support, Astro has it covered.
                    </p>
                    <div className="d-flex justify-content-start mt-4 pt-3 "></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12">
                <div
                  className=" featured-in-card  "
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine">
                  <div className="card-bg-AB position-relative d-flex justify-content-center">
                    {/* BG IMAGES */}
                    <img src={t2.src} />
                    {/* <h1></h1> */}
                  </div>
                  <div className="text-div">
                    <h1 className="text-white  fs-4">
                      <span className="fw-lighter">Astero </span>powers high-
                      volume subscriptions
                    </h1>
                    <p className="text-white fw-lighter">
                      Discover how Astro is powering recurring revenue for
                      subscription businesses.
                    </p>
                    <div className="d-flex justify-content-start "></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12">
                <div className="  featured-in-card " data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine">
                  <div className="card-bg-AB position-relative d-flex justify-content-center">
                    {/* BG IMAGES */}
                    <img src={t3.src} />
                    {/* <h1></h1> */}
                  </div>
                  <div className="text-div">
                    <h1 className="text-white  fs-4">
                      Wallet enables strategic expansion for{" "}
                      <span className="fw-lighter">Astero</span>
                    </h1>
                    <p className="text-white fw-lighter">
                      From growth, revenue recovery, to gateway and currency
                      support, Astro has it covered.
                    </p>
                    <div className="d-flex justify-content-start "></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12">
                <div className=" featured-in-card  " data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine">
                  <div className="card-bg-AB position-relative d-flex justify-content-center">
                    {/* BG IMAGES */}
                    <img src={t4.src} />
                    {/* <h1></h1> */}
                  </div>
                  <div className="text-div">
                    <h1 className="text-white  fs-4">
                      <span className="fw-lighter">Astero</span> Research
                    </h1>
                    <p className="text-white fw-lighter">
                      Subscription benchmarks and data that provide deep
                      insights into the metrics that matter most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="px-5">
              <Slider {...settings}>
                <div className="col-lg-3 col-sm-12 col-md-12">
                  <div className="  ">
                    <div className="card-bg-AB position-relative d-flex justify-content-center">
                      {/* BG IMAGES */}
                      <img src={t1.src} />
                      {/* <h1></h1> */}
                    </div>
                    <div className="text-div">
                      <h1 className="text-white  fs-4">
                        10 things <span className="fw-lighter">Astero</span> can
                        do for your business
                      </h1>
                      <p className="text-white fw-lighter">
                        From growth, revenue recovery, to gateway and currency
                        support, Astro has it covered.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-12">
                  <div className="   ">
                    <div className="card-bg-AB position-relative d-flex justify-content-center">
                      {/* BG IMAGES */}
                      <img src={t2.src} />
                      {/* <h1></h1> */}
                    </div>
                    <div className="text-div">
                      <h1 className="text-white  fs-4">
                        <span className="fw-lighter">Astero </span>powers high-
                        volume subscriptions
                      </h1>
                      <p className="text-white fw-lighter">
                        Discover how Astro is powering recurring revenue for
                        subscription businesses.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-12">
                  <div className="   ">
                    <div className="card-bg-AB position-relative d-flex justify-content-center">
                      {/* BG IMAGES */}
                      <img src={t3.src} />
                      {/* <h1></h1> */}
                    </div>
                    <div className="text-div">
                      <h1 className="text-white  fs-4">
                        Wallet enables strategic expansion for{" "}
                        <span className="fw-lighter">Astero</span>
                      </h1>
                      <p className="text-white fw-lighter">
                        From growth, revenue recovery, to gateway and currency
                        support, Astro has it covered.
                      </p>
                      {/* <div className='d-flex justify-content-start '>
                                                <p className='text-danger fs-6'>View infographic</p>
                                                <i className="fa-solid fa-arrow-right text-danger ms-2 mt-1"></i>
                                            </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-12">
                  <div className="   ">
                    <div className="card-bg-AB position-relative d-flex justify-content-center">
                      {/* BG IMAGES */}
                      <img src={t4.src} />
                      {/* <h1></h1> */}
                    </div>
                    <div className="text-div">
                      <h1 className="text-white  fs-4">
                        <span className="fw-lighter">Astero</span> Research
                      </h1>
                      <p className="text-white fw-lighter">
                        Subscription benchmarks and data that provide deep
                        insights into the metrics that matter most.
                      </p>
                      {/* <div className='d-flex justify-content-start mt-5 pt-4 '>
                                                <p className='text-danger fs-6'>View infographic</p>
                                                <i className="fa-solid fa-arrow-right text-danger ms-2 " ></i>
                                            </div> */}
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default About_8;
