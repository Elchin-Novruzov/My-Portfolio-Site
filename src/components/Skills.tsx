'use client'
import React, { useEffect } from 'react'
import { skillsData } from '../data/data'
import Titles from '@/common/Titles'
import Aos from 'aos';

const Skills: React.FC = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section id='skills'>
            <Titles top_title='What Skills I Have' bottom_title='Skills' />
            <ul data-aos="fade-up">
                {
                    skillsData.map((el, idx) => (
                        <li data-aos="zoom-in-up" key={idx}>
                            <img data-aos="zoom-in" src={el.tech_img} alt={el.name} loading='lazy' />
                            <span data-aos="zoom-out-up">{el.name}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Skills