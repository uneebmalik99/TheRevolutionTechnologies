import React from "react";
import './index.css';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



const Footer = () => {

    return (
        <>

           

            <footer className="main-div">

                <div className="container count1">
                    <div className="row">
                        <div className="first col-sm-12 col-md-3 col-lg-3 col-xs-12 media">
                            <h5>The Revolution Technology</h5>
                            <p className="para1">
                                
                                The Revolution Technology Infinity Group are one of the leading providers of IT
                                support in Islamabad. Since 2015, we have provided award winning IT support
                                services to thousands of businesses across the nation.
                            </p>

                        </div>

                        <div className="second col-sm-12 col-md-3 col-lg-3 col-xs-12 media">
                           
                            <ul>
                            <h5>Links</h5>
                                <a href="#"><li className="lifoot">Home</li></a>

                                <a href="#"><li className="lifoot">About Us</li></a>

                                <a href="#"><li className="lifoot">Services</li></a>

                                <a href="#"><li className="lifoot">PortFolio</li></a>

                                <a href="#"><li className="lifoot">Contact Us</li></a>
                            </ul>



                        </div>

                        <div className="third col-sm-12 col-md-3 col-lg-3  col-xs-12 col-xs-12 media">
                           
                            <ul>
                            <h5>Company</h5>

                                <a href="#"><li className="lifoot">About Company</li></a>

                                <a href="#"><li className="lifoot">Block chain</li></a>

                                <a href="#"><li className="lifoot">Mobile App</li></a>

                                <a href="#"><li className="lifoot">Ui/UX Design</li></a>

                                <a href="#"><li className="lifoot">Web</li></a>

                            </ul>


                        </div>
                        <div className="fourth col-sm-12 col-md-3 col-lg-3 col-xs-12 media">
                            <h5>  Contact Us</h5>
                            <p> Give us a call today and see what we can do for you.</p>
                            <p> <FmdGoodIcon fontSize="small" style={{ color: "#ffcc39" }}  /> Office#09, National Business Center, Murree Rd, Shamsabad, Rawalpindi</p>
                            <p> <EmailIcon fontSize="small" style={{ color: "#ffcc39" }} /> info@therevolutiontechnologies.com</p>
                            <p> <CallIcon fontSize="small"style={{ color: "#ffcc39" }} /> 051-611-2452</p>
                            <p>+92-331-7766-777</p>



                        </div>

                    </div>

                    <div className="container count2">
                        <a href="https://www.facebook.com"><img src="./images/fb_icon_325x325.png" className="footer-img" alt="faceook" srcset="" /></a>
                        <a href="https://www.instagram.com"><img src="./images/instagram.png"className="footer-img" alt="instagram" srcset="" /></a>
                        <a href="https://www.twitter.com"><img src="./images/673524.png" className="footer-img" alt="Twitter" srcset="" /></a>
                        <a href="https://www.linkedin.com"><img src="./images/link1.png" className="footer-img" alt="linkdin" srcset="" /></a>


                        </div>

                    <div className="row col-sm-12 span1">
                    <span>Copyright © 2021 The Revolution Technologies. All Rights Reserved.</span>
                    </div>
                </div>


            </footer>


        </>
    );

}
export default Footer;