import React from 'react'
import service from './Services.module.css'
const Services = () => {


    return (
        <>
            <div className={service.contservice}>
                <div className={`container-fluid ${service.serinnercount}`}>
                    <div className={`row ${service.firstrow}`}>
                        <h2 className={service.sercount1h2}>Services we Offer</h2>
                    </div>

                    <div className={`row ${service.outerrow}`} >
                        <div className="col-sm-12 col-md-12 col-lg-6 ">
                            <h3 className={service.serh3}>Countries Worldwide</h3>
                            <p className={service.serp1}>To succeed, every software solution must be deeply integrated into the existing tech environment..</p>

                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-3 ">
                            <div className={`card ${service.sercard1}`} >
                                <div className="image">
                                    <img src="images/ser1.png" alt="frame img" srcset="" className={service.serimag} />
                                </div>
                                <div className={service.serpdiv}> <p className={service.sercount1p1} >UI/UX & Graphic  Design</p></div>
                               
                            </div>
                        </div>
                         
                        <div className="col-sm-12 col-md-12 col-lg-3 ">
                            <div className={`card ${service.sercard1}`} >
                                <div className="image">
                                    <img src="images/ser333.png" alt="frame img" srcset="" className={service.serimag} />
                                </div>
                                <p className={service.sercount1p1} >Block Chain</p>
                            </div>
                        </div>
                       


                    </div>
                    <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-3 ">
                            <div className={`card ${service.sercard1}`} >
                                <div className="image">
                                    <img src="images/ser33.png" alt="frame img" srcset="" className={service.serimag} />
                                </div>
                                <p className={service.sercount1p1} >Pay per call</p>
                            </div>
                        </div>
                       
                        <div className="col-sm-12 col-md-12 col-lg-3 ">
                            <div className={`card ${service.sercard1}`} >
                                <div className="image">
                                    <img src="images/ser4.png" alt="frame img" srcset="" className={service.serimag} />
                                </div>
                                <p className={service.sercount1p1} >Pay per Acquisiton</p>
                            </div>
                        </div>
                       
                        <div className="col-sm-12 col-md-12 col-lg-3 ">
                            <div className={`card ${service.sercard1}`} >
                                <div className="image">
                                    <img src="images/ser55.png" alt="frame img" srcset="" className={service.serimag} />
                                </div>
                                <p className={service.sercount1p1} >Web Development</p>
                            </div>
                        </div>
                       
                        <div className="col-sm-12 col-md-12 col-lg-3 ">
                            <div className={`card ${service.sercard1}`} >
                                <div className="image">
                                    <img src="images/ser6.png" alt="frame img" srcset="" className={service.serimag} />
                                </div>
                                <p className={service.sercount1p1} >App Development</p>
                            </div>
                        </div>
                       

                    </div>

                </div>
            </div>
        </>
    )


}


export default Services;