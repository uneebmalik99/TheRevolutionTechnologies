import React, { useEffect } from "react";
import "./company.css";
import Test from "../Test";
import Static from "../Components/Static";
import "bootstrap/dist/css/bootstrap.min.css";

const Company = ({ title }) => {
  useEffect(() => {
    document.title = `${title} - The Revolution Technologies`;
  }, [title]);

  const Card = ({ heading, text }) => {
    return (
      <div className="col-md-4  bgimg">
        <div className="card single-card">
          <div className="card-body">
            <h5 className="card-title p-2">{heading}</h5>
            <p className="card-text text-color">{text}</p>
          </div>
        </div>
      </div>
    );
  };

  const cardData = [
    {
      heading: "Reach",
      text: "It was nice working with your team because no matter what ideas we come.",
    },
    {
      heading: "Nice",
      text: "It was nice working with your team because no matter what ideas we come",
    },
    {
      heading: "Nice",
      text: "It was nice working with your team because no matter what ideas we come",
    },
  ];

  return (
    <>
      <Static />
      <div className="container-fluid" id="company-countainer">
        <div className="row">
          <h1 id="company-h1">What We Actually Do</h1>
        </div>
        <div className="row">
          <p className="company-p1">EXPERIENCE. EXECUTION. EXCELLENCE</p>
        </div>
      </div>
      <div className="container-fluid contibm">
        <div className="row">
          <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-3 comp-ibm ">
            <img src="images/ibm.png" alt="ibm" />
          </div>
          <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-2 comp-ibm">
            <img src="images/ibm2.png" alt="ibm2" />
          </div>
          <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-2 comp-ibm">
            <img src="images/ibm3.png" alt="ibm3" />
          </div>
          <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-2 comp-ibm">
            <img src="images/ibm4.png" alt="ibm4" />
          </div>
          <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-3 comp-ibm">
            <img src="images/ibm5.png" alt="ibm5" />
          </div>
        </div>
      </div>

      <div className="container-fluid aboutus" id="company-countainer22">
        <div className="row row1-heading">
          <h3 id="row1-h3">About Us</h3>
          <div className="row ">
            <div className=" abouthp col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <h class="company-p2">
                Offering Sustainable Digital Solutions to Amazing People
              </h>

              <p id="company-p3">
                It is our commitment to development and providing clients
                sustainable solutions that we rank #1! We are a purpose-driven
                team of developers who aim to make your success scalable.
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div id="company-img">
                <img
                  src="./images/aboutus.png"
                  alt="aboutus"
                  srcset=""
                  className="company-img1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="company-container33">
        <div className="row aboutus_row col-12 col-xs-12 col-sm-12 col-md-12  col-lg-12">
          <h1 className="sideone-h1 h1-main">OUR VISION</h1>
          <div className="visiondiv col-8 col-xs-8 col-sm-8 col-md-8  col-lg-8 p-3">
            <div className="flex sideone">
              <div className="imgdiv">
                <img
                  className="imgdiv"
                  src="./images/compg.png"
                  alt="compg"
                  srcset=""
                  id="company-elipse52"
                />
              </div>

              <div className="side-para-andh">
                <h3 className="sideone-h1">Our Vision</h3>
                <p className="sideone-p">
                  To foresee the future of IT and promote the spread of
                  technology, by making one tap easy to use solutions
                </p>
              </div>
            </div>
            {/* our mission  */}
            <div className="flex  sideone  ">
              <div className="imgdiv">
                <img
                  className="imgdiv"
                  src="./images/compg1.png"
                  alt="compg1"
                  srcset=""
                  id="company-elipse52"
                />
              </div>

              <div className="side-para-andh">
                <h3 className="sideone-h1 ">Our Mission</h3>
                <p className="sideone-p">
                  Learn and grow with our people to make great things together.
                  We believe our people are our strength, and we are keen to
                  lead them through the path and reach to the top with the
                  virtues of teamwork, motivation, dedication and leadership.
                </p>
              </div>
            </div>

            {/* our Goals */}
            <div className="flex  sideone  ">
              <div className="imgdiv">
                <img
                  className="imgdiv"
                  src="./images/compg2.png"
                  alt="compg2"
                  srcset=""
                  id="company-elipse52"
                />
              </div>

              <div className="side-para-andh">
                <h3 className="sideone-h1">Our Goals</h3>
                <p className="sideone-p">
                  our team, skillset and expertise kept growing and evolving
                  enabling us to create innovative digital solutions for other
                  entrepreneurs and businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="company-countainer3">
        <div className="row banner">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
            <h1 className="count3-h3">20+</h1>
            <p className="count3-p3">AC TIVE CLIENTS</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <h1 className="count3-h3">20+</h1>
            <p className="count3-p3">AC TIVE CLIENTS</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <h1 className="count3-h3">20+</h1>
            <p className="count3-p3">AC TIVE CLIENTS</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <h1 className="count3-h3">20+</h1>
            <p className="count3-p3">AC TIVE CLIENTS</p>
          </div>
        </div>
      </div>

      <Test />

      <div className="col-12 row services">
        <div className="col-6">
          <h1>SERVICES</h1>
          <p style={{ color: "white" }}>
            It was nice working with your team because no matter what ideas we
            come with, you guys
          </p>
        </div>

        <div className="col-3">
          <img
            src="./images/19333429 1.png"
            alt="service"
            className="serviceimg"
          />
        </div>
      </div>
      <div className="whyus">
        <div className="whyheading">Why Choose Us</div>

        <div className="container">
          <div className="row cardsdata ">
            {cardData.map((card, index) => (
              <Card
                className=""
                key={index}
                heading={card.heading}
                text={card.text}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
