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
                We design and develop responsive, high-quality websites that
                combine functionality with creativity. Our solutions are built
                to enhance user experience and help your business achieve
                measurable results.
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
                We create feature-rich, user-friendly mobile applications that
                deliver seamless performance across platforms. Our apps are
                designed to engage users and drive lasting business growth.
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
                We help your business stand out online with proven SEO
                strategies that boost visibility, rankings, and organic traffic.
                Our data-driven approach ensures sustainable growth and
                measurable results.
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
                We deliver targeted digital marketing campaigns that connect
                your brand with the right audience. From content and social
                media to paid ads, we turn engagement into conversions.
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
                We help your brand grow with creative social media strategies
                that inspire, engage, and convert. Our campaigns build
                meaningful connections and strengthen your online presence
                across all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesOffer;
