import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Test.css';

const Test = () => {
  // Sample testimonial data
  const testimonials = [
    {
      name: 'Billy Wade',
      position: 'Office Manager',
      message:
        'It was nice working with your team because no matter what ideas we come with, you guys know how to implement them! Great work, guys! Our app has never looked better, ever. Thank you.',
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Director',
      message:
        "I'm incredibly impressed with the results we achieved working with your team. The level of professionalism and expertise is top-notch.",
    },
    // Add more testimonials as needed
  ];

  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false, // Hide dots for custom navigation buttons
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="container-fluid test-count">
      <div className="row test-row1">
        <h5 className="test-p1">TESTIMONIALS</h5>
      </div>
      <div className="row">
        <div className="col-1 text-center">
          <button className="btn arrowbtn" onClick={handlePrev}>
            &lt; {/* Left arrow */}
          </button>
        </div>
        <div className="col-10">
          <div className="row test-row2">
            <h1 className="test-p2">,,</h1>
          </div>
          <div className="row test-row3">
            <h3 className="test-p3">What Our Clients Say</h3>
          </div>
          <Slider {...sliderSettings} ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="row test-row4">
                <p className="test-p4 spacing-there">{testimonial.message}</p>
                <div className="row test-row5 spacing-there">
                  <h2 className="test-p5">{testimonial.name}</h2>
                </div>
                <div className="row test-row6 spacing-there">
                  <h3 className="test-p6">{testimonial.position}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="col-1 text-center">
          <button className="btn arrowbtn" onClick={handleNext}>
            &gt; {/* Right arrow */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
