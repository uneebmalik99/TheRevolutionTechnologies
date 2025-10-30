import React from "react";
import "./Form.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  return (
    <>
      <div className="container-fluid pb-md-5 bg-transparent ">
        <div className="row d-flex">
          <div className="heading">
            <h3 className="underlin">Let’s Get Started</h3>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <form action="" className="form">
                <select
                  name="pets"
                  className="form-control form-select mb-md-2 howhelpu"
                >
                  <option value="" disable-selected>
                    How Can We Help You
                  </option>
                  <option value="consulting">Consulting</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
                <input
                  className="form-control mb-md-2 howhelpu"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="form-control mb-md-2 howhelpu"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="form-control mb-md-2 howhelpu"
                  type="text"
                  placeholder="Organization"
                />
              </form>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <form action="">
                <textarea
                  name="textbox"
                  rows="7"
                  placeholder="Message"
                  className="form-control"
                ></textarea>
                <button className="msg">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
