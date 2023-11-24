import React, { useState } from 'react'
import service from './Services.module.css'
const Services = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [defaultColor, setDefaultColor] = useState('#000000');
    const [hoverColor, setHoverColor] = useState('#FFFFFF'); // White color
  
    const getRandomColor = () => {
      // Generate a random hex color
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
  
    const handleHover = () => {
      setIsHovered(!isHovered);
   
      if (!isHovered) {
        setDefaultColor(getRandomColor());
      }
    };
    
    
    return (
        <>
            <div className={service.contservice}>
                <div className={`container-fluid ${service.serinnercount}`}>
                    <div className={`row ${service.firstrow}`}>
                        <h2 className={service.sercount1h2}>Services we Offer</h2>
                    </div>
    
                    <div className={`row ${service.outerrow}`} >
                        <div className="col-sm-12 col-md-12 col-lg-6 " style={{display:'flex', alignItems:'center', flexDirection:'column', justifyContent:'center'}}>
                            <h3 className={service.serh3}>Countries Worldwide</h3>
                            <p className={service.serp1}>To ok succeed, every software solution must be deeply integrated into the existing tech environment..</p>
                        </div>
    
                        <div className="col-sm-12 col-md-12 col-lg-3 ">
                            <div className={`card ${service.sercard1}`} 
                             style={{
                                backgroundColor: isHovered ? defaultColor : hoverColor,
                                transition: 'background-color 0.3s ease-in-out',
                              }}
                              onMouseEnter={handleHover}
                              onMouseLeave={handleHover}
                            >
                                <div className="image">
                                    <img src="images/ser55.png" alt="frame img" srcset="" className={service.serimag} />
                                </div>
                                <p className={service.sercount1p1} >Web Development</p>
                            </div>
                        </div>
    
                        <div className="col-sm-12 col-md-12 col-lg-3 ">
                            <div className={`card ${service.sercard1}`} style={{
                                backgroundColor: isHovered ? defaultColor : hoverColor,
                                transition: 'background-color 0.3s ease-in-out',
                              }}
                              onMouseEnter={handleHover}
                              onMouseLeave={handleHover} >
                                
                                <div className="image">
                                    <img src="images/ser6.png" alt="frame img" srcset="" className={service.serimag} />
                                </div>
                                <p className={service.sercount1p1} >App Development</p>
                            </div>
                        </div>
    
                        <div className="col-sm-12 col-md-12 col-lg-3 ">
                            <div className={`card ${service.sercard1}`} >
                                <div className="image">
                                    <img src="images/ser333.png" alt="frame img" srcset="" className={service.serimag}  />
                                </div>
                                <p className={service.sercount1p1} >SEO</p>
                            </div>
                        </div>
    
                        <div className="col-sm-12 col-md-12 col-lg-3 ">
                            <div className={`card ${service.sercard1}`} >
                                <div className="image">
                                    <img src="images/ser6.png" alt="frame img" srcset="" className={service.serimag} />
                                </div>
                                <p className={service.sercount1p1} >UI/UX Graphic Design</p>
                            </div>
                        </div>
    
                        <div className="col-sm-12 col-md-12 col-lg-3 ">
                            <div className={`card ${service.sercard1}`} >
                                <div className="image">
                                    <img src="images/ser33.png" alt="frame img" srcset="" className={service.serimag} />
                                </div>
                                <p className={service.sercount1p1} >Social Media Marketing</p>
                            </div>
                        </div>
    
                        <div className="col-sm-12 col-md-12 col-lg-3 ">
                            <div className={`card ${service.sercard1}`} >
                                <div className="image">
                                    <img src="images/ser4.png" alt="frame img" srcset="" className={service.serimag}  />
                                </div>
                                <p className={service.sercount1p1} >Digital Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    


}



export default Services;