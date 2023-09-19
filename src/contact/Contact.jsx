import React from "react";
import './countactus.css';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import Map from "../Components/Map";
import Static from "../Components/Static";

const Contact = () => {

    return (
        <>
        <Static/>
            <div className="container-fluid" id="contact-maincontainer">
                <div className="container-fluid" id="contact-container">
                    <div class="contact_heading">


                        <h1>Contact Us</h1>
                    </div>

                </div>
                {/* <div className="container-fluid" id="contact-container1"> */}
                <div className="container" id="contact-container2">
                    <div className="row  contact_row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h1 className="contact-color-black contact-align contact-mar ">Contact us</h1>
                            <p className="contact-color-black contact-align contact-mar2 contact_text">Give us a call or drop by anytime,we endeavour to answer all enquiries within 24 hours on business days.We will be happy to answer your questions.</p>
                            <p className="contact-color-black contact-align contact-mar3">
                                <h5 className="contact-color-black contact-align contact-mar-b  ">
                                    < LanguageIcon fontSize="large" style={{ color: "#ffcc39" }} className="m-icon" />
                                    Our Address</h5 ><span className="contact-span "><p class="contact-text">Office#09, National Business Center, Murree Rd, Shamsabad, Rawalpindi</p></span>
                            </p>

                            <p className="contact-color-black contact-align contact-mar3">
                                <h5 className="contact-color-black contact-align contact-mar-b"> <EmailIcon fontSize="large" style={{ color: "#ffcc39" }} className="m-icon" /> Our Mails</h5> <span className="contact-span2"> <p class="contact-text">info@therevolutiontechnologies.com</p></span></p>

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div id="contact-form">

                                <h1 className="contact-color " id="contact-pad">Ready to get Started?</h1>
                                <p className="contact-color2">Your Email Address will not be published.Required field are marked * </p>
                                <form action="">
                                    <input type="text" placeholder="Name  " className="contact-input input" /><br></br>
                                    <input type="text" placeholder="Email" className="contact-input input" /><br></br>
                                    <textarea name="textbox" id="" cols="" rows="5" placeholder="Message " className="textarea1 contact-input" ></textarea>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
                {/* </div> */}

            </div>
            <div className="container-fluid" id="contact-container3">
                {/* <img src="../images/googlemap.png" alt="image" srcset="" className="contactimag2" /> */}
                <Map />
            </div>



        </>
    );

}
export default Contact;