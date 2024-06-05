'use client'

import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { headerData } from '../data/data'

const header: React.FC = () => {

    const [active, setActive] = useState<string>('#home');

    const [darkMode, setDarkMode] = useState<boolean>(() => {
        try {
            const savedDarkMode = localStorage.getItem('darkMode');
            return savedDarkMode === 'true';
        } catch (error) {
            console.error('LocalStorage Error:', error);
            return false;
        }
    });

    const headerRef = useRef<HTMLDivElement>(null);

    const [scrollPercentage, setScrollPercentage] = useState<number>(0);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const headerHeight = headerRef.current?.offsetHeight || 0;
        const scrollPosition = scrollY + headerHeight;

        headerData.forEach((el) => {
            const section = document.querySelector(el.link);

            if (section) {
                const sectionTop = section.getBoundingClientRect().top + scrollY;
                const sectionBottom = sectionTop + section.clientHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    setActive(el.link);
                }
            }
        });

        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const newScrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
        setScrollPercentage(newScrollPercentage);
    };

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode.toString());
        if (darkMode) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    }, [darkMode]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                style={{
                    width: `${scrollPercentage}%`,
                    height: '3px',
                    backgroundColor: '#6c55e0',
                    transition: 'width 0.2s ease',
                    position: "fixed",
                    zIndex: 2000,
                    top: 0,
                    left: 0,
                }}
            />

            <header ref={headerRef} className='header'>
                <div className="container">
                    <div className="row">
                        <div className="h-left">
                            <Link className='logo' href='/'> <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
                                Elchin Novruzov </Link>
                        </div>
                        <div className="h-right">
                            <nav className='nav'>
                                <ul className='list'>
                                    {headerData.map((el, idx) => (
                                        <li onClick={() => setActive(el.link)} className='list-item' key={idx}>
                                            <Link
                                                key={idx}
                                                className={active === el.link ? "active" : ""}
                                                href={el.link}
                                            >
                                                {el.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <svg
                                    className='dark_light'
                                    onClick={toggleDarkMode}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z"
                                    />
                                </svg>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <section id='mobile-menu'>
                <ul>
                    {headerData.map((el, idx) => (
                        <li onClick={() => setActive(el.link)} className='list-item' key={idx}>
                            <Link
                                key={idx}
                                className={active === el.link ? "active" : ""}
                                href={el.link}
                            >
                                {el.icon}
                            </Link>
                        </li>
                    ))}
                </ul>

            </section>
        </>
    )
}

export default header