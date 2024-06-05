'use client'
import React, { useRef, useEffect } from 'react';

const UpBtn: React.FC = () => {

    const mybutton = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                if (mybutton.current) {
                    mybutton.current.classList.add('active');
                }
            } else {
                if (mybutton.current) {
                    mybutton.current.classList.remove('active');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <button onClick={getTop} ref={mybutton} id="myBtn">
            <i style={{ fontSize: "23px" }} className="fa-solid fa-arrow-up"></i>
        </button>
    );
}

export default UpBtn