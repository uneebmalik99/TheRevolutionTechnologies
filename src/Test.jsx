import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Test.css';

const Test = () => {
  // Sample testimonial data
  const testimonials = [
    {
      name: 'Malik Noman ',
      position: 'COO - Amsev ',
      message:
        'Malik is a motivated, hard-working, and intelligent CEO who is expertise in his area. A broad-minded CEO, who welcomes change and motivates to do better every day. His exceptional set of skills, ingenuity, and integrity made the project a dream. Malik leads by example, and many people in the workplace find his enthusiasm and dedication, both inspiring and motivating. I wish him all the success in his future.',
    },
    {
      name: 'Matthias Madeja',
      position: 'CTO - SmileUnion ',
      message:
        "Working with Uneeb is highly recommended! He is a very dedicated and reliable person. A professional in what he does. He helped us to program our app.Besides the unique knowledge Uneeb puts a lot of patience and work is his work behind.",
    },
    {
      name: 'John Galvagno ',
      position: 'CTO - Rubicon Performance',
      message:
        "Uneeb has been an absolute treat to work with! He has helped us build some of our lead forms and has gone above and beyond to make sure he's built exactly what is required.",
    },
    {
      name: 'Waheed ',
      position: 'CEO - MMW',
      message:
        "Perfect as usual - Uneeb was patient with new inputs given the nature of the project and had always better Ideas . Will rehire again for sure .",
    },
    {
      name: 'Charlie ',
      position: 'CTO - XYZ',
      message:
        "Perfect as usual - Uneeb was patient with new inputs given the nature of the project and had always better Ideas . Will rehire again for sure .",
    },
    {
      name: 'Fikre  ',
      position: 'CEO - MesobStore ',
      message:
        "He is very proficient in AWS technologies like dynamoDB, Cogonito, Labda, GaphQL, and Appsyncand React Native as well for both my IOS and Android app.The work he did for me is IOS notification, location, and share and in-app browser and social logins as well. Admin Panel and he builds API to connect with my backend. Every configuration with AWS SES technology thanks to Uneeb I am getting orders coming to my work email now. He configured the admin panel subdomain.",
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
      <div className="row slidercenter">
        <div className="col-10">
          <div className="row test-row2">
            <h1 className="test-p2">,,</h1>
          </div>
          <div className="row test-row3">
            <h3 className="test-p3">What Our Clients Say</h3>
          </div>
          <Slider  {...sliderSettings} ref={sliderRef}>
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

      </div>
    </div>
  );
};

export default Test;
