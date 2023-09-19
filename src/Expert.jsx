import React from 'react'
import './expert.css'
const Expert = () => {

    return (
        <>

            <div className="container-fluid expert-countf">
                <div className="row"><p className='expert-p1'> Why The Revolution Technologies Experts</p></div>

                

                <div className="container">
                    <div className="row row-btn">
                        <div className="col1-exp col-sm-12 col-md-2 col-lg-2">
                            <button className='btn'> values </button>
                        </div>

                        <div className="col2-exp col-sm-12 col-md-2 col-lg-2">
                            <button className='btn'> Technologies</button>
                        </div>

                        <div className="col3-exp col-sm-12 col-md-2 col-lg-2">
                            <button className='btn'> industries</button>

                        </div>



                    </div>

                </div>

                <div className="row"><p className='expert-p2'> We go the extra mile to ensure everyone feels safe, valued and motivated in the workspace</p></div>

                <div className="row rowlast">

                    <div className=" col-sm-12 col-md-2 col-lg-2">

                        <div className="card exp-card cardimg1 card-colr1 expertbox">
                            <div className="imgcir">
                                <img src="images/flexbility.png" className='cardimg' alt="flex img" />
                            </div>
                            <p className='pclr'>Flexbility</p>

                        </div>

                    </div>
                    <div className="  col-sm-12 col-md-2 col-lg-2">
                        <div className="card cardimg1 card-colr2 expertbox">
                            <div className="imgcir2">
                                <img src="images/exp2.png" className='cardimg2' alt="flex img" />
                            </div>
                            <p className='pclr'>EMPOWEMENT</p>

                        </div>


                    </div>
                    <div className=" col-sm-12 col-md-2 col-lg-2">
                    <div className="card cardimg1 card-colr2">
                            <div className="imgcir2">
                                <img src="images/exp3.png" className='cardimg2' alt="flex img" />
                            </div>
                            <p className='pclr'>INCLUSIVITY</p>

                        </div>
                      
                    </div>
                    <div className=" col-sm-12 col-md-2 col-lg-2">
                    <div className="card cardimg1 card-colr2">
                            <div className="imgcir2">
                                <img src="images/exp4.png" className='cardimg2' alt="flex img" />
                            </div>
                            <p className='pclr'>DISCIPLINE</p>

                        </div>
                       
                    </div>
                    <div className="  col-sm-12 col-md-2 col-lg-2">
                    <div className="card cardimg1 card-colr2">
                            <div className="imgcir2">
                                <img src="images/exp5.png" className='cardimg2' alt="flex img" />
                            </div>
                            <p className='pclr'>GROWYHMINDSET</p>

                        </div>
                      
                    </div>



                </div>
            </div>

        </>




    )





}
export default Expert;