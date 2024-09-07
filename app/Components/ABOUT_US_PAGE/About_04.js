import { useState, useRef, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function About_04() {
  const [count, setCount] = useState(0);
  const [coun2, setCount2] = useState(0);
  const [coun3, setCount3] = useState(0);
  const [coun4, setCount4] = useState(0);
  const [coun5, setCount5] = useState(0);
  const [coun6, setCount6] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let currentCount = 0;
          let currentCount2 = 0;
          let currentCount3 = 0;
          let currentCount4 = 0;
          let currentCount5 = 0;
          let currentCount6 = 0;

          const intervalId = setInterval(() => {
            if (currentCount <= 30) {
              setCount(currentCount);
              currentCount++;
            }
            if (currentCount2 <= 12) {
              setCount2(currentCount2);
              currentCount2++;
            }
            if (currentCount3 <= 55) {
              setCount3(currentCount3);
              currentCount3++;
            }
            if (currentCount4 <= 1) {
              setCount4(currentCount4);
              currentCount4++;
            }
            if (currentCount5 <= 140) {
              setCount5(currentCount5);
              currentCount5++;
            }
            if (currentCount6 <= 14.5) {
              setCount6(currentCount6);
              currentCount6++;
            } else {
              clearInterval(intervalId);
            }
          }, 10);

          // Clean up the interval when the component is no longer in view
          return () => {
            clearInterval(intervalId);
          };
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

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
      <div className="container py-5 " ref={containerRef}>
        <div className="row my-lg-5 ">
          <div className="col-lg-12 col-sm-6 col-md-6 mb-5">
            <div className="abou-4-text ">
              <h1 className=" text-white">Our results speak for themselves</h1>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-6 Abou-4-coun d-flex justify-content-center align-items-center" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="500">
            <div className="abou_4_card">
              <h1>30x</h1>
              <p>Growth of active merchants</p>
            </div>
          </div>
          <div className="col-lg-4  w col-sm-6 col-md-6 Abou-4-coun d-flex justify-content-center align-items-center mt-3" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="500">
            <div className="abou_4_card">
              <h1>${count}B</h1>
              <p>Total payment volume</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-6 Abou-4-coun d-flex justify-content-center align-items-center mt-3" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="500">
            <div className="abou_4_card">
              <h1>{coun2}M+</h1>
              <p>Active monthly subscribers</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-6 Abou-4-coun d-flex justify-content-center align-items-center mt-3" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="500">
            <div className="abou_4_card">
              <h1>${coun4}B</h1>
              <p>Customers revenue recovered</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-6 Abou-4-coun d-flex justify-content-center align-items-center mt-3" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="500">
            <div className="abou_4_card">
              <h1>{coun5}+</h1>
              <p>Currencies enabled</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-6 Abou-4-coun d-flex justify-content-center align-items-center mt-3" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="500">
            <div className="abou_4_card">
              <h1>{coun6}M</h1>
              <p>Subscribers saved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About_04;
