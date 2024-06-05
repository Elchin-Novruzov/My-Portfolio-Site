import { PortfolioItem } from '@/data/data';
import React, { useEffect, memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Aos from 'aos';

type PortfolioCardProps = {
    el: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ el }) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section data-aos="zoom-out" id='portfolio-card'>
            <LazyLoadImage
                alt={el.name}
                effect="blur"
                src={el.img}
                key={el.img}
            />
            <div className="portfolio-desc">
                <span className="portfolio-name">
                    {el.name}
                </span>
                <div className="links">
                    {
                        el.githubTxt && <a target="_blank" href={el.github}>
                            {el.githubTxt}
                        </a>
                    }
                    {el.demoTxt && <a target="_blank" href={el.demo}>
                        {el.demoTxt} <i className="fa-solid fa-chevron-right"></i>
                    </a>}
                </div>
            </div>
        </section>
    );
}

export default memo(PortfolioCard);
