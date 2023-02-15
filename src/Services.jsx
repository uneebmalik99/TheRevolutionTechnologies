import React from 'react'
import service from './Services.module.css'
const Services = () => {


    return (
        <>
            <div className={service.contservice}>
                <div className={`row ${service.firstrow}`}>
                    <h2>Services we Offer</h2>
                </div>

                <div className={`row ${service.outerrow}`} >
                    <div className="col-sm-12 col-md-12 col-lg-6 ">
                        <h3 className={service.serh3}>Countries Worldwide</h3>
                        <p className={service.serp1}>To succeed, every software solution must be deeply integrated into the existing tech environment..</p>

                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-3 ">
                        <div >
                            <div className="image">
                                <img src="images/ser1.png" alt="frame img" srcset="" className={service.serimag} />
                            </div>
                            <p>UI/UX & Graphic  Design</p>
                        </div>
                    </div>

                    <div className=" col-sm-12 col-md-12 col-lg-3 ">
                        <div>
                            <div className="image">
                                <img src="images/ser1.png" alt="frame img" srcset="" className={service.serimag} />

                            </div>
                            <p>Block Chain</p>

                        </div>

                    </div>

                </div>

                <div className={`row ${service.rowcards2}`}>
                    <div className=" col-sm-12 col-md-12 col-lg-3 ">
                        <div >
                            <div className="image">
                                <img src="images/ser1.png" alt="frame img" srcset="" className={service.serimag}  />

                            </div>
                            <p>Pay per call</p>
                        </div>
                    </div>

                    <div className=" col-sm-12 col-md-12 col-lg-3 ">
                        <div >
                            <div className="image">
                                <img src="images/ser1.png" alt="frame img" srcset="" className={service.serimag}  />

                            </div>
                            <p>Pay per Acquisiton</p>
                        </div>
                    </div>

                    <div className=" col-sm-12 col-md-12 col-lg-3 ">
                        <div >
                            <div className="image">
                                <img src="images/ser1.png" alt="frame img" srcset="" className={service.serimag} />

                            </div>
                            <p>Web Development</p>
                        </div>
                    </div>

                    <div className=" col-sm-12 col-md-12 col-lg-3 ">
                        <div >
                            <div className="image">
                                <img src="images/ser1.png" alt="frame img" srcset="" className={service.serimag} />

                            </div>
                            <p>Web Development</p>
                        </div>
                    </div>

                   


                </div>


            </div>
        </>
    )


}


export default Services;