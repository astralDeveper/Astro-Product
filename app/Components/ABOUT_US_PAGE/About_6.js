import React from 'react'

function About_6() {
    return (
        <>
            <div className='container py-5'>
                <div className='row  pt-5'>
                    <div className='col-lg-6 col-sm-12 col-md-12 mt-5 team'>
                        <div className='about '>
                            <h2 data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className='text-danger fs-2'>About Us</h2>
                            <h1
                                data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                className='text-white'>
                                Our Dedicated <br />Team of Expert
                            </h1>
                            <p data-aos="fade-up" className='text-white fw-lighter'
                                data-aos-anchor-placement="top-bottom">
                                Our dedicated team of highly competent professionals, equipped with state-of-the-art tools and equipment,
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 '  >

                        {/* <div className='team-img-div bg-y d-flex justify-content-center align-items-center '>
                            <div className='img-1 bg'>
                                <div className='img-1-text-div'>
                                    <h1 className='bg-prmary text-center'>Ahad Mobin</h1>
                                    <p>CE0</p>
                                    <p>AhadMubin@gmil.com</p>
                                </div>
                            </div>
                            <div className='img-1 bg ms-3' id='img2'>

                                <div className='img-1-text-div'>
                                    <h1 className='bg-prmary text-center'>Areeb Tahseen</h1>
                                    <p>CE0</p>
                                    <p>AhadMubin@gmil.</p>
                                </div>
                            </div>
                            


                        </div> */}

                            <div className='row justify-content-center align-items-center mx-0'>

                                <div className='my-2 col-lg-3 col-md-12 img-2' id='img1'>

                                    <div className='overlay'>
                                        <div className='img-2-text-div'>
                                            <h1 className='bg-prmary text-center'>Bilal Ahmed Raza</h1>
                                            <p>Senior Operation Manager</p>
                                            {/* <p>operations@bacr.com.pk</p> */}
                                        </div>
                                    </div>

                                </div>

                                <div className='my-2  col-lg-3 col-md-12 img-2' id='img2'>

                                    <div className='img-2-text-div' id='txt2'>
                                        <h1 className='bg-prmary text-center'>Osama Ahmed</h1>
                                        <p>Director</p>
                                        {/* <p>operations@bacr.com.pk</p> */}
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About_6
