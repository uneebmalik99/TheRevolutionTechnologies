import React from "react";
import './Servicesoffer.css'
const ServicesOffer = () => {
    return (
        <>
            <div className="container1">
                <h4 className="text-center mt-4 mb-4">Services we Offer</h4>
                <div className="container">
                    <div className="row">
                        <div className="mainy col-md-6 col-lg-4 mb-4">
                            <div className="service-card text-center p-4">
                                <img src="./images/icon1.png" alt="Web Development" />
                                <h4>Web Development</h4>
                                <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
                            </div>
                        </div>
                        <div className=" mainy col-md-6 col-lg-4 mb-4">
                            <div className="service-card text-center p-4">
                                <img src="./images/i2.png" alt="Mobile App Development" />
                                <h4>Mobile App Development</h4>
                                <p>We carry more than just good coding skills. Our experience makes us stand out from other mobile app development.</p>
                            </div>
                        </div>
                        <div className=" mainy col-md-6 col-lg-4 mb-4">
                            <div className="service-card text-center p-4">
                                <img src="./images/i3.png" alt="SEO" />
                                <h4>SEO</h4>
                                <p>We carry more than just good coding skills. Our experience makes us stand out from other UI/UX design.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className=" mainy col-md-6 col-lg-4 mb-4">
                            <div className="service-card text-left p-4">
                                <img src="./images/i4.png" alt="Pay per Call" />
                                <h4>Digital Marketing</h4>
                                <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
                            </div>
                        </div>
                        <div className=" mainy col-md-6 col-lg-4 mb-4">
                            <div className="service-card text-left p-4">
                                <img src="./images/i2.png" alt="Pay per Acquisition" />
                                <h4>Social Media Marketing</h4>
                                <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicesOffer;
