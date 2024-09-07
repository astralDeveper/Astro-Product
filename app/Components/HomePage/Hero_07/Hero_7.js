import React, { useEffect } from "react";
import sara from "./sara.jpg";
import commas from "./quotation-marks.png";
import men from "./men_image.png";
import men2 from "./men2.avif";
import AOS from 'aos';
import 'aos/dist/aos.css';

// import './style.css'

function Hero_7() {

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
      <div className="container py-5">
        <div className="row my-lg-5 card-row">
          <div className="col-lg-12 col-sm-12 col-md-12 sec-9-h1  d-flex justify-content-center align-items-center flex-column">
            <div className="col-lg-12 col-sm-12 col-md-12 sec-9-h1 d-flex justify-content-center align-items-center flex-column" data-aos="zoom-in-down">
            <h1 className="text-white w-50">
              Our Clients’ Thoughts And Talks About Us
            </h1>
            <p className="text-white fw-lighter w-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vitae sapien eu neque cursus molestie
            </p>
            </div>
            <div className="container py-5">
              <div className="row my-lg-5 card-row">
                <div className="col-lg-3 col-sm-12 col-md-12 mt-3 d-flex justify-content-center  align-items-center" data-aos="fade-up"
                      data-aos-duration="500">
                  <div className=" card_07 d-flex position-relative justify-content-center align-items-center set-child-card">
                    <div
                      className="card_07_inner    d-flex  justify-content-center align-items-center flex-column "
                     >
                      <img className="removeImage" src={sara.src} />
                      <h1 className="text-white fs-4 removeImage">
                        Sarah Thompson
                      </h1>
                      <p className="text-white fw-lighter removeImage">
                        Marketing Manager
                      </p>

                      <p
                        className="text-white fw-lighter removeText position-absolute set-text"
                        style={{ display: "none" }}>
                        As a Marketing Manager, I had the pleasure of working
                        closely with the Astero Solutions team on a recent
                        project. Their innovative solutions and seamless
                        collaboration significantly streamlined our workflow.
                        The software they developed not only met but exceeded
                        our expectations. I highly recommend Astero Solutions
                        for their professionalism, technical expertise, and
                        commitment to delivering outstanding results.
                      </p>
                    </div>
                    <div className="commas-div">
                      <img
                        src={commas.src}
                        className="commas  comma1"
                        style={{ display: "none" }}
                      />
                      <img
                        src={commas.src}
                        className="commas mt-5 comma2"
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-12 mt-3 d-flex justify-content-center  align-items-center" data-aos="fade-up"
                      data-aos-duration="800">
                  <div className="card-testi card_07 d-flex position-relative justify-content-center align-items-center set-child-card">
                    <div className="card_07_inner d-flex  justify-content-center align-items-center flex-column ">
                      <img
                        className="removeImage"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8"
                      />
                      <h1 className="text-white fs-4 removeImage">
                        John Rodriguez
                      </h1>
                      <p className="text-white fw-lighter removeImage">
                        IT Director
                      </p>

                      <p
                        className="text-white fw-lighter removeText position-absolute set-text"
                        style={{ display: "none" }}>
                        Our experience with Astero Solutions has been nothing
                        short of excellent. The team's deep understanding of our
                        industry coupled with their technical proficiency
                        allowed for the development of a robust software
                        solution that perfectly catered to our specific needs.
                        Their dedication to quality and timely delivery makes
                        them a reliable partner for any IT project. I look
                        forward to future collaborations with Astero Solutions.
                      </p>
                    </div>
                    <div className="commas-div">
                      <img
                        src={commas.src}
                        className="commas  comma1"
                        style={{ display: "none" }}
                      />
                      <img
                        src={commas.src}
                        className="commas mt-5 comma2"
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-12 mt-3 d-flex justify-content-center  align-items-center" data-aos="fade-up"
                      data-aos-duration="1100">
                  <div className=" card_07 d-flex position-relative justify-content-center align-items-center set-child-card">
                    <div className="card_07_inner    d-flex  justify-content-center align-items-center flex-column ">
                      <img className="removeImage" src={men.src} />
                      <h1 className="text-white fs-4 removeImage">
                        Emily Chang
                      </h1>
                      <p className="text-white fw-lighter removeImage">
                        Finance Analyst
                      </p>

                      <p
                        className="text-white fw-lighter removeText position-absolute set-text"
                        style={{ display: "none" }}>
                        As a Finance Analyst, precision and efficiency are
                        paramount in our daily operations. Astero Solutions
                        delivered a tailored financial software solution that
                        not only enhanced our data management but also
                        significantly improved our reporting capabilities. Their
                        team's attention to detail, coupled with their
                        commitment to meeting deadlines, makes them a trusted
                        partner. I wholeheartedly recommend Astero Solutions for
                        any financial software needs.
                      </p>
                    </div>
                    <div className="commas-div">
                      <img
                        src={commas.src}
                        className="commas  comma1"
                        style={{ display: "none" }}
                      />
                      <img
                        src={commas.src}
                        className="commas mt-5 comma2"
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-12 mt-3 d-flex justify-content-center  align-items-center" data-aos="fade-up"
                      data-aos-duration="1400">
                  <div className="card-testi card_07 d-flex position-relative justify-content-center align-items-center set-child-card">
                    <div className="card_07_inner    d-flex  justify-content-center align-items-center flex-column ">
                      <img className="removeImage" src={men2.src} />
                      <h1 className="text-white fs-4 removeImage">
                        Michael Turner
                      </h1>
                      <p className="text-white fw-lighter removeImage">
                        HR Manager
                      </p>

                      <p
                        className="text-white fw-lighter removeText position-absolute set-text"
                        style={{ display: "none" }}>
                        Astero Solutions has been instrumental in transforming
                        our HR processes. Their user-friendly and intuitive HR
                        software streamlined our recruitment, onboarding, and
                        performance management tasks. The team's responsiveness
                        to our specific requirements and their proactive
                        approach in addressing potential challenges made the
                        entire collaboration smooth and successful. I highly
                        commend Astero Solutions for their expertise and
                        dedication to client satisfaction.
                      </p>
                    </div>
                    <div className="commas-div">
                      <img
                        src={commas.src}
                        className="commas  comma1"
                        style={{ display: "none" }}
                      />
                      <img
                        src={commas.src}
                        className="commas mt-5 comma2"
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero_7;
