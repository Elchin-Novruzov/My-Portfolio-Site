'use client'
import React, { useState, useEffect, useMemo } from 'react';
import Titles from '@/common/Titles';
import PortfolioCard from './PortfolioCard';
import { portfolio } from '../data/data';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import Aos from 'aos';

const Portfolio: React.FC = () => {
    
    const [active, setActive] = useState<number>(0);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [visiblePortfolio, setVisiblePortfolio] = useState(9);

    const filteredPortfolio = useMemo(() => {
        if (selectedCategory === 'All') {
            return portfolio;
        } else {
            return portfolio.filter(value => value.category === selectedCategory);
        }
    }, [selectedCategory]);

    const loadMore = () => {
        setVisiblePortfolio(prevVisiblePortfolio => prevVisiblePortfolio + 6);
    };

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <section id="portfolio">
            <div className="container">
                <Titles top_title="Most Recent Work" bottom_title="Portfolio" />

                <ul data-aos="zoom-in" className='tabs-menu'>
                    <li>
                        <button onClick={() => { setActive(0); setSelectedCategory("All") }} className={active === 0 ? 'active' : ''}>All</button>
                    </li>
                    <li>
                        <button onClick={() => { setActive(1); setSelectedCategory("web") }} className={active === 1 ? 'active' : ''}>Web</button>
                    </li>
                    <li>
                        <button onClick={() => { setActive(2); setSelectedCategory("data") }} className={active === 2 ? 'active' : ''}>Data Science & Analisis</button>
                    </li>
                    <li>
                        <button onClick={() => { setActive(3); setSelectedCategory("python") }} className={active === 3 ? 'active' : ''}>Python</button>
                    </li>
                </ul>

                <div className="row">
                    {filteredPortfolio.slice(0, visiblePortfolio).map((el, idx) => (
                        <PortfolioCard el={el} key={idx} />
                    ))}
                </div>

                {visiblePortfolio < filteredPortfolio.length && (
                    <div className='button-load' onClick={loadMore}>
                        <AwesomeButton type="primary">
                            Load More
                        </AwesomeButton>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
