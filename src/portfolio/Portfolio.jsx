import React, { useState } from "react";
import './portfolios.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Static from "../Components/Static";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Showproject from "../Showproject";


const Portfolio = () => {

  const slidesData = [
    {
      imageUrl: './images/imgpsh_fullsize_anim (1).png',
      heading: 'Slide 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageUrl: 'image2.jpg',
      heading: 'Slide 2',
      text: 'Nulla facilisi. Proin eget libero nec libero finibus egestas.',
    },
    {
      imageUrl: 'image2.jpg',
      heading: 'Slide 3',
      text: 'Nulla facilisi. Proin eget libero nec libero finibus egestas.',
    }, {
      imageUrl: 'image2.jpg',
      heading: 'Slide 4',
      text: 'Nulla facilisi. Proin eget libero nec libero finibus egestas.',
    }, {
      imageUrl: 'image2.jpg',
      heading: 'Slide 5',
      text: 'Nulla facilisi. Proin eget libero nec libero finibus egestas.',
    },
    // Add more slides as needed
  ];
  
  
  const images = [
    './images/Instagram post - 51.png',
    './images/Instagram post - 53.png',
    './images/Instagram post - 54.png',
    // Add more image URLs as needed
  ];
  const settings = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  

 
    const [selectedCategory, setSelectedCategory] = useState('All');

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

      
   



    return (
        <>
        <Static/>

        <Slider {...settings}>
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
    </Slider>




            <div className="container-fluid" id="port-maincount">
        
     
              <div className="bg_img">
                <div className="container" id="port-container2">
                    <div className="row">
                        <h1 id="port-row2-h1">Introduce Our Projects</h1>
                        <p id="port-para2">Software development outsourcing is just a tool to achieve business goals. But there is no wayto get
                            worthwhile results without cooperation and trust between a client company.  </p>
                    </div>

                

                    <div>
    

    {/* filter options  */}


    <div>

  {/* Filter buttons */}
  <div className="filter-buttons">
  <button
    className={`filter-button ${selectedCategory === 'All' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('All')}
  >
    All
  </button>
  <button
    className={`filter-button ${selectedCategory === 'IOS App' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('IOS App')}
  >
      Mobile App (Andriod/IOS) 
  </button>
  <button
    className={`filter-button ${selectedCategory === 'uiux' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('uiux')}
  >
    UI/UX Graphics
  </button>
  <button
    className={`filter-button ${selectedCategory === 'seo' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('seo')}
  >
    SEO
  </button>
  <button
    className={`filter-button ${selectedCategory === 'automation' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('automation')}
  >
    Automation
  </button>
  
  <button
    className={`filter-button ${selectedCategory === 'Web Development' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('Web Development')}
  >
    Web Development
  </button>
  {/* Add more category buttons as needed */}
</div>


  {/* Display filtered portfolio items */}
  <div className="row rowing">
    {portfolioData
      .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
      .map((item, index) => (
        <div className="col-sm-12 col-md-4 col-lg-4 port-row1" key={index}>
          <div className="port-imag">
            <img src={item.image} alt="image" className="img-port11" />
            <div>
            <img src="./images/portcolor1.png" alt="image" srcset="" className="portcolor1" />
              <div className="row">
                <p className="port-p1">{item.title}</p>
                <p className="port-p2">{item.category}</p>
              </div>
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
                                <p id="port-count3-p1">Trusted and love</p>
                                <p id="port-count3-pp"> <FavoriteIcon fontSize="large" style={{ color: "#C0472C" }} className="port-icon1" /><span id="port-count3-p2">Worldwide</span> </p>
                                <p id="port-count3-p3">Software development outsourcing is just a tool to achieve business goals.
                                    But there is no way to get worthwhile results without cooperation and trust
                                    between a client company.</p>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-8">
                            <img src="./images/porta.png" alt="image" srcset="" id="port-imag33" />
                        </div>
                    </div>

                </div>
                <img src="./images/portrowimag.png" alt="image" srcset="" id="port-rowimag1" />
            </div>

            <div className="container-fluid" id="port-container4">
                <div className="container-fluid" id="port-container5">

                    <div className="row " id="port-container5-row">
                        <div className="col-sm-12 col-md-8 col-lg-8">
                            <div className="row" id="port-container5-row">
                                <p id="port-container5-p1">Drop Us line! We are hare to answer your question 24/7</p>
                                <p id="port-container5-p2">Need A FREE CONSULTATION ?</p>
                                <button id="port-container5-btn">Contact Us</button>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                        <img src="./images/count5img.png" alt="image" srcset="" id="count5-img" />

                        </div>
                    </div>



                </div>

            </div>
        </>
    )
}
export default Portfolio;