import React from "react";
import head from "./header.module.css";
import Static from "./Components/Static";

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
            solutions that exceed client expectations
          </p>
          <div className={`row ${head.btnrow}`}>
            <button className={head.btn}>LEARN MORE</button>
          </div>
        </div>
      </div>

      {/* Modern CSS-based Marquee */}
      <div className={`container-fluid ${head.contibm}`}>
        <div className={head.marquee}>
          <div className={head.marqueeContent}>
            <div className={`col-6 col-sm-4 col-md-2 ${head.rowibm}`}>
              <img src="images/meso.jpg" alt="pic" className=" fluid" />
              Mesob Store
            </div>
            <div className={`col-6 col-sm-4 col-md-2 ${head.rowibm}`}>
              <img src="images/afg.webp" alt="pic" className=" fluid" />
              AFG Shipping
            </div>
            <div className={`col-6 col-sm-4 col-md-2 ${head.rowibm}`}>
              <img src="images/3line.webp" alt="pic" className=" fluid" />
              3Line Shipping
            </div>
            {/* Repeat items for continuous scrolling */}
            <div className={`col-6 col-sm-4 col-md-2 ${head.rowibm}`}>
              <img src="images/meso.jpg" alt="pic" className=" fluid" />
              Mesob Store
            </div>
            <div className={`col-6 col-sm-4 col-md-2 ${head.rowibm}`}>
              <img src="images/afg.webp" alt="pic" className=" fluid" />
              AFG Shipping
            </div>
            <div className={`col-6 col-sm-4 col-md-2 ${head.rowibm}`}>
              <img src="images/3line.webp" alt="pic" className=" fluid" />
              3Line Shipping
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
