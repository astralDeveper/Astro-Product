import React, { useEffect } from 'react'
import Navbar from '../../HomePage/Navbar'
import logo from './Satart.png'
import './Web.css'
import Footer from '../../HomePage/Footer/Footer'
import { useSelector } from 'react-redux'
function App_dev() {
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
                            <h1 className='w-75 text-white text-center'>App Development</h1>
                            <p className='w-50 text-white text-center fw-lighter'>
                                Welcome to Astero Solutions, your trusted ally in the realm of mobile app development. As a pioneering digital solutions provider, we specialize in creating dynamic mobile applications that elevate user experiences, seamlessly integrate cutting-edge features, and drive business success.

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
                                Our commitment to excellence is powered by a robust agile process that ensures efficiency, flexibility, and swift results throughout the mobile app development journey.
                            </p>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>Detailed Project Strategy</h2>
                                    <p className='text-white fw-lighter '>
                                        We meticulously define your vision and objectives, crafting a comprehensive strategy that guides the entire mobile app development journey.
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
                                    <h2 className='text-white fs-1'>Technology Stack Selection</h2>
                                    <p className='text-white fw-lighter '>
                                        Leveraging our expertise, we meticulously select the optimal technological stack to create high-performing, future-ready mobile solution.
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
                                    <h2 className='text-white fs-1'>Cost-Efficient Management</h2>
                                    <p className='text-white fw-lighter '>
                                    Dedicated to maximizing cost-efficiency without compromising quality, we ensure exceptional value in our mobile app development services.
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
                                    <h2 className='text-white fs-1'>Quality Assurance</h2>
                                    <p className='text-white fw-lighter '>
                                        Rigorous testing and quality assurance are our cornerstones, ensuring your web application operates flawlessly, securely, and reliably.
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
                                    <h2 className='text-white fs-1'>Innovative Features</h2>
                                    <p className='text-white fw-lighter '>
                                    Infusing cutting-edge features, we set your mobile application apart in the competitive digital landscape, ensuring it stands out with breakthrough solutions.
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




                    </div>
                </div >
                <div className='container mt-lg-5'>
                    <div className='row ' >
                        <div className='col-lg-12 mt-5 col-sm-12 d-flex justify-content-lg-center align-items-center'>
                            <h1 className='text-white'>Mobile Applications We Excel In:</h1>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-lg-center justify-content-lg-center align-items-center '>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>01</h1>
                                <p className='text-white fw-lighter ms-2 '>Hybrid  Apps</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-lg-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>02</h1>
                                <p className='text-white fw-lighter ms-2 '>Native  Apps</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-lg-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>03</h1>
                                <p className='text-white fw-lighter ms-2 '>Enterprise  Apps</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web  mt-lg-3 d-flex justify-content-lg-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end  w-fit'>
                                <h1 className=''>04</h1>
                                <p className='text-white fw-lighter ms-2 '>E-commerce  Apps</p>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </section>

        </>
    )
}

export default App_dev
