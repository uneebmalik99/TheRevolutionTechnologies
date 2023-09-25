import react from 'react'
import head from './header.module.css'
import Static from "./Components/Static";
import Navbar from './Components/Navbar';

const Header = () => {
  return (
    <>


      <Static />
      
      <div className={`container-fluid ${head.containerhead}`}>
        {/* <Navbar/> */}
        <div className={`row ${head.headerrow}`}>
          <h1 className={head.heading1}>Exploring  </h1>
          <h1 className={head.heading2}>New Paths</h1>
          <p className={head.heading3}>Enterprise & small business cloud </p>
          <p className={head.heading3}>solution that exceed client expectations</p>
          <div className={`row ${head.btnrow}`}>
            <button className={head.btn}>LEARN MORE</button>
          </div>
        </div>
      </div>


<div className={`container-fluid ${head.contibm} `}>
<marquee behavior="" direction="right">
        <div className="row">
          <div className={`col-xs-12 col-sm-12 col-md-2 col-lg-3 ${head.rowibm}`}><img src="images/ibm.png" alt="pic" /></div>
          <div className={`col-xs-12 col-sm-12 col-md-2 col-lg-2 ${head.rowibm}`}><img src="images/ibm2.png" alt="pic" /></div>
          <div className={`col-xs-12 col-sm-12 col-md-2 col-lg-2 ${head.rowibm}`}><img src="images/ibm3.png" alt="pic" /></div>
          <div className={`col-xs-12 col-sm-12 col-md-2 col-lg-2 ${head.rowibm}`}><img src="images/ibm4.png" alt="pic" /></div>
          <div className={`col-xs-12 col-sm-12 col-md-2 col-lg-3 ${head.rowibm}`}><img src="images/ibm5.png" alt="pic" /></div>

        </div>
        </marquee>
      </div>

      


    </>

  )

}

export default Header;