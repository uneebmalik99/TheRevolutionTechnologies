import React from "react";
import "./index.css";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CallIcon from "@mui/icons-material/Call";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <footer className="main-div">
        <div className="container count1">
          <div className="row">
            <div className="first col-sm-12 col-md-3 col-lg-3 col-xs-12 media">
              <h5>The Revolution Technology</h5>
              <p className="para1">
                The Revolution Technology Infinity Group are one of the leading
                providers of IT support in Islamabad. Since 2015, we have
                provided award winning IT support services to thousands of
                businesses across the nation.
              </p>
            </div>

            <div className="second col-sm-12 col-md-3 col-lg-3 col-xs-12 media">
              <ul>
                <h5>Links</h5>
                <a href="/">
                  <li className="lifoot">Home</li>
                </a>

                <a href="/careers">
                  <li className="lifoot">Careers</li>
                </a>

                <a href="/services">
                  <li className="lifoot">Services</li>
                </a>

                <a href="/portfolio">
                  <li className="lifoot">PortFolio</li>
                </a>

                <a href="/contact">
                  <li className="lifoot">Contact Us</li>
                </a>
              </ul>
            </div>

            <div className="third col-sm-12 col-md-3 col-lg-3  col-xs-12 col-xs-12 media" >
              <ul className="third">
                <h5>Company</h5>

                <a href="/">
                  <li className="lifoot">About Company</li>
                </a>

                <a href="/">
                  <li className="lifoot">Block chain</li>
                </a>

                <a href="/">
                  <li className="lifoot">Mobile App</li>
                </a>

                <a href="/">
                  <li className="lifoot">UI/UX Design</li>
                </a>

                <a href="/">
                  <li className="lifoot">Web</li>
                </a>
              </ul>
            </div>
            <div className="fourth col-sm-12 col-md-3 col-lg-3 col-xs-12 media">
              <h5> Contact Us</h5>
              <p className="footer-p1">
                Give us a call today and see what we can do for you.
              </p>
              <p
                className="footer-p1"
                style={{ display: "flex", alignItems: "self-start" }}
              >
                <FmdGoodIcon fontSize="large" style={{ color: "#ffcc39" }} />
                Office no 12, Aries Tower Maryam Business Center, Murree Rd,
                Shamsabad, Rawalpindi
              </p>
              <p
                className="footer-p1"
                style={{ display: "flex", alignItems: "self-end" }}
              >
                <EmailIcon fontSize="large" style={{ color: "#ffcc39", marginRight: "5px" }} />
                 info@therevolutiontechnologies.tech
              </p>
              <p
                className="footer-p1"
                style={{ display: "flex", alignItems: "center" }}
              >
                <CallIcon fontSize="large" style={{ color: "#ffcc39", marginRight: "5px" }} />
                051-611-2452
              </p>
              <p
                className="footer-p1"
                style={{ display: "flex", alignItems: "center" }}
              >
                <CallIcon fontSize="large" style={{ color: "#ffcc39", marginRight: "5px" }} />
                +92-331-7766-777
              </p>
            </div>
          </div>

          <div className="container count2">
            <a href="https://www.facebook.com/TheRevolutionTechnologies">
              <img
                src="./images/fb_icon_325x325.png"
                className="footer-img"
                alt="faceook"
                srcset=""
              />
            </a>
            <a href="https://www.instagram.com">
              <img
                src="./images/Instagram.png"
                className="footer-img"
                alt="instagram"
                srcset=""
              />
            </a>
            <a href="https://www.twitter.com">
              <img
                src="./images/673524.png"
                className="footer-img"
                alt="Twitter"
                srcset=""
              />
            </a>
            <a href="https://www.linkedin.com/company/therevolutiontechnologies/">
              <img
                src="./images/link1.png"
                className="footer-img"
                alt="linkedin"
                srcset=""
              />
            </a>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row  span1">
            <span id="span2" style={{ color: "navy" }}>
              Copyright © {new Date().getFullYear()} The Revolution
              Technologies. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
