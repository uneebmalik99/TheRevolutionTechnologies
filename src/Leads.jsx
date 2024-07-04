import React from "react";
import lead from "./Leads.module.css";

import { NavLink } from 'react-router-dom';

const Leads = () => {
  return (
    <div className={`${lead.bg} ${lead.textoflead}`}>
      <div className={`container-fluid ${lead.cont2} row`}>
        <div className={`col col-sm-12 col-md-5 col-lg-5 ${lead.textoflead} `}>
          <div className={lead.firstrow}>
            <p className={lead.leadsinfo1}>
              We Carry More Than Just Good Coding Skills
            </p>
          </div>
          <div className={lead.secondrow}>
            <h1 className={lead.leadsinfo2}>Let's generate the Leads.</h1>
          </div>
          <div className={lead.lastrow}>
            <button className={lead.leadsbtn}>
              <NavLink to="/contact" className="nav-link">Contact us</NavLink>
            </button>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-7">
          <form action="">
            <input
              type="text"
              placeholder="Name"
              className="contact-input input"
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              className="contact-input input"
            />
            <br />
            <textarea
              name="textbox"
              id=""
              cols=""
              rows="5"
              placeholder="Message"
              className="textarea1 contact-input"
            ></textarea>
             <br />
    <button type="submit" className="submit-button" style={{scrollPaddingBottom:'10px'}}>
      Submit
    </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Leads;