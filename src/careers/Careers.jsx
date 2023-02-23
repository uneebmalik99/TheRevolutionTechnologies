import React from "react";
import './career.css';
import Static from "../Components/Static";
const Careers = () => {
    return (
        <>
        <Static/>
            <div>
                <div className="container-fluid" id="career-container1">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="row " id="career-row1">
                                <p id="career-p1">Careers</p>
                                <p id="career-p2">Discover your next career move with one of the leading Tech Firms!.</p>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 career-column">
                            <img src="images/career2.png" id="career-img1" alt="flex img" />


                        </div>
                    </div>
                </div>


                <div className="container-fluid" id="career-container2">
                    <div className="row heading"> <p id="career-container2-p1">WHY JOIN The Revolution Technologies ?</p></div>

                    <div className="row" id="career-container2-row1">

                        <p id="career-container2-p2">Techies, innovators, developers, and free-thinkers… you’ve come to the right place.Funsol Technologies has
                            been delivering premium
                            IT-enabled business solutions to a wide array of client organizations for over four decades. We have
                            remained at the cutting edge of enterprise technology by making employee excellence our top priority.
                            We believe in cultivating a working environment that supports innovation and creative thinking.We give you
                            opportunities to excel and achieve the global recognition that you deserve!</p>
                    </div>

                </div>
                <div className="row" id=" career-container3-row1">
                        <p className="container3-p"> OPEN VACANCIES </p>
                    </div>
                <div className="container-fluid" id="career-container3">
<div className="row mainrw">
                    
                    <div className="container-fluid" id=" container3-inner">
                        <div className=" career-container3-section1">

                        </div>
                    </div>
                    <div className="row vacancies">
                        <div className="row inrow">
                            <div className="col-sm-12 col-md-2 col-lg-3 ">
                                <p className="text">WEB DEVELOPER</p>
                                <br></br>
                                <p className="scndtxt">Rawalpindi</p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6  ">
                                <p className="text">DESCRIPTION</p>
                                <br></br>
                                <p className="scndtxt">We are Looking for Full Stack develoer <a href="https://www.w3schools.com" className="link">Read more</a></p>
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-3 ">
                                <button className='btn-vacancies '> Apply</button>
                            </div>
                        </div>


                    </div>

                   
                    <div className="row vacancies">
                        <div className="row inrow">
                            <div className="col-sm-12 col-md-2 col-lg-3 ">
                                <p className="text">Mobile App Developers</p>
                                <br></br>
                                <p className="scndtxt">Rawalpindi</p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6  ">
                                <p className="text">DESCRIPTION</p>
                                <br></br>
                                <p className="scndtxt">We are Looking for Full Stack develoer <a href="https://www.w3schools.com" className="link">Read more</a></p>
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-3 ">
                                <button className='btn-vacancies '> Apply</button>
                            </div>
                        </div>


                    </div>

                    <div className="row vacancies doing">
                        <div className="row inrow">
                            <div className="col-sm-12 col-md-2 col-lg-3 ">
                                <p className="text">UI/UX</p>
                                <br></br>
                                <p className="scndtxt">Rawalpindi</p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6  ">
                                <p className="text">DESCRIPTION</p>
                                <br></br>
                                <p className="scndtxt">We are Looking for Full Stack develoer <a href="https://www.w3schools.com" className="link">Read more</a></p>
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-3 ">
                                <button className='btn-vacancies '> Apply</button>
                            </div>
                        </div>


                    </div>
                   
                    </div>

                </div>


                <div className="empty-row">

                </div>

            </div>

        </>
    );
}
export default Careers;