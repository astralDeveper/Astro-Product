// import React from 'react'
import React, { useEffect, useRef, useState } from 'react';
import '../Homepage.css'

function Hero_3() {
    const [count, setCount] = useState(0);
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
                    let currentCount = 0;

                    const intervalId = setInterval(() => {
                        if (currentCount < 100) {
                            setCount(currentCount);
                            currentCount++;
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

    return (
        <>
            <div className='container  her0_3' ref={containerRef} >
                <div className='row '>

                    <div className='col-lg-8 col-sm-12 w-100 her0_3_res'>
                        <div className='hero_3_div ms-4'>
                            {/* <h5 className='fs-6 '>Services</h5> */}
                        </div>
                        <div className=''>
                            <h1 className='text-white'>Services We Offer</h1>
                            <p className='text-white w-50 fw-lighter '>Transform your digital vision into reality with our expert software development services, crafting innovative solutions to propel your business into the future.
                            </p>
                            {/* <h1>{count}</h1> */}
                        </div>
                    </div>
                    {/* <div className='col-lg-4 col-sm-12 col-md-12 mt-5 w-100 her0_3_btn-res  '>
                        <div className='d-flex justify-content-end'>
                            <button className='vew_btn'>View All</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Hero_3
