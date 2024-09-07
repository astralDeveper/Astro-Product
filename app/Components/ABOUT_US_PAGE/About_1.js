import React, { useEffect } from "react";
import Navbar from "../HomePage/Navbar";
import "./About.css";
// import About_2 from './About_2'
import About_3 from "./About_3";
import About_04 from "./About_04";
import About_5 from "./About_5";
import About_6 from "./About_6";
import About_7 from "./About_7";
import About_8 from "./About_8";
import About_9 from "./About_9";
import AboutCard from "./AboutCards/AboutCards";
import { useSelector } from "react-redux";
import Footer from "../HomePage/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function About_1() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const selector = useSelector((state) => state.cartItems.cartItems);

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
      <main className="hero2-sec">
        <section className="About_1_sec">
          <Navbar items={selector.length} />
          <div className="container" data-aos="zoom-out-up">
            <div className="row">
              <div className="col-12 about_1  d-flex justify-content-center align-items-center flex-column py-5">
                <h1 className="w-75 text-white text-center">
                  Keep growing the lifetime value of every subscriber
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
        {/* ----ABOUT_2---- */}
        <section className="About_2_Sec">
          <About_3 />
        </section>
        <section className="About_4_Sec">
          <About_04 />
        </section>

        <About_5 />
        <AboutCard />
        <section className="About_6_Sec">
          {/* <About_04 /> */}
          {/* <About_6 /> */}
        </section>

        <About_7 />
        <About_8 />
        {/* <About_9 /> */}
        <Footer />
      </main>
    </>
  );
}

export default About_1;
