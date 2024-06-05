'use client'

import React, { memo } from 'react'
import { AboutProps } from '../data/data';
import { useEffect } from 'react';
import Aos from 'aos';

const Titles: React.FC<AboutProps> = ({ top_title, bottom_title }) => {

    useEffect(() => {
        Aos.init({ duration: 2100 })
    }, [])

    return (
        <div data-aos="zoom-in-up" className="top-titles">
            <h4>{top_title} </h4>
            <h3>{bottom_title}</h3>
        </div>
    )
}

export default memo(Titles)