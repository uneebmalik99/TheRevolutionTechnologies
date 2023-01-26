import react from 'react'
import lead from "./Leads.module.css";

const Leads = () => {
    

    return (
        <div className={`container-fluid ${lead.leadcountainer} ${lead.bg} `}   >
            <div className={`row  `}  >
              
             
                


                 <div className={`container-fluid ${lead.cont2}`}>

                    <div className="row">
                       

                        <div className="col col-sm-12 col-md-5 col-lg-5">
                            <div className={lead.firstrow}>
                                <p className={lead.leadsinfo1}>We Carry More Than Just Good Coding Skills</p>
                            </div>
                            <div className={lead.secondrow} >
                                <h1 className={lead.leadsinfo2}>Let's generate the Leads.</h1>
                            </div>
                            <div className={lead.lastrow}   >
                                
                                <button className={lead.btn}> Contact Us</button>
                            </div>
                        </div>

                        <div className="col col-sm-12 col-md-7 col-lg-7">
                            <img src="images/leadpic.png" alt=" image" className={lead.imag} srcset="" />
                        </div>
                    </div>



                </div>  


                </div>

            </div>

        // </div>

    );






}
export default Leads;