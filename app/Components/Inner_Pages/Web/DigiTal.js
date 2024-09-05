import React, { useEffect } from 'react'
import logo from './Satart.png'
import Footer from '../../HomePage/Footer/Footer'
import './Web.css'
import Navbar from '../../HomePage/Navbar'
import { useSelector } from 'react-redux'

function DigiTal() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }, [])


    const selector = useSelector(state => state.cartItems.cartItems);
    return (
        <>
            <section className='About_1_sec '>
                <Navbar items={selector.length}/>
                <div className='container App_dev'>
                    <div className='row'>
                        <div className='col-12 about_1  d-flex justify-content-center align-items-center flex-column'>
                            <h1 className='w-75 text-white text-center'>Digital Marketing</h1>
                            <p className='w-50 text-white text-center fw-lighter'>
                                Welcome to Astero Solutions, your gateway to innovative and results-driven digital marketing strategies. As a leading digital marketing agency, we specialize in crafting comprehensive campaigns that propel your brand forward, drive engagement, and generate measurable results across various online platforms.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='hero2-sec '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-12 d-flex justify-content-center align-items-center flex-column mt-lg-5 App_1'>
                            <h1 className='text-white w-75 text-center'>How Astero Solutions Adds Value:</h1>
                            <p className='text-white fw-lighter w-50 text-center '>
                                Our commitment to excellence is driven by a strategic approach to digital marketing, leveraging cutting-edge techniques and technologies to maximize your online presence.
                            </p>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>Social Media Marketing</h2>
                                    <p className='text-white fw-lighter '>
                                        Leveraging the power of social media, we create compelling campaigns that foster engagement, build brand loyalty, and drive conversions across popular platforms.
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
                                    <h2 className='text-white fs-1'>Content Marketing</h2>
                                    <p className='text-white fw-lighter '>
                                        Our content marketing strategies focus on creating valuable, shareable content that establishes your brand as an industry authority and resonates with your target audience.
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
                                    <h2 className='text-white fs-1'>Speed to Market</h2>
                                    <p className='text-white fw-lighter '>
                                        Through agile iterations, we swiftly develop functional increments, enabling you to launch your mobile app faster and gather valuable user insights.
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
                                    <h2 className='text-white fs-1'>Pay-Per-Click (PPC) Advertising</h2>
                                    <p className='text-white fw-lighter '>
                                        We design targeted PPC campaigns that reach your audience with precision, maximizing your return on investment and driving qualified traffic to your website.
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
                                    <h2 className='text-white fs-1'>Analytics and Performance Tracking</h2>
                                    <p className='text-white fw-lighter '>
                                        Our emphasis on data-driven marketing includes continuous analytics and performance tracking, providing insights to optimize campaigns for maximum effectiveness.
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
                                    <h2 className='text-white fs-1'>Email Marketing Campaigns</h2>
                                    <p className='text-white fw-lighter '>
                                        Engage your audience through personalized and effective email campaigns, nurturing leads, promoting products, and fostering customer loyalty.
                                    </p>
                                </div>

                            </div>
                        </div>




                    </div>
                </div >
                <div className='container mt-lg-5'>
                    <div className='row ' >
                        <div className='col-lg-12 mt-5 col-sm-12 d-flex justify-content-lg-center align-items-center'>
                            <h1 className='text-white'>DigiTaltal Marketing Services We Offer::</h1>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-lg-center justify-content-lg-center align-items-center '>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>01</h1>
                                <p className='text-white fw-lighter ms-2 '>Social Media Marketing</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-lg-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>02</h1>
                                <p className='text-white fw-lighter ms-2 '>Search Engine Optimization</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-lg-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>03</h1>
                                <p className='text-white fw-lighter ms-2 '>Email Marketing Campaigns</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web  mt-lg-3 d-flex justify-content-lg-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end  w-fit'>
                                <h1 className=''>04</h1>
                                <p className='text-white fw-lighter ms-2 '>Content Marketing</p>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </section>

        </>
    )
}

export default DigiTal
