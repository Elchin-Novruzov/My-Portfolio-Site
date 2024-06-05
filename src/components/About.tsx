'use client'

import Titles from '@/common/Titles'
import Image from 'next/image'
import Aos from 'aos';
import CountUp from 'react-countup';
import { useEffect } from 'react';

const About: React.FC = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section id='about'>
            <Titles top_title='Get To Know' bottom_title='About Me' />
            <div data-aos="fade-up" className="row">
                <div className="left">
                    <Image src='/About.webp' width={480} height={360} alt='About Me' />
                </div>
                <div className="right">
                    <p>
                        Dynamic Web Developer with a strong foundation in problem-solving, algorithms,
                        and data structures. An Informatics, Programming, and Mathematics Olympian with a proven track record in bodybuilding,
                        holding international and national titles. Committed to teamwork, success,
                        and continuous personal and professional development. I have also ventured into entrepreneurship,
                        attempting to create startups on several occasions, though not always successfully.
                        These experiences have contributed to my dedication to innovation and growth.
                    </p>
                    <ul>
                        <li>
                            <CountUp start={0} end={150} delay={0}>
                                {({ countUpRef }) => (
                                    <>
                                        <span className='count' ref={countUpRef} /> {`${'+'}`} <br />
                                        <span> Project </span>
                                    </>
                                )}
                            </CountUp>
                        </li>
                        <li>
                            <CountUp start={0} end={3} delay={0}>
                                {({ countUpRef }) => (
                                    <>
                                        <span className='count' ref={countUpRef} /> {`${''}`} <br />
                                        <span> Experience </span>
                                    </>
                                )}
                            </CountUp>
                        </li>
                        <li>
                            <CountUp start={0} end={10} delay={0}>
                                {({ countUpRef }) => (
                                    <>
                                        <span className='count' ref={countUpRef} /> {`${'+'}`} <br />
                                        <span> Awards </span>
                                    </>
                                )}
                            </CountUp>
                        </li>
                    </ul>
                    {/* <button className='global-btn'>
                        <a download href="/cv/AzarAhmadov(cv,en).pdf"> My Cv</a> <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
                    </button> */}
                    <button className='global-btn'>
                        <a  href="mailto:elchinnovruzovv@gmail.com"> Send a Mail</a>  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>

                    </button>
                </div>
            </div>
        </section >
    )
}

export default About
