import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './About.module.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


import React, { useState, useEffect } from 'react';


const AboutCard = () => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 660);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
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
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });
}, []);

  return (
    <div className={`${styles.contmain} text-white min-h-screen`}>
      <div className={`${styles.main}`}>
        <div className="bg-[#0d0d0d] text-white min-h-screen">
          <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
            <h2 className="text-3xl font-bold text-center mb-12 py-5">How we got here</h2>
            {
              isVisible ? (

                <div className="row">
                  {/* Large screens (>=992px) */}
                  <div className={`${styles.mainCard} col-lg-3 col-md-6 col-sm-12`} data-aos="flip-left">
                    <h3 className={`${styles.cardheading}  font-bold text-[#E50914] mb-4`} >'22</h3>
                    <div>
                      <div className={`${styles.bottomline}`}></div>
                      <ul className="space-y-4">
                        <li className={`${styles.listStyle}`}>Recovers $1B in revenue for Astro <br /> customers</li>
                        <li className={`${styles.listStyle}`} >Acquires LeapRev and enhances <br /> <span className={`${styles.listStyleSpan}`}>revenue recognition</span> capabilities</li>
                        <li className={`${styles.listStyle}`}>Astro merchants see $480M in <br /> incremental revenue from add-ons</li>
                        <li className={`${styles.listStyle}`}>51M active monthly subscribers on <br /> Astro, with a total payment <br /> volume of $10.5B</li>
                      </ul>
                    </div>

                  </div>
                  <div className={`${styles.mainCard} col-lg-3 col-md-6 col-sm-12`} data-aos="flip-left">
                    <h3 className={`${styles.cardheading}  font-bold text-[#E50914] mb-4`}>'21</h3>
                    <div>
                      <div className={`${styles.bottomline}`}></div>
                      <ul className="space-y-4">
                        <li className={`${styles.listStyle}`}>Astro surpasses 40M <br /> subscriptions under management</li>
                        <li className={`${styles.listStyle}`} >Launches <span className={`${styles.listStyleSpan}`}>Wallet</span>, Venmo, and pay- <br /> as-you-go capabilities for usage- <br /> based pricing</li>
                        <li className={`${styles.listStyle}`}>Introduces local payment methods <br /> in LatAm</li>
                        <li className={`${styles.listStyle}`}>New notable customers include: <br />TIME</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${styles.mainCard} col-lg-3 col-md-6 col-sm-12`}data-aos="flip-left">
                    <h3 className={`${styles.cardheading}  font-bold text-[#E50914] mb-4`}>'20</h3>
                    <div>
                      <div className={`${styles.bottomline}`}></div>
                      <ul className="space-y-4">
                        <li className={`${styles.listStyle}`}>Astro Secure <span className={`${styles.listStyleSpan}`}> baking from <br /> Accel-KKR </span>, a leading technology- <br />focused growth equity firm </li>
                        <li className={`${styles.listStyle}`} >Surpasses $7B in annual transaction <br />volume</li>
                        <li className={`${styles.listStyle}`}>New notable customers include: <br />Scentbird, Ellevest</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${styles.mainCard} col-lg-3 col-md-6 col-sm-12`} data-aos="flip-left">
                    <h3 className={`${styles.cardheading}  font-bold text-[#E50914] mb-4`}>'19</h3>
                    <div>
                      <div className={`${styles.bottomline}`}></div>
                      <ul className="space-y-4">
                        <li className={`${styles.listStyle}`}>Astro celebrates 10-year <br />anniversary</li>
                        <li className={`${styles.listStyle}`} >New Orleans office opens, <br /> expanding the engineering team</li>
                        <li className={`${styles.listStyle}`}>Astro completes its <span className={`${styles.listStyleSpan}`}>“move to the <br /> cloud”</span></li>
                        <li className={`${styles.listStyle}`}>Astro raises $16.5M Series C <br />funding round</li>
                      </ul>
                    </div>
                  </div>
                </div>

              ) : (
                <div className=''>
                  <Slider {...settings}>
                    <div className={`${styles.mainCard} col-lg-3 col-md-6 col-sm-12`}>
                      <h3 className={`${styles.cardheading}  font-bold text-[#E50914] mb-4`}>'22</h3>
                      <div>
                        <div className={`${styles.bottomline}`}></div>
                        <ul className="space-y-4">
                          <li className={`${styles.listStyle}`}>Recovers $1B in revenue for Astro <br /> customers</li>
                          <li className={`${styles.listStyle}`} >Acquires LeapRev and enhances <br /> <span className={`${styles.listStyleSpan}`}>revenue recognition</span> capabilities</li>
                          <li className={`${styles.listStyle}`}>Astro merchants see $480M in <br /> incremental revenue from add-ons</li>
                          <li className={`${styles.listStyle}`}>51M active monthly subscribers on <br /> Astro, with a total payment <br /> volume of $10.5B</li>
                        </ul>
                      </div>

                    </div>
                    <div className={`${styles.mainCard} col-lg-3 col-md-6 col-sm-12`}>
                      <h3 className={`${styles.cardheading}  font-bold text-[#E50914] mb-4`}>'21</h3>
                      <div>
                        <div className={`${styles.bottomline}`}></div>
                        <ul className="space-y-4">
                          <li className={`${styles.listStyle}`}>Astro surpasses 40M <br /> subscriptions under management</li>
                          <li className={`${styles.listStyle}`} >Launches <span className={`${styles.listStyleSpan}`}>Wallet</span>, Venmo, and pay- <br /> as-you-go capabilities for usage- <br /> based pricing</li>
                          <li className={`${styles.listStyle}`}>Introduces local payment methods <br /> in LatAm</li>
                          <li className={`${styles.listStyle}`}>New notable customers include: <br />TIME</li>
                        </ul>
                      </div>
                    </div>
                    <div className={`${styles.mainCard} col-lg-3 col-md-6 col-sm-12`}>
                      <h3 className={`${styles.cardheading}  font-bold text-[#E50914] mb-4`}>'20</h3>
                      <div>
                        <div className={`${styles.bottomline}`}></div>
                        <ul className="space-y-4">
                          <li className={`${styles.listStyle}`}>Astro Secure <span className={`${styles.listStyleSpan}`}> baking from <br /> Accel-KKR </span>, a leading technology- <br />focused growth equity firm </li>
                          <li className={`${styles.listStyle}`} >Surpasses $7B in annual transaction <br />volume</li>
                          <li className={`${styles.listStyle}`}>New notable customers include: <br />Scentbird, Ellevest</li>
                        </ul>
                      </div>
                    </div>
                    <div className={`${styles.mainCard} col-lg-3 col-md-6 col-sm-12`}>
                      <h3 className={`${styles.cardheading}  font-bold text-[#E50914] mb-4`}>'19</h3>
                      <div>
                        <div className={`${styles.bottomline}`}></div>
                        <ul className="space-y-4">
                          <li className={`${styles.listStyle}`}>Astro celebrates 10-year <br />anniversary</li>
                          <li className={`${styles.listStyle}`} >New Orleans office opens, <br /> expanding the engineering team</li>
                          <li className={`${styles.listStyle}`}>Astro completes its <span className={`${styles.listStyleSpan}`}>“move to the <br /> cloud”</span></li>
                          <li className={`${styles.listStyle}`}>Astro raises $16.5M Series C <br />funding round</li>
                        </ul>
                      </div>
                    </div>
                  </Slider>
                </div>
              )
            }


          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;