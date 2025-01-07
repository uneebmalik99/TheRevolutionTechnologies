import React, { useState } from "react";
import service from "./Services.module.css";
import Lottie from "lottie-react";
import webDevelopmentAnimation from "./Animations/webdevelopment.json";
import mobileAppAnimation from "./Animations/mobileapp.json";
import seoAnimation from "./Animations/seo.json";
import uiuxDesignAnimation from "./Animations/uiuxdesign.json";
import socialMediaMarketingAnimation from "./Animations/socialmediamarketing.json";
import customsoftwaredevelopmentAnimation from "./Animations/customsoftwaredevelopment.json";

const Services = () => {
  const [hoverColors, setHoverColors] = useState(Array(6).fill(""));

  const handleHover = (index) => {
    setHoverColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = "#f0f0f0"; // Fixed hover color
      return newColors;
    });
  };

  const handleMouseLeave = (index) => {
    setHoverColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = "";
      return newColors;
    });
  };

  const services = [
    {
      animation: webDevelopmentAnimation,
      text: "Web Development",
      list: [
        "Frontend Development",
        "Backend Development",
        "Full Stack Solutions",
      ],
    },
    {
      animation: mobileAppAnimation,
      text: "App Development",
      list: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Solutions",
      ],
    },
    {
      animation: seoAnimation,
      text: "SEO",
      list: ["On-Page SEO", "Off-Page SEO", "Technical SEO"],
    },
    {
      animation: uiuxDesignAnimation,
      text: "UI/UX Graphic Design",
      list: [
        "User Interface Design",
        "User Experience Optimization",
        "Wireframing",
      ],
    },
    {
      animation: socialMediaMarketingAnimation,
      text: "Social Media Marketing",
      list: ["Content Strategy", "Paid Advertising", "Analytics and Reporting"],
    },
    {
      animation: customsoftwaredevelopmentAnimation,
      text: "Custom Software Development",
      list: [
        "Custom ERP Solutions",
        "Enterprise Software",
        "Tailored Applications",
      ],
    },
  ];

  // Character-by-character typewriter effect function
  const createTypewriterText = (text) => {
    const characters = text.split(""); // Split text into characters, including spaces
    return characters.map((char, index) => (
      <span
        key={index}
        className={service.character}
        style={{
          animationDelay: `${index * 0.05}s`, // 0.05s per character, including space
          marginRight: char === " " ? "0.2em" : "0", // Add a small space between words
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className={service.contservice}>
      <div className={`container-fluid ${service.serinnercount}`}>
        <div className={`row ${service.firstrow}`}>
          <h2 className={service.sercount1h2}>Our Services</h2>
        </div>
        <div className={`row ${service.outerrow}`}>
          <div
            className="col-sm-12 col-md-12 col-lg-6"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3 className={service.serh3}>Countries Worldwide</h3>
            <p className={service.serp1}>
              {createTypewriterText(
                "The Revolution Technologies, we focus on providing digital solutions that fit your needs online. Whether you want a great website, a custom app, better user experience with expert design, or a stronger online social media presence, we’re here to help. We also offer custom software development and use generative AI to bring your ideas to life. Let us help turn your ideas into reality with creative and reliable online solutions."
              )}
            </p>
          </div>
          {services.map((serviceItem, index) => (
            <div key={index} className="col-sm-12 col-md-12 col-lg-3">
              <div
                className={`card ${service.sercard1}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                style={{ backgroundColor: hoverColors[index] || "initial" }}
              >
                <div className="image">
                  <Lottie animationData={serviceItem.animation} loop={true} />
                </div>
                <p className={service.sercount1p1}>{serviceItem.text}</p>
                <ul>
                  {serviceItem.list.map((item, listIndex) => (
                    <li key={listIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
