import React from 'react'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer/Footer'
import './contact.css'
import Hero_6 from '../HomePage/Hero_06/Hero_6'
import { useSelector } from 'react-redux'
function Contact_1() {
    const selector = useSelector(state => state.cartItems.cartItems);
    return (
        <>
            <section className='hero2-sec'>

                <section className='About_1_sec cont_sec '>
                    <Navbar items={selector.length}/>
                    <div className='container'>
                        <div className='row py-5'>
                            <div className='col-12 about_1  d-flex justify-content-center align-items-center flex-column'>
                                <h1 className=' text-white text-center'>
                                    Get in Touch With Us</h1>
                                <p className=' text-white text-center fw-lighter'>
                                    Committed to delivering cutting-edge solutions, seamlessly blending creativity and technology to empower businesses worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Hero_6 />

                <section />
                <Footer />
            </section>
        </>
    )
}

export default Contact_1
