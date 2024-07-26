import React from "react";
import { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Showproject.css";
import { Margin } from "@mui/icons-material";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

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
];

const Showproject = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <div className="container-fluid bg_img projects px-5">
      <div className="row projects-section">
        <h1 className="h1-projects">Introduce Our Projects</h1>
        <p className="p-projects">
          Software development outsourcing is just a tool to achieve business
          goals. But there is no wayto get worthwhile results without
          cooperation and trust between a client company.
        </p>
      </div>

      <div>
        {/* Filter buttons */}
        <div className="filter-buttons" style={{ justifyContent: "center" }}>
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
              selectedCategory === "uiux" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("uiux")}
          >
            UI/UX Graphics
          </button>
          <button
            className={`filter-button ${
              selectedCategory === "seo" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("seo")}
          >
            SEO
          </button>
          <button
            className={`filter-button ${
              selectedCategory === "automation" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("automation")}
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
          <div className="App">
            <Carousel breakPoints={breakPoints}>
              {portfolioData
                .filter(
                  (item) =>
                    selectedCategory === "All" ||
                    item.category === selectedCategory
                )
                .map((item, index) => (
                  <>
                    <Item>
                      <div className="container" style={{ margin: Margin }}>
                        <div className="col-sm-12  port-row1" key={index}>
                          <div className="port-imag">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="show-img-port11"
                            />
                            <div>
                              <div className="row">
                                <p className="port-p11">{item.title}</p>
                                <p className="port-p22">{item.category}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Item>
                  </>
                ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showproject;
