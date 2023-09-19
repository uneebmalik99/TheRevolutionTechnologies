import React from "react";
import './Form.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Form = () => {

    return (
        <>


            <div className="container-fluid form-countainer">

                <div className="row row-1 d-flex">

                    <div className="heading">
                        <h3 className="underlin">Let’s Get Started</h3>
                    </div>

                </div>

            </div>

            <div className="container-fluid">
                <div className="row row-2 ">


                    <div className="  col-xs-12 col-sm-12 col-md-12 col-lg-6 ">

                        <form action="">


                            <select name="pets" className="sel-form" id="pet-select">
                                <option value="">How Can We Help You</option>
                                {/* <option value="">Dog</option>
                                <option value="">Cat</option> */}

                            </select>

                            <br></br>
                            <input type="text" placeholder="Name" /><br></br>
                            <input type="text" placeholder="Email" /><br></br>
                            <input type="text" placeholder="Organization" /><br></br>
                        </form>
                        <br></br>
                    </div>

                    <div className="   col-xs-12 col-sm-12 col-md-12 col-lg-6   ">
                        <form action="">
                            <textarea name="textbox" id="" cols="" rows="5" placeholder="Message" className="textarea1"></textarea>
                            {/* <input type="text" placeholder="Message" /> */}
                            

                        </form>

                    </div>


                </div>

            </div>

        </>
    )



}
export default Form;