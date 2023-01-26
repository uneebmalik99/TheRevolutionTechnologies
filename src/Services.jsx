import react from 'react'
import service from './Services.module.css'
const Services = () => {


    return (
        <>
            <div className={service.contservice}>
                <div className={`row ${service.firstrow}`}>
                    <h2>Services we Offer</h2>
                </div>

                <div className={`row ${service.outerrow}`} >
                    <div className="col col-sm-12 col-md-12 col-lg-6 col-xs-6">
                        <h3>Countries Worldwide</h3>
                        <p>To succeed, every software solution must be deeply integrated into the existing tech environment..</p>

                    </div>
                    <div className="col col-sm-12 col-md-12 col-lg-3 col-xs-3">
                        <div className={`card ${service.cards}`}>
                            <div className="image">
                                <img src="images/frame1.png" alt="frame img" srcset="" />
                              
                            </div>
                            <p>UI/UX & Graphic  Design</p>

                        </div>

                    </div>

                    <div className="col col-sm-12 col-md-12 col-lg-3 col-xs-3">
                        <div className={`card ${service.cards}`}>
                            <div className="image">
                                <img src="images/frame1.png" alt="frame img" srcset="" />
                               
                            </div>
                            <p>Block Chain</p>

                        </div>

                    </div>

                </div>

                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-3 col-xs-3">
                        <div className={`card ${service.cards}`}>
                            <div className="image">
                                <img src="images/frame1.png" alt="frame img" srcset="" />
                              
                            </div>
                            <p>Pay per call</p>
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-12 col-lg-3 col-xs-3">
                        <div className={`card ${service.cards}`}>
                            <div className="image">
                                <img src="images/frame1.png" alt="frame img" srcset="" />
                                
                            </div>
                            <p>Pay per Acquisiton</p>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-12 col-lg-3 col-xs-3">
                        <div className={`card ${service.cards}`}>
                            <div className="image">
                                <img src="images/frame1.png" alt="frame img" srcset="" />
                             
                            </div>
                            <p>Web Developmen</p>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-12 col-lg-3 col-xs-3">
                        <div className={`card ${service.cards}`}>
                            <div className="image">
                                <img src="images/frame1.png" alt="frame img" srcset="" />
                               
                            </div>
                            <p>App Development</p>
                        </div>
                    </div>


                </div>


            </div>
        </>
    )


}


export default Services;