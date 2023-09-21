import React from "react";

import "./Whyus.css";
import image1 from "./image/Group 2.png";
import image2 from "./image/Group\ 98817.png";
  
console.log(image1) ; 
const whyUSData = [
  {
    heading: "product design",
    text: " Our product design service lets you prototype, test and validate your ideas.",
    backgroundimage: image2,
  },
  {
    heading: "Develoment",
    text: " Our product design service lets you prototype, test and validate your ideas.",
    backgroundimage: image2,
  },
  {
    heading: "product design",
    text: " Our product design service lets you prototype, test and validate your ideas.",
    backgroundimage: image2,
  },
];
const WhyUs = () => {
  return (
    <>
      <div className="para_hd2">
        <p>WHY CHOOSE US</p>
        <h1>Design the Concept of Your Business Idea Now</h1>
      </div>

<div className="cardresposnsive">


      <div className="cards-data container col-12">

        {whyUSData.map((item, index) => (
          <div
          
            className=" customcard"
            key={index}
            style={{
              backgroundImage: `url(${item.backgroundimage})`,
              backgroundSize: "cover",
            }}>
            <h3>{item.heading}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="cards-data container h2cardwrap">
        <div className=" card card3  " id="card3_id">

            <div>

          <p className="yeloow_para"> 5 + </p>

          <h1>Countries Worldwide</h1>
          <p>
            To succeed, every software solution must be deeply integrated into
            the existing tech environment.
          </p>
            </div>
        </div>
            
        <div className=" card card3 ">
          <p className="yeloow_para"> 5 +</p>
          <h1>Countries Worldwide</h1>
          <p>
            To succeed, every software solution must be deeply integrated into
            the existing tech environment..
          </p>
        </div>

        </div>
      </div>






    </>
  );
};

export default WhyUs;
