import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Static from "../Components/Static";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Portfolio = ({ title }) => {
  useEffect(() => {
    document.title = `${title} - The Revolution Technologies`;
  }, [title]);

  // const slidesData = [
  //   {
  //     imageUrl: "./images/imgpsh_fullsize_anim (1).png",
  //     heading: "Our Portfolio",
  //     text: "The Revolution in the Mobile App Development",
  //   },
  //   {
  //     imageUrl: "./images/serimg2.png",
  //     heading: "Our Portfolio",
  //     text: "The Revolution in the Web App Development",
  //   },
  // ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  // };

  const [selectedCategory, setSelectedCategory] = useState("All");

  const portfolioData = [
    {
      image: "./images/ios1.png",
      title: "American Shipping and Towing ",
      category: "IOS App",
    },
    {
      image: "./images/ios5.png",
      title: "Olfat Shipping ",
      category: "IOS App",
    },
    {
      image: "./images/ios2.png",
      title: "ASL Shipping  ",
      category: "IOS App",
    },
    {
      image: "./images/imgport22.png",
      title: "Galaxy world wide",
      category: "Web Development",
    },
    {
      image: "./images/imgport33.png",
      title: "Galaxy world wide",
      category: "Mobile App",
    },

    {
      image: "./images/imgport11.png",
      title: "Galaxy world wide",
      category: "IOS App",
    },
    {
      image: "./images/imgport22.png",
      title: "Galaxy world wide",
      category: "Web Development",
    },
    {
      image: "./images/imgport33.png",
      title: "Galaxy world wide",
      category: "Mobile App",
    },
    {
      image: "./images/Instagram post - 45.png",
      title: "Health care Pronto",
      category: "Web Development",
    },
    {
      image: "./images/Instagram post - 45.png",
      title: "UI/UX Design Project ",
      category: "UI/UX Graphics",
    },
    {
      image: "./images/Instagram post - 45.png",
      title: "Automation ",
      category: "Automation",
    },
    {
      image: "./images/Instagram post - 45.png",
      title: "SEO ",
      category: "SEO",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Static />
      {/* <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div key={index} className="slider-item">
              <div className="slider-image">
                <img src={slide.imageUrl} alt={slide.heading} />
              </div>
              <div className="slider-content">
                <h2>{slide.heading}</h2>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </Slider> */}
      <div className="container-fluid" id="porfolio-container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="row">
              <p id="portfolio-count1-p1">Portfolio</p>
              <p id="portfolio-count1-p2">
                The Revolution in the Mobile & Web App Development.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src="images/serimg2.png" id="ser-bg-img" alt="Flexible" />
          </div>
        </div>
      </div>

      <div className="container-fluid" id="port-maincount">
        <div className="bg_img">
          <div className="container" id="port-container2">
            <div className="row">
              <h1 id="port-row2-h1">Introduce Our Projects</h1>
              <p id="port-para2">
                Software development outsourcing is just a tool to achieve
                business goals. But there is no wayto get worthwhile results
                without cooperation and trust between a client company.
              </p>
            </div>
            <div>
              {/* filter options  */}
              <div>
                {/* Filter buttons */}
                <div className="filter-buttons btns-row" style={{}}>
                  <button
                    className={`filter-button ${
                      selectedCategory === "All" ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory("All")}
                  >
                    All
                  </button>
                  <button
                    className={`filter-button ${
                      selectedCategory === "IOS App" ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory("IOS App")}
                  >
                    Mobile App (Andriod/IOS)
                  </button>
                  <button
                    className={`filter-button ${
                      selectedCategory === "UI/UX Graphics" ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory("UI/UX Graphics")}
                  >
                    UI/UX Graphics
                  </button>
                  <button
                    className={`filter-button ${
                      selectedCategory === "SEO" ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory("SEO")}
                  >
                    SEO
                  </button>
                  <button
                    className={`filter-button ${
                      selectedCategory === "Automation" ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory("Automation")}
                  >
                    Automation
                  </button>

                  <button
                    className={`filter-button ${
                      selectedCategory === "Web Development" ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory("Web Development")}
                  >
                    Web Development
                  </button>
                </div>

                {/* Display filtered portfolio items */}
                <div className="row rowing">
                  {portfolioData
                    .filter(
                      (item) =>
                        selectedCategory === "All" ||
                        item.category === selectedCategory
                    )
                    .map((item, index) => (
                      <div
                        className="col-sm-12 col-md-4 col-lg-4 port-row1"
                        key={index}
                      >
                        <div className="port-imag">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="img-port11"
                          />
                          <img
                            src="./images/portcolor1.png"
                            alt={item.title}
                            srcset=""
                            className="portcolor1"
                          />
                          <div className="row">
                            <p className="port-p1">{item.title}</p>
                            <p className="port-p2">{item.category}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="port-container3">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="row">
                <p id="port-count3-p1">
                  Trusted
                  <VerifiedUserIcon
                    fontSize="large"
                    style={{ color: "#C0472C" }}
                    className="port-icon1"
                  />
                  & love
                  <FavoriteIcon
                    fontSize="large"
                    style={{ color: "#C0472C" }}
                    className="port-icon2"
                  />
                  Worldwide
                </p>
                <p id="port-count3-pp"></p>
                <p id="port-count3-p3">
                  Software development outsourcing is just a tool to achieve
                  business goals. But there is no way to get worthwhile results
                  without cooperation and trust between a client company.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8">
              <img
                src="./images/porta.png"
                alt="porta"
                srcset=""
                id="port-imag33"
              />
            </div>
          </div>
        </div>
        <img
          src="./images/portrowimag.png"
          alt="portrowimag"
          srcset=""
          id="port-rowimag1"
        />
      </div>

      <div
        className="container-fluid row d-flex justify-content-center align-item-center"
        id="port-container5"
        style={{ paddingBottom: "50px" }}
      >
        <div className="col-sm-12 col-md-12 col-lg-12">
          <p id="port-container5-p1">
            Drop Us line! We are here to answer your question 24/7
          </p>
          <p id="port-container5-p2">Need a Free Consultation?</p>
          <Link to={"/contact"} id="port-container5-btn" onClick={scrollToTop}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
