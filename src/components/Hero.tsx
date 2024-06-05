'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import Aos from 'aos';

const Hero: React.FC = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section id='hero'>
            <div className="row">
                <div data-aos="fade-left" className='left'>
                    <h1>Hi, I'm Elchin Novruzov</h1>
                    <h3>Web Developer</h3>
                    <p>
                        Press F13 if you'd like to discover more about me.
                    </p>
                    <button className='global-btn'> <a target='_blank' href="tel:+420775355224">Contact me</a> <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" /></svg> </button>
                </div>
                <div data-aos="fade-right" className="right">
                    <Image alt='Elchin Novruzov' width={438} height={538} src='/Elchin_Novruzov.png' />
                </div>
            </div>
        </section>
    )
}

export default Hero