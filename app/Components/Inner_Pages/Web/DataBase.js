import React, { useEffect } from 'react'
import Navbar from '../../HomePage/Navbar'
import logo from './Satart.png'
import './Web.css'
import Footer from '../../HomePage/Footer/Footer'
import { useSelector } from 'react-redux'
function Database() {
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
                            <h1 className='w-75 text-white text-center'>Database Design and Management</h1>
                            <p className='w-50 text-white text-center fw-lighter'>
                                Welcome to Astero Solutions, where we specialize in crafting robust database solutions to empower your business with efficient data management. As a leading provider of database design and management services, we focus on creating scalable, secure, and high-performance databases tailored to meet the unique needs of your organization.
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
                                    <h2 className='text-white fs-1'>Scalability and Performance Tuning</h2>
                                    <p className='text-white fw-lighter '>
                                        We prioritize database security, implementing robust measures to safeguard sensitive data and ensure compliance with industry regulations.
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
                                    <h2 className='text-white fs-1'>Database Design and Modeling</h2>
                                    <p className='text-white fw-lighter '>
                                        We employ industry best practices to design and model databases that align with your business requirements, optimizing data organization and retrieval.
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
                                    <h2 className='text-white fs-1'>Data Migration and Integratio</h2>
                                    <p className='text-white fw-lighter '>
                                        Smooth data migration and integration services ensure a seamless transition between databases and systems, minimizing disruptions to your operations.
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
                                    <h2 className='text-white fs-1'>Normalization and Optimization</h2>
                                    <p className='text-white fw-lighter '>
                                        Through normalization and optimization techniques, we ensure that your database structure is streamlined for efficient storage, reducing redundancy and improving performance
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
                                    <h2 className='text-white fs-1'>Scalability and Performance Tuning</h2>
                                    <p className='text-white fw-lighter '>
                                        Our focus on scalability enables your database to grow seamlessly with your business, while performance tuning ensures optimal speed and responsiveness.
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
                                    <h2 className='text-white fs-1'>Backup and Recovery Strategies</h2>
                                    <p className='text-white fw-lighter '>
                                        We implement robust backup and recovery strategies, safeguarding your data against potential loss or damage, and ensuring business continuity.
                                    </p>
                                </div>

                            </div>
                        </div>




                    </div>
                </div >
                <div className='container mt-5'>
                    <div className='row ' >
                        <div className='col-lg-12 mt-5 col-sm-12 d-flex justify-content-center align-items-center'>
                            <h1 className='text-white'>Database Design and Management Services We Offer:</h1>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>01</h1>
                                <p className='text-white fw-lighter ms-2 '>Security Implementation</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>02</h1>
                                <p className='text-white fw-lighter ms-2 '>Backup & Recovery Strategies</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>03</h1>
                                <p className='text-white fw-lighter ms-2 '>Data Modeling & Normalization</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>04</h1>
                                <p className='text-white fw-lighter ms-2 '>Relational Database </p>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </section>

        </>
    )
}

export default Database
