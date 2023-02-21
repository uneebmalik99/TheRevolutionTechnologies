import React, { useState } from "react";
import './portfolios.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Portfolio = () => {

    const [show, setShow] = useState(false);

    const handleButton = () => {
        setShow(!show)
    }



    return (
        <>
            <div className="container-fluid" id="port-maincount">
                <div className="container-fluid" id="port-container">
                    <div className="fixed">
                       <div id="pos-inq">
                        inqurie now
                       </div>

                        <button className="btn  port-btn" onClick={handleButton} > + </button>

                        {
                            show == true &&

                            <div>
                                <a href="www.facebook.com" target={"_blank"}><img src="./images/fb_icon_325x325.png" className="port-btn2 " alt="faceook" srcset="" /></a>
                                <a href="www.facebook.com" target={"_blank"}><img src="./images/count55img.png" className="port-btn3" alt="faceook" srcset="" /></a>
                                <a href="www.facebook.com" target={"_blank"}><img src="./images/instagram.png"className="port-btn4" alt="instagram" srcset="" /></a>
                            </div>


                        }

                       

                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="row" id="portrow1">
                                <h1 id="port-h1">CUSTOMIZABLE</h1>
                                <h3 id="port-h3">SOFTWARE PRODUCTS</h3>
                                <p id="port-para">We build custom digital solutions to meet our clients unique business needs</p>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8">
                            <div className="">
                                <img src="./images/portshade.png" alt="image" srcset="" id="port-imag1" />
                            </div>

                        </div>
                    </div>

                </div>
                <div className="container" id="port-container2">
                    <div className="row">
                        <h1 id="port-row2-h1">Introduce Our Projects</h1>
                        <p id="port-para2">Software development outsourcing is just a tool to achieve business goals. But there is no wayto get
                            worthwhile results without cooperation and trust between a client company.  </p>
                    </div>

                    <div className="row rowing" >
                        <div className="col-sm-12 col-md-4 col-lg-4 port-row1" >
                            {/* <h2 className="port-count2-h2">All</h2> */}

                            <div className="port-imag">
                                <img src="./images/imgport11.png" alt="image" srcset="" className="img-port11" />
                                <div>
                                    <img src="./images/portcolor1.png" alt="image" srcset="" className="portcolor1" />
                                    <div className="row">
                                        <p className="port-p1">Galaxy world wide</p>
                                        <p className="port-p2">IOS App</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4  port-row1">
                            {/* <h2 className="port-count2-h2">Web Develoment</h2> */}
                            <div className="port-imag">
                                <img src="./images/imgport22.png" alt="image" srcset="" className="img-port11" />
                                <div>
                                    <img src="./images/portcolor2.png" alt="image" srcset="" className="portcolor1" />
                                    <div className="row">
                                        <p className="port-p1">Galaxy world wide</p>
                                        <p className="port-p2">IOS App</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4  port-row1">


                            <div className="port-imag">
                                {/* <h2 className="port-count2-h2">Mobile App</h2> */}
                                <img src="./images/imgport33.png" alt="image" srcset="" className="img-port11" />
                                <div>
                                    <img src="./images/portcolor3.png" alt="image" srcset="" className="portcolor1" />
                                    <div className="row">
                                        <p className="port-p1">Galaxy world wide</p>
                                        <p className="port-p2">IOS App</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row rowing" >
                        <div className="col-sm-12 col-md-4 col-lg-4 port-row1" >
                            {/* <h2 className="port-count2-h2">All</h2> */}

                            <div className="port-imag">
                                <img src="./images/imgport11.png" alt="image" srcset="" className="img-port11" />
                                <div>
                                    <img src="./images/portcolor1.png" alt="image" srcset="" className="portcolor1" />
                                    <div className="row">
                                        <p className="port-p1">Galaxy world wide</p>
                                        <p className="port-p2">IOS App</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4  port-row1">
                            {/* <h2 className="port-count2-h2">Web Develoment</h2> */}
                            <div className="port-imag">
                                <img src="./images/imgport22.png" alt="image" srcset="" className="img-port11" />
                                <div>
                                    <img src="./images/portcolor2.png" alt="image" srcset="" className="portcolor1" />
                                    <div className="row">
                                        <p className="port-p1">Galaxy world wide</p>
                                        <p className="port-p2">IOS App</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4  port-row1">


                            <div className="port-imag">
                                {/* <h2 className="port-count2-h2">Mobile App</h2> */}
                                <img src="./images/imgport33.png" alt="image" srcset="" className="img-port11" />
                                <div>
                                    <img src="./images/portcolor3.png" alt="image" srcset="" className="portcolor1" />
                                    <div className="row">
                                        <p className="port-p1">Galaxy world wide</p>
                                        <p className="port-p2">IOS App</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row rowing" >
                        <div className="col-sm-12 col-md-4 col-lg-4 port-row1" >
                            {/* <h2 className="port-count2-h2">All</h2> */}

                            <div className="port-imag">
                                <img src="./images/imgport11.png" alt="image" srcset="" className="img-port11" />
                                <div>
                                    <img src="./images/portcolor1.png" alt="image" srcset="" className="portcolor1" />
                                    <div className="row">
                                        <p className="port-p1">Galaxy world wide</p>
                                        <p className="port-p2">IOS App</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4  port-row1">
                            {/* <h2 className="port-count2-h2">Web Develoment</h2> */}
                            <div className="port-imag">
                                <img src="./images/imgport22.png" alt="image" srcset="" className="img-port11" />
                                <div>
                                    <img src="./images/portcolor2.png" alt="image" srcset="" className="portcolor1" />
                                    <div className="row">
                                        <p className="port-p1">Galaxy world wide</p>
                                        <p className="port-p2">IOS App</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4  port-row1">


                            <div className="port-imag">
                                {/* <h2 className="port-count2-h2">Mobile App</h2> */}
                                <img src="./images/imgport33.png" alt="image" srcset="" className="img-port11" />
                                <div>
                                    <img src="./images/portcolor3.png" alt="image" srcset="" className="portcolor1" />
                                    <div className="row">
                                        <p className="port-p1">Galaxy world wide</p>
                                        <p className="port-p2">IOS App</p>
                                    </div>
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