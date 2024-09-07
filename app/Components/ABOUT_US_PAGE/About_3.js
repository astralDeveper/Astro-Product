import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About_3() {
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
      <div className="container ">
        <div className="row  pt-5">
          <div className="col-lg-12 col-sm-12 col-md-12 mt-5">
            <div className="">
              <h1 className="text-center text-white fw-bolder">
                Why Choose Us
              </h1>
            </div>
          </div>
        </div>
      </div>
      {isVisible ? (
        <div className="container ">
          <div className="row  ">
            <div className="col-lg-12 col-sm-12 col-md-12 ">
              <div className="container py-5 her0_4">
                <div className="row">
                  <div className="col-lg-3 col-sm-12 col-md-12 py-2">
                    <div
                      data-aos="fade-up"
                      data-aos-duration="300"
                      className="her0_4_card About_card_3
                         d-flex justify-content-center alig-items-center flex-column">
                      <div>
                        {/* <img src={im7} />

                                            */}
                      </div>
                      <div>
                        <h2 className="text-white fs-1">Open and direct</h2>
                        <p className="text-white fw-lighter ">
                          We are transparent and open. We communicate clearly
                          and directly. This is how we work,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-12 col-md-12 py-2 ">
                    <div data-aos="fade-up"
                      data-aos-duration="700"
                      className="her0_4_card About_card_3
                         d-flex justify-content-center alig-items-center flex-column">
                      <div>
                        {/* <img src={im7} />

                                            */}
                      </div>
                      <div>
                        <h2 className="text-white fs-1">Skilled</h2>
                        <p className="text-white fw-lighter ">
                          Our highly skilled IT professionals are specialised in
                          Java, PHP, React, Angular, Vue.js, AWS. Clean code,
                          simplicity.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-12 col-md-12 py-2 ">
                    <div data-aos="fade-up"
                      data-aos-duration="1100"
                      className="her0_4_card About_card_3
                         d-flex justify-content-center alig-items-center flex-column">
                      <div>
                        {/* <img src={im7} />

                                            */}
                      </div>
                      <div>
                        <h2 className="text-white fs-1">Solution-driven</h2>
                        <p className="text-white fw-lighter ">
                          We combine our technichal skills with business afinity
                          and a critical mindset to deliver the best possible
                          solution for your business.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-12 col-md-12 py-2 ">
                    <div data-aos="fade-up"
                      data-aos-duration="1500"
                      className="her0_4_card About_card_3
                         d-flex justify-content-center alig-items-center flex-column">
                      <div>
                        {/* <img src={im7} />

                                            */}
                      </div>
                      <div>
                        <h2 className="text-white fs-1">Trustworthy</h2>
                        <p className="text-white fw-lighter ">
                          We are always there to help clients with advice and
                          actions. We take ownership, responsibility.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-5">
          <Slider {...settings}>
            <div className="col-lg-3 col-sm-12 col-md-12 py-2">
              <div
                className="her0_4_card About_card_3
                         d-flex justify-content-center alig-items-center flex-column">
                <div>
                  {/* <img src={im7} />

                                            */}
                </div>
                <div>
                  <h2 className="text-white fs-1">Open and direct</h2>
                  <p className="text-white fw-lighter ">
                    We are transparent and open. We communicate clearly and
                    directly. This is how we work,
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-12 py-2 ">
              <div
                className="her0_4_card About_card_3
                         d-flex justify-content-center alig-items-center flex-column">
                <div>
                  {/* <img src={im7} />

                                            */}
                </div>
                <div>
                  <h2 className="text-white fs-1">Skilled</h2>
                  <p className="text-white fw-lighter ">
                    Our highly skilled IT professionals are specialised in Java,
                    PHP, React, Angular, Vue.js, AWS. Clean code, simplicity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-12 py-2 ">
              <div
                className="her0_4_card About_card_3
                         d-flex justify-content-center alig-items-center flex-column">
                <div>
                  {/* <img src={im7} />

                                            */}
                </div>
                <div>
                  <h2 className="text-white fs-1">Solution-driven</h2>
                  <p className="text-white fw-lighter ">
                    We combine our technichal skills with business afinity and a
                    critical mindset to deliver the best possible solution for
                    your business.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-12 py-2 ">
              <div
                className="her0_4_card About_card_3
                         d-flex justify-content-center alig-items-center flex-column">
                <div>
                  {/* <img src={im7} />

                                            */}
                </div>
                <div>
                  <h2 className="text-white fs-1">Trustworthy</h2>
                  <p className="text-white fw-lighter ">
                    We are always there to help clients with advice and actions.
                    We take ownership, responsibility.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      )}
    </>
  );
}

export default About_3;
