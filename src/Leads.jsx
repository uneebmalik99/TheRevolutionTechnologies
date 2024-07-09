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
      </div>
    </div>
  );
};

export default Leads;
