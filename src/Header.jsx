import React from "react";
import head from "./header.module.css";
import Static from "./Components/Static";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <>
      <Static />
      <div className={`container-fluid ${head.containerhead}`}>
        <div className={`row ${head.headerrow}`}>
          <h1 className={head.heading1}>Exploring</h1>
          <h1 className={head.heading2}>New Paths</h1>
          <p className={head.heading3}>Enterprise & small business cloud</p>
          <p className={head.heading3}>
            solution that exceed client expectations
          </p>
          <div className={`row ${head.btnrow}`}>
            <button className={head.btn}>LEARN MORE</button>
          </div>
        </div>
      </div>

      <div className={`container-fluid ${head.contibm}`}>
        <Marquee style={{ padding: "25px" }}>
          <div style={{ marginLeft: "20px", marginRight: "20px" }}>
            <img
              src="images/meso.jpg"
              alt="Mesob Store"
              style={{ marginRight: "10px" }}
            />
            Mesob Store
          </div>
          <div style={{ marginLeft: "20px", marginRight: "20px" }}>
            <img
              src="images/afg.webp"
              alt="AFG Shipping"
              style={{ marginRight: "10px" }}
            />
            AFG Shipping
          </div>
          <div style={{ marginLeft: "20px", marginRight: "20px" }}>
            <img
              src="images/3line.webp"
              alt="3Line Shipping"
              style={{ marginRight: "10px" }}
            />
            3Line Shipping
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Header;
