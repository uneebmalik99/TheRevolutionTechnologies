import react from 'react'
import head from './header.module.css'

const Header=()=>{
    return(
        <>
        
     

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
     <div className={`container-fluid ${head.contibm } `}>
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