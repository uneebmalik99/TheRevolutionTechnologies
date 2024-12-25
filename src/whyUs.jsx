import React from "react";
import "./Whyus.css";
import image2 from "./image/Group 98817.png";

const whyUSData = [
  {
    heading: "Product Design",
    text: "Our product design service lets you prototype, test and validate your ideas.",
    backgroundimage: image2,
  },
  {
    heading: "Development",
    text: "Our product design service lets you prototype, test and validate your ideas.",
    backgroundimage: image2,
  },
  {
    heading: "Product Design",
    text: "Our product design service lets you prototype, test and validate your ideas.",
    backgroundimage: image2,
  },
];

const WhyUs = () => {
  return (
    <>
      <div className="container-fluid para_hd2 pt-md-5">
        <p>WHY CHOOSE US</p>
        <h1 className="why_h2">
          Design the Concept of Your Business Idea Now.
        </h1>
      </div>

      <div className="container-fluid cardresposnsive">
        <div className="row">
          {whyUSData.map((item, index) => (
            <div
              className="col-md-4 col-sm-12 customcard"
              key={index}
              style={{
                backgroundImage: `url(${item.backgroundimage})`,
                backgroundSize: "cover",
              }}
            >
              <h3 className="why_h3">{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="row h2cardwrap">
          <div className="col-md-6 col-sm-12 card card3" id="card3_id">
            <div>
              <p className="yeloow_para">5 +</p>
              <h1>Countries Worldwide</h1>
              <p>
                To succeed, every software solution must be deeply integrated
                into the existing tech environment.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 card card3">
            <p className="yeloow_para">5 +</p>
            <h1>Countries Worldwide</h1>
            <p>
              To succeed, every software solution must be deeply integrated into
              the existing tech environment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
