import React from 'react'
import logoFooter from './logo.png'
function Footer() {
    return (
        <>
            {/* <div className='container Fotter_sec'>
                <div className='row d-flex justify-content-center align-items-center  h-100'>
                    <div className='col-lg-6 col-sm-12 col-md-12 '>
                        <div className=''>
                            <h1 className='text-white fs-2 p-lg-5  '>
                                Subscribe Our Newsletter To Stay
                            </h1>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 '>
                        <div className=' input_div_footer d-flex justify-content-center align-items-center '>
                            <div className='d-flex justify-content-around w-100 align-items-center '>
                                <input placeholder='Enter Your Email' />
                                <button className='footer_tbn'>Get Satrted</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}

            <div className='container ' style={{ marginTop: "-50px" }}>
                <div className='row d-flex justify-content-center align-items-center  '>
                    {/* <div className='col-lg-6 col-sm-12 col-md-12 '>
                        <nav className="navbar navbar-expand-lg ">
                            <div className="container">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Testimonilas</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Contact</a>
                                        </li>




                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div> */}
                    <div className='col-lg-6 col-sm-12 col-md-12 '>
                        <div className=' input_div_footer d-flex  justify-content-center align-items-center ' style={{ backgroundColor: "transparent" }}>
                            <div className='d-flex justify-content-around  w-25 align-items-center '>
                                <a href='https://www.facebook.com/profile.php?id=61555457739340'> <i className="fa-brands fa-facebook-f" ></i></a>
                                {/* <i className="fa-brands fa-x-twitter"></i> */}
                                <a href='https://www.instagram.com/asterosolutions_/?hl=en'> <i className="fa-brands fa-instagram"></i></a>
                                <a href='https://www.linkedin.com/company/asterosolutions/'> <i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <hr className='line'></hr >

                </div>

            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 col-sm-12 col-md-12 d-flex justify-content-center align-items-end'>
                        <p className='text-white fw-lighter'>@2024 Security Technical Management. All Rights Reserved</p>
                    </div>
                    <div className='col-lg-2 col-sm-12 col-md-12 d-flex justify-content-center align-items-end'>
                        <img src={logoFooter.src} className='w-50' />
                    </div>
                    <div className='col-lg-5 col-sm-12 col-md-12 d-flex justify-content-center align-items-end'>
                        <p className='text-white fw-lighter'>Terms and Conditions | Privacy Policy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
