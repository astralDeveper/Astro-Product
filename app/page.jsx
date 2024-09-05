'use client'
import React from 'react'
import '@/app/Components/HomePage/Homepage.css'
import Navbar from '@/app/Components/HomePage/Navbar'
import HeroSec from '@/app/Components/HomePage/HeroSec'
import Hero1 from '@/app/Components/Hero2Sec/Hero1'
import Hero_3 from '@/app/Components/HomePage/Hero_03/Hero_3'
import Hero_4 from '@/app/Components/HomePage/Hero_04/Hero_4'
import Her0_5 from '@/app/Components/HomePage/Hero_5/Her0_5'
import Hero_6 from '@/app/Components/HomePage/Hero_06/Hero_6'
import Hero_7 from '@/app/Components/HomePage/Hero_07/Hero_7'
import Footer from '@/app/Components/HomePage/Footer/Footer'
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
                {/* <Hero_6 /> */}
                <Hero_7 />
                <Footer />
            </section>
        </>
    )
}

export default HomePage
