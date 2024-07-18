// Fab.js
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPlus } from 'react-icons/fa';
import './Fab.css';

const Fab = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleHover = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className="fab-container" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
            <div className={`fab-icons ${isOpen ? 'open' : ''}`}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="fab-icon">
                    <FaFacebookF />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="fab-icon">
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="fab-icon">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="fab-icon">
                    <FaLinkedinIn />
                </a>
            </div>
            <div className="fab-main">
                <FaPlus />
            </div>
        </div>
    );
};

export default Fab;
