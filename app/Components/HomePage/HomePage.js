import React from 'react'
import Navbar from './Navbar'
import './Homepage.css'
import HeroSec from './HeroSec'
import Hero1 from '../Hero2Sec/Hero1'
import Hero_3 from './Hero_03/Hero_3'
import Hero_4 from './Hero_04/Hero_4'
import Her0_5 from './Hero_5/Her0_5'
import Hero_6 from './Hero_06/Hero_6'
import Hero_7 from './Hero_07/Hero_7'
import Hero_8 from './Hero_8/Hero_8'
import Hero_9 from './Hero_9/Hero_9'
import About_1 from '../ABOUT_US_PAGE/About_1'
import Footer from './Footer/Footer'
import { useSelector } from 'react-redux'
function HomePage() {
    const selector = useSelector(state => state.cartItems.cartItems);
    return (
        <>
            <section className='HomePage_bg'>

                <Navbar items={selector.length}/>
                <HeroSec />
            </section>
            <section className='hero2-sec'>
                <Hero1 />
                <Hero_3 />
                <Hero_4 />
                <Her0_5 />
                <Hero_6 />
                <Hero_7 />
                {/* <Hero_8 /> */}
                {/* <Hero_9 /> */}
                <Footer />
            </section>
        </>
    )
}

export default HomePage
