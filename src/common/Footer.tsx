import React from 'react';
import { headerData } from '../data/data';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-row">
                    <div className="footer-item">
                        <div className="footer-inner-item">
                            <h4 className="footer-title">
                                Elchin Novruzov
                            </h4>
                            <p className="simple-footer">
                                Web Developer
                            </p>
                        </div>
                        <div className="footer-list">
                            <ul className="list-footer">
                                {headerData.map((item, index) => {
                                    return (
                                        <li key={index} className='nav-item'>
                                            <a href={item.link}>{item.title}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="sosial-icon">
                            <a href="https://github.com/Elchin-Novruzov" target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/elchin-novruzov/" target="_blank">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=420775355224" target="_blank">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;