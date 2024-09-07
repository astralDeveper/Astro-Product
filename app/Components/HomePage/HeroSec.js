import React, { useEffect, useState } from "react";
import img1 from "./hero_img.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroSec() {
  // const [loader, setLoader] = useState(true)
  // useEffect(() => {
  //     const time = setTimeout(() => {
  //         setLoader(false)
  //     }, 7000);

  // }, [])

  //   --------------

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
      <div className="container"  data-aos="fade-up">
        <div className="row flex justify-ceontent-center align-items-center">
          <div className=" col-lg-6 col-sm-12 col-md-12 her0_L d-flex justify-ceontent-center align-items-center">
            <div className="position-relative ">
          
                <h1 className="fw-bolder text-white">
                  Providing the Best Services and IT
                  <span className="red-sol ms-3  ">
                    Solutions
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 345 48"
                      fill="none">
                      <path
                        d="M1.28809 46C47.2547 19.4232 196.567 -28.351 343.66 29.0292"
                        stroke="#D01921"
                        stroke-width="3"
                      />
                    </svg>
                  </span>
                </h1>
               
              <div className="col-lg-6 col-sm-12 col-md-12 hero_P_SEC hero_p_small  mt-lg-5 pt-lg-3 w-100">
                <div>
                  <p className="text-white  fw-lighter fs-5 w-100 ">
                    Committed to delivering cutting-edge solutions, seamlessly
                    blending creativity and technology to empower businesses
                    worldwide.
                  </p>
                  {/* <div className='buttns d-flex justify-content-start align-items-center'>
                                        <button className='start_btn'>Get jani</button>
                                        <button className='c_btn rotate-icon ms-3 d-flex justify-content-center align-items-center'><i className="fa-solid fa-angle-up"></i></button>

                                    </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12 d-flex justify-content-end align-items-center  set-hero-image-div sm-order-first">
            <div>
              <img src={img1.src} className="set-hero-image " />
            </div>
          </div>

          {/* ------------HERO P SEC------ */}
        </div>
      </div>
    </>
  );
}

export default HeroSec;
