import React, { useEffect } from 'react'
import Navbar from '../../HomePage/Navbar'
import logo from './Satart.png'
import './Web.css'
import Footer from '../../HomePage/Footer/Footer'
import { useSelector } from 'react-redux'
function UiDes() {
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
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 about_1  d-flex justify-content-center align-items-center flex-column'>
                            <h1 className='w-75 text-white text-center'>UI/UX Designing</h1>
                            <p className='w-50 text-white text-center fw-lighter'>
                                Welcome to Astero Solutions, where we redefine digital interactions through captivating and user-centric UI/UX design services. As a forward-thinking design agency, we specialize in crafting visually stunning and intuitively navigable interfaces that resonate with your audience and enhance your brand identity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='hero2-sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-12 d-flex justify-content-center align-items-center flex-column mt-lg-5'>
                            <h1 className='text-white w-75 text-center'>How Astero Solutions Adds Value</h1>
                            <p className='text-white fw-lighter w-50 text-center'>
                                Our commitment to excellence is powered by a robust Agile process that ensures efficiency, flexibility, and swift results throughout the mobile app development journey.
                            </p>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>Comprehensive User Research</h2>
                                    <p className='text-white fw-lighter '>
                                        We dive deep into understanding your target audience, conducting extensive research to shape UI/UX designs that resonate with user preferences and behaviors.
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
                                    <h2 className='text-white fs-1'>Responsive and Accessible Design</h2>
                                    <p className='text-white fw-lighter '>
                                        Crafting designs that seamlessly adapt to various devices and ensuring accessibility, we prioritize inclusivity for a broad user base.
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
                                    <h2 className='text-white fs-1'>Wireframing and Prototyping</h2>
                                    <p className='text-white fw-lighter '>
                                        Our expert designers create wireframes and interactive prototypes, providing a tangible preview of your digital interface and allowing for iterative feedback.
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
                                    <h2 className='text-white fs-1'>Iterative Design Process</h2>
                                    <p className='text-white fw-lighter '>
                                        Our agile design process involves continuous refinement and iteration, allowing for flexibility and quick adaptability to changing requirements.
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
                                    <h2 className='text-white fs-1'>Visual Design and Branding</h2>
                                    <p className='text-white fw-lighter '>
                                        We infuse your brand identity into visually appealing designs, ensuring consistency and a strong visual impact across all digital touchpoints.
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
                                        Rigorous usability testing ensures that your UI/UX design not only looks stunning but also provides an intuitive and enjoyable experience for users.
                                    </p>
                                </div>

                            </div>
                        </div>




                    </div>
                </div >
                <div className='container mt-5'>
                    <div className='row ' >
                        <div className='col-lg-12 mt-5 col-sm-12 d-flex justify-content-center align-items-center'>
                            <h1 className='text-white'>UI/UX Designing Services We Offer:</h1>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>01</h1>
                                <p className='text-white fw-lighter ms-2 '>Website Design</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>02</h1>
                                <p className='text-white fw-lighter ms-2 '>Mobile App Design</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>03</h1>
                                <p className='text-white fw-lighter ms-2 '>E-commerce Design</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>04</h1>
                                <p className='text-white fw-lighter ms-2 '>Branding & Logo Design</p>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </section>

        </>
    )
}

export default UiDes
