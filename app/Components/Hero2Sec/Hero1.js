import { useEffect, useRef } from 'react'
import i1 from './HeroSec_Img/image 5.png'
import i2 from './HeroSec_Img/image 6.png'
import i3 from './HeroSec_Img/image 7.png'
import i4 from './HeroSec_Img/image 8.png'
import i5 from './HeroSec_Img/image 9.png'
import i6 from './HeroSec_Img/image.png'
import './Hero2Sec.css'
import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Hero1() {
    const [count, setCount] = useState(0);
    const [projCounting, setProjCounting] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let currentCount = 1650;
                    let projCount = 0;

                    const intervalId = setInterval(() => {
                        if (currentCount <= 1720) {
                            setCount(currentCount);
                            currentCount++;
                        }

                        else {
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
            <div className='container pt-lg-5' ref={containerRef}>
                <div className='row mt-lg-5'>
                    <div className=' hero1_img-div col-lg-8 col-sm-12 col-md-12 mt-5 order-lg-1 order-2' data-aos="fade-right">
                        <div className='d-flex justify-content-evenly align-items-center '>
                            {/* <img src={i1} /> */}
                            <div className='img-div img1'>

                            </div>
                            <div className='img-div img2'>

                            </div>
                            <div className='img-div img3'>

                            </div>


                        </div>
                        <div className='d-flex justify-content-evenly align-items-center mt-4'>
                            {/* <img src={i1} /> */}
                            <div className='img-div img4'>

                            </div>
                            <div className='img-div img5'>

                            </div>
                            <div className='img-div img6'>

                            </div>


                        </div>

                    </div>

                    <div className='col-lg-4 mt-5 mt-lg-0  her0_1 col-sm-12 col-md-12 d-flex justify-content-center align-items-center order-1' data-aos="fade-left">
                    
                        <div className=''>
                            <h1 className='text-white'>
                                Trusted By {count}+ Worlds Leading
                                IT Companies
                            </h1>
                            <p className='text-white'>
                                With a commitment to excellence, we deliver innovative solutions that not only redefine industry standards but also propel businesses towards sustained growth and global recognition.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero1
