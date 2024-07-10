import React, { useEffect } from "react";
import "./Services.css";
import Static from "../Components/Static";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

const Services = ({ title }) => {
  useEffect(() => {
    document.title = `${title} - The Revolution Technologies`;
  }, [title]);
  return (
    <>
      <Static />

      <div className="container-fluid" id="ser-container1">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="row">
              <p id="ser-count1-p1">Services</p>
              <p id="ser-count1-p2">
                We believe the only way to do great work is to love what you do,
                and we put our heart into whatever job we do.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src="images/serimg2.png" id="ser-bg-img" alt="Flexible" />
          </div>
        </div>
      </div>

      {/* Service Sections */}

      {/* Contact Section */}
      <div className="container-1">
        <div className="box-1">
          <p className="address1">
            <LanguageIcon fontSize="large" className="addressicon" />
            <h3>Our Address</h3>
            Office # 12, Aries Tower 2nd floor Murree Road, Shamsabad,
            Rawalpindi
          </p>

          <div className="container-2">
            <div className="box-3">
              <p className="Emailus">
                <EmailIcon fontSize="large" className="Emailicon" />
                <h3>Email Us</h3>info@therevolutiontechnologies.com
              </p>
            </div>
            <div className="box-4">
              <p className="Contactus">
                <AddIcCallIcon fontSize="large" className="contacticon" />
                <h3>Contact Us</h3>0331 7766777
              </p>
            </div>
          </div>
        </div>
        <div className="box-2">
          <h3>Put Your Comment Here</h3>
          <form action="" className="services-form">
            <input
              type="text"
              placeholder="Name"
              className="form-control mb-md-2"
              style={{ backgroundColor: "#ecf1f9" }}
            />
            <input
              type="text"
              placeholder="Email"
              className="form-control mb-md-2"
              style={{ backgroundColor: "#ecf1f9" }}
            />
            <textarea
              name="textbox"
              rows="5"
              placeholder="Message"
              className="form-control mb-md-2"
              style={{ backgroundColor: "#ecf1f9" }}
            ></textarea>
            <div className="row">
              <button className="send">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Services;
