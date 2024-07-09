import React, { useState } from 'react';
import service from './Services.module.css';

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
        { img: 'images/ser55.png', text: 'Web Development' },
        { img: 'images/ser6.png', text: 'App Development' },
        { img: 'images/ser333.png', text: 'SEO' },
        { img: 'images/ser6.png', text: 'UI/UX Graphic Design' },
        { img: 'images/ser33.png', text: 'Social Media Marketing' },
        { img: 'images/ser4.png', text: 'Digital Marketing' }
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
                        <p className={service.serp1}>To ok succeed, every software solution must be deeply integrated into the existing tech environment.</p>
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
                                    <img src={serviceItem.img} alt="service" className={service.serimag} />
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
