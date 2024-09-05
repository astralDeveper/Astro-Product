import React, { useEffect } from 'react'
import Navbar from '../../HomePage/Navbar'
import logo from './Satart.png'
import './Web.css'
import Footer from '../../HomePage/Footer/Footer'
import { useSelector } from 'react-redux'
function Ecome() {
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
                            <h1 className='w-75 text-white text-center'>E commerce Development</h1>
                            <p className='w-50 text-white text-center fw-lighter'>
                            Welcome to Astero Solutions, your trusted partner in driving e-commerce success. As a premier provider of comprehensive e-commerce solutions, we specialize in creating tailored platforms that not only showcase your products but also elevate the overall shopping experience for your customers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='hero2-sec '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-12 d-flex justify-content-center align-items-center flex-column mt-lg-5 App_1'>
                            <h1 className='text-white w-75 text-center'>How Astero Solutions Adds Value</h1>
                            <p className='text-white fw-lighter w-50 text-center '>
                            Our commitment to excellence is driven by a strategic approach to e-commerce development, emphasizing user experience, security, and innovative features.
                            </p>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>User-Centric Design</h2>
                                    <p className='text-white fw-lighter '>
                                        We prioritize user-centric design, creating intuitive interfaces that enhance the online shopping experience and drive customer satisfaction.
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
                                    <h2 className='text-white fs-1'>Scalable E-commerce Architecture</h2>
                                    <p className='text-white fw-lighter '>
                                        Our scalable e-commerce architecture ensures that your platform grows seamlessly with your business, accommodating increased traffic and transactions.
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
                                    <h2 className='text-white fs-1'>Secure Payment Gateways</h2>
                                    <p className='text-white fw-lighter '>
                                        We integrate secure payment gateways, providing customers with a safe and efficient transaction process while safeguarding sensitive financial information.
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
                                    <h2 className='text-white fs-1'>Mobile-Responsive Solutions</h2>
                                    <p className='text-white fw-lighter '>
                                        Our e-commerce solutions are designed to be responsive across various devices, ensuring a consistent and user-friendly experience for mobile and desktop users.
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
                                    <h2 className='text-white fs-1'>Personalized Shopping Experiences</h2>
                                    <p className='text-white fw-lighter '>
                                        We incorporate personalized features, such as recommendation engines and targeted promotions, to enhance customer engagement and increase sales.
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
                                    <h2 className='text-white fs-1'>Multi-Channel Integration</h2>
                                    <p className='text-white fw-lighter '>
                                        Our e-commerce solutions seamlessly integrate with multiple channels, allowing you to expand your reach and manage orders from various platforms in one centralized system.
                                    </p>
                                </div>

                            </div>
                        </div>




                    </div>
                </div >
                <div className='container mt-lg-5'>
                    <div className='row ' >
                        <div className='col-lg-12 mt-5 col-sm-12 d-flex justify-content-lg-center align-items-center'>
                            <h1 className='text-white'>E-commerce Solutions We Offer:</h1>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-lg-center justify-content-lg-center align-items-center '>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>01</h1>
                                <p className='text-white fw-lighter ms-2 '>Multi-Channel Integration</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-lg-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>02</h1>
                                <p className='text-white fw-lighter ms-2 '>Order Management Systems</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-lg-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>03</h1>
                                <p className='text-white fw-lighter ms-2 '>Payment Gateway Integral</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web  mt-lg-3 d-flex justify-content-lg-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end  w-fit'>
                                <h1 className=''>04</h1>
                                <p className='text-white fw-lighter ms-2 '>Mobile Commerce Solutions</p>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Ecome
