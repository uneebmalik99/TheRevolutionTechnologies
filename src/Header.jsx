import react from 'react'
import head from './header.module.css'

const Header=()=>{
    return(
        <>
        
     <div className="row">
        <div className="col col-sm-12 col-md-6 col-lg-6 col-xs-12">
          <div className={head.logo}>
            <img src="images/logo12.png" alt="company logo" srcset="" />
          </div>
        </div>

        <div className="col col-sm-12 col-md-6 col-lg-6 col-xs-12">

            
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Home</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Careers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact us</a>
        </li>

      
       
      </ul>
    </div>
  </div>
</nav>

        </div>
     </div>

     <div className={`container-fluid ${head.containerhead}`}>

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
     <div className={`container-fluid ${head.contibm}`}>
      <div className="row">
        <div className="col"><img src="images/ibm.png" alt="pic" /></div>
        <div className="col"><img src="images/ibm2.png" alt="pic" /></div>
        <div className="col"><img src="images/ibm3.png" alt="pic" /></div>
        <div className="col"><img src="images/ibm4.png" alt="pic" /></div>
        <div className="col"><img src="images/ibm5.png" alt="pic" /></div>
       
      </div>
     </div>
        
        
        </>

    )
    
}

export default Header;