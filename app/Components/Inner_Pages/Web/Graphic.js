import React, { useEffect } from 'react'
import Footer from '../../HomePage/Footer/Footer'
import logo from './Satart.png'
import './Web.css'
import Navbar from '../../HomePage/Navbar'
import { useSelector } from 'react-redux'
function Graphic() {
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
                            <h1 className='w-75 text-white text-center'>Graphic Designing</h1>
                            <p className='w-50 text-white text-center fw-lighter'>
                                Welcome to Astero Solutions, where we redefine digital interactions through captivating and user-centric UI/UX design services. As a forward-thinking design agency, we specialize in crafting visually stunning and intuitively navigable interfaces that resonate with your audience and enhance your brand identity.

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
                             Our commitment to excellence is rooted in a creative and strategic approach to graphic design, ensuring that every design element serves a purpose in conveying your brand message.
                            </p>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>Branding and Logo Design</h2>
                                    <p className='text-white fw-lighter '>
                                        We craft unique and memorable logos that serve as the cornerstone of your brand identity, capturing the essence of your business and leaving a lasting impression.
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
                                    <h2 className='text-white fs-1'>Print and Digital Marketing Collateral</h2>
                                    <p className='text-white fw-lighter '>
                                        From brochures and business cards to digital banners and social media graphics, our graphic design services cover a wide range of marketing collateral to enhance your brand presence across various channels.
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
                                    <h2 className='text-white fs-1'>Website and App Design</h2>
                                    <p className='text-white fw-lighter '>
                                        Our design experts create visually appealing and user-friendly interfaces for websites and applications, ensuring a seamless and engaging user experience that aligns with your brand.
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
                                    <h2 className='text-white fs-1'>Packaging Design</h2>
                                    <p className='text-white fw-lighter '>
                                        Elevate your product presentation with captivating packaging designs that not only protect but also enhance the overall visual appeal of your products on the shelves.
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
                                    <h2 className='text-white fs-1'>Illustrations and Infographics</h2>
                                    <p className='text-white fw-lighter '>
                                        We bring concepts to life through custom illustrations and infographics, making complex information easily digestible and visually appealing for your audience.
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
                                    <h2 className='text-white fs-1'>Brand Guidelines and Design Systems</h2>
                                    <p className='text-white fw-lighter '>
                                        Establish consistency and coherence in your brand presentation with meticulously crafted brand guidelines and design systems, ensuring a unified and recognizable brand identity.
                                    </p>
                                </div>

                            </div>
                        </div>




                    </div>
                </div >
                <div className='container mt-5'>
                    <div className='row ' >
                        <div className='col-lg-12 mt-5 col-sm-12 d-flex justify-content-center align-items-center'>
                            <h1 className='text-white'>Graphic Designing Services We Offer:</h1>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>01</h1>
                                <p className='text-white fw-lighter ms-2 '>Branding and Logo Design</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>02</h1>
                                <p className='text-white fw-lighter ms-2 '>Brand Guidelines & Design Systems</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>03</h1>
                                <p className='text-white fw-lighter ms-2 '>Packaging Design</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>04</h1>
                                <p className='text-white fw-lighter ms-2 '>Illustrations and Infographics</p>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Graphic
