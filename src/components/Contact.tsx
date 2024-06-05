'use client'
import React, { useRef, SyntheticEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Titles from '@/common/Titles';
import Aos from 'aos';

const Contact: React.FC = () => {

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: SyntheticEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_3pjdes8', 'template_1cueeyl', form.current, 'EmRfQc9ZKaEUPxjzd')
                .then(() => {
                    toast.success('Information has been sent');
                })
                .catch(() => {
                    console.log('error');
                });

            (form.current as HTMLFormElement).reset();
        }
    };

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <section id='contact'>
                <Titles top_title='Get in Touch' bottom_title='Contact Me ' />
                <div data-aos="fade-up" className="container">
                    <div className="row">
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" /></svg>
                                <div>
                                    <a href="tel:+420775355224">
                                    <span className='title'>
                                        Mobile
                                    </span>
                                    <div>
                                        +420 775 355 224
                                    </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                <div>
                                    <a href="mailto:elchinnovruzovv@gmail.com">
                                    <span className='title'>
                                        Mail
                                    </span>
                                    <div>
                                        elchinnovruzovv@gmail.com
                                    </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                                <div>
                                    <span className='title'>
                                        Location
                                    </span>
                                    <span>
                                        Czech Republic, Prague
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <form ref={form} onSubmit={sendEmail}>
                            <input required type="text" name='user_name' placeholder='Your Full Name' />
                            <input required type="email" name='user_email' placeholder='Your Email' />
                            <textarea required name="message" placeholder='Your Message' cols={30} rows={8}></textarea>
                            <button disabled type='submit' className='global-btn'> Send <i className="fa-regular fa-paper-plane"></i> </button>
                        </form>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>

    );
}

export default Contact;
