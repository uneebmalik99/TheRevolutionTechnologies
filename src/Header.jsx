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
            solution that exceed client expectations
          </p>
          <div className={`row ${head.btnrow}`}>
            <button className={head.btn}>LEARN MORE</button>
          </div>
        </div>
      </div>

      <div className={`container-fluid ${head.contibm}`}>
        <marquee
          behavior=""
          direction="right"
          scrollamount="10"
          scrolldelay="50"
        >
          <div className="row">
            <div className={`col-6 col-sm-4 col-md-2 ${head.rowibm}`}>
              <img src="images/meso.jpg" alt="pic" className="img-fluid" />
            </div>
            <div className={`col-6 col-sm-4 col-md-2 ${head.rowibm}`}>
              <img src="images/afg.webp" alt="pic" className="img-fluid" />
            </div>
            <div className={`col-6 col-sm-4 col-md-2 ${head.rowibm}`}>
              <img src="images/3line.webp" alt="pic" className="img-fluid" />
            </div>
          </div>
        </marquee>
      </div>
    </>
  );
};

export default Header;
