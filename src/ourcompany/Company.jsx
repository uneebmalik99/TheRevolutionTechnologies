import React from 'react';
import './company.css';
import Test from '../Test';
import Static from "../Components/Static";

const Company = () => {
    return (
        <>
        <Static/>
            <div className="container-fluid" id="company-countainer">

                <div className="row">
                    <h1 id='company-h1'>What We Actually Do</h1>
                </div>
                <div className="row">
                    <p className='company-p1'>EXPERIENCE.EXECUTION.EXCELLENCE</p>

                </div>


            </div>
            <div className="container-fluid contibm">
                <div className="row  ">
                    <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-3 comp-ibm "><img src="images/ibm.png" alt="pic"  /></div>
                    <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-2 comp-ibm" ><img src="images/ibm2.png" alt="pic" /></div>
                    <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-2 comp-ibm"><img src="images/ibm3.png" alt="pic" /></div>
                    <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-2 comp-ibm"><img src="images/ibm4.png" alt="pic" /></div>
                    <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-3 comp-ibm"><img src="images/ibm5.png" alt="pic" /></div>

                </div>
            </div>

            <div className="container-fluid" id='company-countainer22'>
                <div className="row row1-heading">
                    <h3 id='row1-h3'>About Us</h3>
                    <div className="row ">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <p id='company-p2'>Offering Sustainable Digital Solutions to Amazing People</p>
        
                            <p id='company-p3'>It is our commitment to development and providing clients sustainable
                                solutions that we rank #1! We are a purpose-driven team of developers
                                who aim to make your success scalable.</p>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div id="company-img">
                                <img src="./images/companyimg111.png" alt="image" srcset="" className="company-img1" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id='company-container33'>
                <div className="row aboutus_row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <div class="circle">

                        <img src="./images/company-group2.png" alt="image" srcset="" className="company-img22" />
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <div className="row company-row1" >
                            <div>

                                <h3 className='company-h3-img'>  <img src="./images/compg.png" alt="image" srcset="" id="company-elipse52" />  Our Vision</h3>
                                <p className='company-p3-img'>To foresee the future of IT and promote the spread of technology,
                                    by making one tap easy to use solutions</p>
                            </div>
                        </div>
                         
                        <div className="row company-row1" >
                            <div className="ourmission">

                                <h3 className='company-h3-img'>  <img src="./images/compg1.png" alt="image" srcset="" id="company-elipse53" /> Our Mission</h3>
                                <p className='company-p33-img'>Learn and grow with our people to make great things together. We believe our people are our strength,
                                 and we are keen to lead them through the path and reach to the top with the virtues of teamwork,
                                  motivation, dedication and leadership.</p>
                            </div>
                        </div>

                        <div className="row company-row3" >
                            <div className="ourteam">

                                <h3 className='company-h3-img'>  <img src="./images/compg2.png" alt="image" srcset="" id="company-elipse52" />  Our Goals</h3>
                                <p className='company-p3-img'>our team, skillset and expertise kept growing and evolving enabling us to create innovative 
                                digital solutions for other entrepreneurs and businesses</p>
                            </div>
                        </div>


                    </div>
                </div>


            </div>


            <div className="container-fluid" id="company-countainer3">
                <div className="row">
                    <div className=" col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                        <h1 className='count3-h3'>20+</h1>
                        <p className='count3-p3'>AC TIVE CLIENTS</p>

                    </div>
                    <div className=" col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <h1 className='count3-h3'>20+</h1>
                        <p className='count3-p3'>AC TIVE CLIENTS</p>

                    </div>
                    <div className=" col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <h1 className='count3-h3'>20+</h1>
                        <p className='count3-p3'>AC TIVE CLIENTS</p>

                    </div>
                    <div className=" col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <h1 className='count3-h3'>20+</h1>
                        <p className='count3-p3'>AC TIVE CLIENTS</p>

                    </div>
                </div>
            </div>



            <Test />

        </>

    );
}

export default Company;