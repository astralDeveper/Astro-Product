import React, { useEffect, useState } from 'react'
import img1 from './hero_img.png'

function HeroSec() {
    // const [loader, setLoader] = useState(true)
    // useEffect(() => {
    //     const time = setTimeout(() => {
    //         setLoader(false)
    //     }, 7000);


    // }, [])


    return (
        <>


            <div className='container'>
                <div className='row flex justify-ceontent-center align-items-center'>
                    <div className=' col-lg-6 col-sm-12 col-md-12 her0_L d-flex justify-ceontent-center align-items-center'>
                        <div className='position-relative '>
                            <h1 className='fw-bolder text-white  '>Providing the Best Services and IT
                                <span className='red-sol ms-3  '>
                                    Solutions
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 345 48" fill="none">
                                        <path d="M1.28809 46C47.2547 19.4232 196.567 -28.351 343.66 29.0292" stroke="#D01921" stroke-width="3" />
                                    </svg>
                                </span>
                            </h1>
                            <div className='col-lg-6 col-sm-12 col-md-12 hero_P_SEC hero_p_small  mt-lg-5 pt-lg-3 w-100'>
                                <div >
                                    <p className='text-white  fw-lighter fs-5 w-100 '>
                                        Committed to delivering cutting-edge solutions, seamlessly blending creativity and technology to empower businesses worldwide.
                                    </p>
                                    {/* <div className='buttns d-flex justify-content-start align-items-center'>
                                        <button className='start_btn'>Get jani</button>
                                        <button className='c_btn rotate-icon ms-3 d-flex justify-content-center align-items-center'><i className="fa-solid fa-angle-up"></i></button>

                                    </div> */}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 d-flex justify-content-end align-items-center  set-hero-image-div    sm-order-first '>
                        <div>
                            <img src={img1.src} className='set-hero-image ' />
                        </div>

                    </div>

                    {/* ------------HERO P SEC------ */}

                </div>
            </div>

        </>

    )
}

export default HeroSec