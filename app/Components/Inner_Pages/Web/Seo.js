import React, { useEffect } from 'react'
import logo from './Satart.png'
import Navbar from '../../HomePage/Navbar'
import { useSelector } from 'react-redux'

function Seo() {
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
                            <h1 className='w-75 text-white text-center'>Search Engine Optimization</h1>
                            <p className='w-50 text-white text-center fw-lighter'>
                                Welcome to Astero Solutions, your trusted partner for elevating your online presence through effective Search Engine Optimization (SEO) strategies. As a leading SEO service provider, we specialize in optimizing your website to rank higher on search engines, drive organic traffic, and maximize your digital reach.
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
                                Our commitment to excellence is driven by a strategic and data-driven approach to SEO, ensuring long-term visibility and sustainable growth.
                            </p>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>Keyword Research and Analysis</h2>
                                    <p className='text-white fw-lighter '>
                                        We conduct in-depth keyword research to identify the terms and phrases relevant to your business, ensuring your content aligns with what your audience is searching for.
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
                                    <h2 className='text-white fs-1'>On-Page SEO Optimization</h2>
                                    <p className='text-white fw-lighter '>
                                        Our experts optimize your website's on-page elements, including meta tags, headers, and content, to enhance its relevance and visibility to search engines.
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
                                    <h2 className='text-white fs-1'>Content Strategy and Creation</h2>
                                    <p className='text-white fw-lighter '>
                                    Engage your audience through personalized and effective email campaigns, nurturing leads, promoting products, and fosteria We develop a targeted content strategy, creating high-quality, relevant content.
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
                                    <h2 className='text-white fs-1'>Technical SEO Audits</h2>
                                    <p className='text-white fw-lighter '>
                                        A thorough technical SEO audit ensures that your website's infrastructure is optimized for search engines, addressing issues that may impact its performance.
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
                                    <h2 className='text-white fs-1'>Regular Monitoring and Reporting</h2>
                                    <p className='text-white fw-lighter '>
                                        Continuous monitoring of SEO performance metrics, coupled with detailed reporting, ensures transparency and allows for ongoing optimization based on results.
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
                                    <h2 className='text-white fs-1'>Local SEO Optimization</h2>
                                    <p className='text-white fw-lighter '>
                                        For businesses targeting local markets, we optimize your online presence for local search, ensuring your business appears in local map listings and directories.
                                    </p>
                                </div>

                            </div>
                        </div>




                    </div>
                </div >
                <div className='container mt-lg-5'>
                    <div className='row ' >
                        <div className='col-lg-12 mt-5 col-sm-12 d-flex justify-content-lg-center align-items-center'>
                            <h1 className='text-white'>Search Engine Optimization Services We Offer:</h1>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-lg-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>01</h1>
                                <p className='text-white fw-lighter ms-2 '></p>Technical SEO Audits
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-lg-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>02</h1>
                                <p className='text-white fw-lighter ms-2 '>Content Strategy and Creation</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-lg-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>03</h1>
                                <p className='text-white fw-lighter ms-2 '>Data-Driven Approach</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web  mt-lg-3 d-flex justify-content-lg-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end  w-fit'>
                                <h1 className=''>04</h1>
                                <p className='text-white fw-lighter ms-2 '>Personalized SEO Strategies</p>
                            </div>
                        </div>

                    </div>
                </div>
                <footer />
            </section>
        </>
    )
}

export default Seo
