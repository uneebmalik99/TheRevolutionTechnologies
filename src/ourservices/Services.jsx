import React, { useEffect } from "react";
import "./Services.css";
// import Static from "../Components/Static";
// import EmailIcon from "@mui/icons-material/Email";
// import LanguageIcon from "@mui/icons-material/Language";
// import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ServicesComponent from "../ServicesComponent";

const Services = ({ title }) => {
  useEffect(() => {
    document.title = `${title} - The Revolution Technologies`;
  }, [title]);
  return (
    <>
      {/* <Static /> */}

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
      <ServicesComponent />
    </>
  );
};

export default Services;
