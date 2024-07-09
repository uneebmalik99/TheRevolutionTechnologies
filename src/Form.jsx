import React from "react";
import "./Form.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  return (
    <>
      <div className="container-fluid pb-md-5">
        <div className="row d-flex">
          <div className="heading">
            <h3 className="underlin">Let’s Get Started</h3>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <form action="">
                <select
                  name="pets"
                  className="form-control form-select mb-md-2"
                >
                  <option value="">How Can We Help You</option>
                </select>
                <input
                  className="form-control mb-md-2"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="form-control mb-md-2"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="form-control mb-md-2"
                  type="text"
                  placeholder="Organization"
                />
              </form>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <form action="">
                <textarea
                  name="textbox"
                  rows="4"
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
