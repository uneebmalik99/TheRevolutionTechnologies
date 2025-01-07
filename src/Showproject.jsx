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
  {
    image: "./images/Instagram post - 45.png",
    title: "UI/UX Design Project",
    category: "UI/UX Graphics",
  },
  {
    image: "./images/Instagram post - 45.png",
    title: "Automation",
    category: "Automation",
  },
  {
    image: "./images/Instagram post - 45.png",
    title: "SEO",
    category: "SEO",
  },
];

const Showproject = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <div className="container-fluid bg_img projects px-5">
      <div className="row projects-section">
        <h1 className="h1-projects"> Our Projects</h1>
        <p className="p-projects">
          Software development outsourcing is an outstanding just a tool to
          achieve business goals. <br></br> But there is no wayto get worthwhile
          results without cooperation and trust between a client company.
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
        <div className="row-rowing">
          <div className="App">
            <Carousel breakPoints={breakPoints}>
              {portfolioData
                .filter(
                  (item) =>
                    selectedCategory === "All" ||
                    item.category === selectedCategory
                )
                .map((item, index) => (
                  <Item key={index}>
                    <div
                      style={{ margin: Margin }}
                      className={`portfolio-item ${item.category
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                    >
                      <div className="col-sm-12 port-row1">
                        <div className="port-imag">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="img-port11"
                            style={{
                              boxShadow:
                                item.category === "UI/UX Graphics"
                                  ? "0 4px 6px rgba(0, 0, 0, 0.2)"
                                  : item.category === "SEO"
                                  ? "0 4px 6px rgba(0, 128, 0, 0.2)"
                                  : item.category === "Automation"
                                  ? "0 4px 6px rgba(255, 165, 0, 0.2)"
                                  : "0 4px 6px rgba(0, 0, 0, 0.1)", // Example unique shadows
                            }}
                          />
                          <div>
                            <img
                              src="./images/portcolor1.png"
                              alt={item.title}
                              className="portcolor1"
                            />
                            <div className="row">
                              <p className="port-p1">{item.title}</p>
                              <p className="port-p2">{item.category}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Item>
                ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showproject;
