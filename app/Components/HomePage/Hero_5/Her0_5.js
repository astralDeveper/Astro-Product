import { useEffect, useRef, useState } from 'react'
import bg1 from './Rectangle 12.png'
import bg2 from './Rectangle 13.png'
function Her0_5() {
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
                    let currentCount = 0;
                    let projCount = 0;

                    const intervalId = setInterval(() => {
                        if (currentCount <= 15) {
                            setCount(currentCount);
                            currentCount++;
                        }
                        if (projCount < 123) {
                            projCount++;
                            setProjCounting(projCount)

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
    return (
        <>
            <section className='Her0_5_section' ref={containerRef}>

                <div className='container hero_5-main'>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12 col-md-12 bg d-flex justify-content-center align-items-start flex-column order-lg-1 order-'>
                            <div>
                                <div className='h5_div' >
                                    {/* <h5>Welcome to Aestro Solutions</h5> */}
                                </div>
                                <h1 className='text-white'>Let Us Be Your
                                    IT Partner</h1>
                                <p className='text-white fw-lighter'>
                                    Let us be your partners in innovation and success, as we collaborate to turn your vision into reality. Together, we'll navigate the digital landscape, ensuring your business reaches new heights. Transform your vision into digital success and elevate your business to new heights together.
                                </p>
                            </div>
                            <div className='rating d-flex justify-content-evenly align-items-center   order-1 w-75'>
                                <div>
                                    <h1>{count}+</h1>
                                    <p className='text-white fw-lighter'>Years Of Experience</p>
                                </div>
                                <div>
                                    <h1>{projCounting}k</h1>
                                    <p className='text-white fw-lighter'>Projects Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center order-3'>
                            <div className=' d-flex justify-content-center align-items-center'>
                                {/* <h1>asd</h1> */}
                                <img src={bg2.src} />
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default Her0_5
