import React from 'react'
import './Solution.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Solution = () => {

    return (
        <>


            <div className="container-fluid outer-count">
                <div className="row row-first">
                    <h2 className='row-sol'>SOLUTION</h2>
                </div>

                <div className="row row-sec">
                    <h2>End-to-End Experties</h2>
                </div>
                <div className="row row-para">
                    <p>We think big, design smart and develop fast for all screens, projects and
                        teams. Serving global leaders to entrepreneurs, we tailor our process
                        based on your scale and structure.</p>
                </div>



                <div className="container row-count">
                    <div className="row row-card ">


                        <div className=" col-sm-12 col-md-4 col-lg-4">
                            <div className="card card1">
                                <img src="./images/man.png" className='card-img' alt="faceook" srcset="" />
                                <p className='p-card '>BOOST YOUR BUSINESS</p>
                                <p className='p2-card '>Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Neque, facilis!</p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className=" card2">

                                <img src="./images/sol2.png" className='card-img' alt="faceook" srcset="" />
                                <p className='p-card'>BOOST YOUR BUSINESS</p>
                                <p className='p2-card'>Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Neque, facilis!</p>


                            </div>

                        </div>
                        <div className=" col-sm-12 col-md-4 col-lg-4">
                            <div className=" card2">

                                <img src="./images/sol3.png" className='card-img' alt="faceook" srcset="" />
                                <p className='p-card'>BOOST YOUR BUSINESS</p>
                                <p className='p2-card'>Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Neque, facilis!</p>


                            </div>
                        </div>



                    </div>


                </div>
            </div>

        </>


    );
}

export default Solution;
