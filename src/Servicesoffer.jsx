import React from "react";
import "./Servicesoffer.css";

const ServicesOffer = () => {
  return (
    <>
      <div className="container1">
        <h4 className="text-center mt-4 mb-4">Our Services</h4>
        <div className="container">
          {/* Web Development Card */}
          <div className="service-row">
            <div className="service-left">
              <img
                src="./images/icon1.png"
                alt="Web Development"
                className="service-icon"
              />
              <h4>Web Development</h4>
            </div>
            <div className="service-right">
              <p className="tilted-description">
                We carry more than just good coding skills. Our experience makes
                us stand out from other web development.
              </p>
            </div>
          </div>

          {/* Mobile App Development Card */}
          <div className="service-row">
            <div className="service-left">
              <img
                src="./images/i2.png"
                alt="Mobile App Development"
                className="service-icon"
              />
              <h4>Mobile App Development</h4>
            </div>
            <div className="service-right">
              <p className="tilted-description">
                We carry more than just good coding skills. Our experience makes
                us stand out from other mobile app development.
              </p>
            </div>
          </div>

          {/* SEO Card */}
          <div className="service-row">
            <div className="service-left">
              <img src="./images/i3.png" alt="SEO" className="service-icon" />
              <h4>SEO</h4>
            </div>
            <div className="service-right">
              <p className="tilted-description">
                We carry more than just good coding skills. Our experience makes
                us stand out from other UI/UX design.
              </p>
            </div>
          </div>

          {/* Digital Marketing Card */}
          <div className="service-row">
            <div className="service-left">
              <img
                src="./images/i4.png"
                alt="Digital Marketing"
                className="service-icon"
              />
              <h4>Digital Marketing</h4>
            </div>
            <div className="service-right">
              <p className="tilted-description">
                We carry more than just good coding skills. Our experience makes
                us stand out from other web development.
              </p>
            </div>
          </div>

          {/* Social Media Marketing Card */}
          <div className="service-row">
            <div className="service-left">
              <img
                src="./images/i2.png"
                alt="Social Media Marketing"
                className="service-icon"
              />
              <h4>Social Media Marketing</h4>
            </div>
            <div className="service-right">
              <p className="tilted-description">
                We carry more than just good coding skills. Our experience makes
                us stand out from other web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesOffer;
