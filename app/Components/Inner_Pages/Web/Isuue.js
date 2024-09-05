import React, { useEffect } from 'react'
import Navbar from '../../HomePage/Navbar'
import logo from './Satart.png'
import './Web.css'
import Footer from '../../HomePage/Footer/Footer'
import { useSelector } from 'react-redux'
function Isuue() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }, [])

    const selector = useSelector(state => state.cartItems.cartItems);
    return (
        <>

            <section className='About_1_sec'>
                <Navbar items={selector.length}/>
                <div className='container  App_dev'>
                    <div className='row'>
                        <div className='col-12 about_1  d-flex justify-content-center align-items-center flex-column '>
                            <h1 className='w-75 text-white text-center'>Quality Assurance and Testing</h1>
                            <p className='w-50 text-white text-center fw-lighter'>
                                Welcome to Astero Solutions, your partner in delivering software solutions of uncompromising quality. As a dedicated quality assurance and testing service provider, we specialize in meticulously testing and validating software applications to guarantee reliability, security, and optimal performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='hero2-sec'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-lg-12 col-12 d-flex justify-content-center align-items-center flex-column mt-lg-5 App_1'>
                            <h1 className='text-white w-75 text-center'>How Astero Solutions Adds Value</h1>
                            <p className='text-white fw-lighter w-50 text-center'>
                            Our commitment to excellence is underpinned by a rigorous quality assurance process that prioritizes thorough testing, security, and adherence to specified requirements.
                            </p>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>Test Planning and Strategy</h2>
                                    <p className='text-white fw-lighter '>
                                        We create a tailored test plan and strategy, outlining the scope, objectives, and methodologies to ensure thorough testing coverage.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>Functional Testing</h2>
                                    <p className='text-white fw-lighter '>
                                        Rigorous functional testing is conducted to validate that each aspect of your software functions as intended, ensuring seamless user experiences.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>Performance Testing</h2>
                                    <p className='text-white fw-lighter '>
                                        Through performance testing, we assess the responsiveness and scalability of your software, ensuring optimal performance under various conditions.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>Security Testing</h2>
                                    <p className='text-white fw-lighter '>
                                        Our security testing protocols identify vulnerabilities and fortify your software against potential threats, safeguarding sensitive data.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>Compatibility Testing</h2>
                                    <p className='text-white fw-lighter '>
                                        Ensuring your software functions across various devices and platforms, compatibility testing guarantees a consistent user experience
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>Usability Testing</h2>
                                    <p className='text-white fw-lighter '>
                                        We conduct usability testing to assess the user-friendliness of your software, refining the interface for enhanced user satisfaction
                                    </p>
                                </div>

                            </div>
                        </div>




                    </div>
                </div >
                <div className='container mt-5'>
                    <div className='row ' >
                        <div className='col-lg-12 mt-5 col-sm-12 d-flex justify-content-center align-items-center'>
                            <h1 className='text-white'>Quality Assurance and Testing Services We Offer:</h1>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>01</h1>
                                <p className='text-white fw-lighter ms-2 '>Functional Testing</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>02</h1>
                                <p className='text-white fw-lighter ms-2 '>Performance Testing</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>03</h1>
                                <p className='text-white fw-lighter ms-2 '>Compatibility Testing</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>04</h1>
                                <p className='text-white fw-lighter ms-2 '>Regression Testing</p>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </section>

        </>
    )
}

export default Isuue
