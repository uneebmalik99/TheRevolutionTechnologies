import React, { useState } from 'react';
import service from './Services.module.css';
import Lottie from "lottie-react";
import webDevelopmentAnimation from "./Animations/webdevelopment.json";
import mobileAppAnimation from "./Animations/mobileapp.json";
import seoAnimation from "./Animations/seo.json";
import uiuxDesignAnimation from "./Animations/uiuxdesign.json";
import socialMediaMarketingAnimation from "./Animations/socialmediamarketing.json";
import customsoftwaredevelopmentAnimation from "./Animations/customsoftwaredevelopment.json";

const Services = () => {
    const [hoverColors, setHoverColors] = useState(Array(6).fill(''));

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color !== '#808080' ? color : getRandomColor(); // Avoid grey color
    };

    const handleHover = (index) => {
        const randomColor = getRandomColor();
        setHoverColors(prevColors => {
            const newColors = [...prevColors];
            newColors[index] = randomColor;
            return newColors;
        });
    };

    const handleMouseLeave = (index) => {
        setHoverColors(prevColors => {
            const newColors = [...prevColors];
            newColors[index] = '';
            return newColors;
        });
    };

    const services = [
        { animation: webDevelopmentAnimation, text: 'Web Development' },
        { animation: mobileAppAnimation, text: 'App Development' },
        { animation: seoAnimation, text: 'SEO' },
        { animation: uiuxDesignAnimation, text: 'UI/UX Graphic Design' },
        { animation: socialMediaMarketingAnimation, text: 'Social Media Marketing' },
        { animation: customsoftwaredevelopmentAnimation, text: 'Custom Software Development' }
    ];

    return (
        <div className={service.contservice}>
            <div className={`container-fluid ${service.serinnercount}`}>
                <div className={`row ${service.firstrow}`}>
                    <h2 className={service.sercount1h2}>Services we Offer</h2>
                </div>
                <div className={`row ${service.outerrow}`}>
                    <div className="col-sm-12 col-md-12 col-lg-6" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 className={service.serh3}>Countries Worldwide</h3>
                        <p className={service.serp1}>To succeed, every software solution must be deeply integrated into the existing tech environment.</p>
                    </div>
                    {services.map((serviceItem, index) => (
                        <div key={index} className="col-sm-12 col-md-12 col-lg-3">
                            <div
                                className={`card ${service.sercard1}`}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                style={{ backgroundColor: hoverColors[index] || 'initial' }}
                            >
                                <div className="image">
                                    <Lottie animationData={serviceItem.animation} loop={true} />
                                </div>
                                <p className={service.sercount1p1}>{serviceItem.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
