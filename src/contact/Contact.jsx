import "./Contact.css";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import Map from "../Components/Map";
import React, { useEffect, useState } from "react";
import { Form, Button, FormControl } from 'react-bootstrap';
import CallIcon from "@mui/icons-material/Call";

const Contact = ({ title }) => {
  useEffect(() => {
    document.title = `${title} - The Revolution Technologies`;
  }, [title]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation for email format (you can use a more robust regex)
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!formData.email.match(emailRegex)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Construct the email body
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    // Send the email (in a real-world scenario, you would use a server-side script to send the email)
    const subject = "Contact Form Submission";
    const mailtoLink = `info@therevolutiontechnologies.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open the user's default email client with the pre-populated email
    window.location.href = mailtoLink;

    // Set the form as submitted
    setIsSubmitted(true);

    // Clear the form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <div className="container-fluid" id="contact-maincontainer">
        <div className="container-fluid" id="contact-container">
          <div class="contact_heading">
            <h1>Contact Us</h1>
          </div>
        </div>
        {/* <div className="container-fluid" id="contact-container1"> */}
        <div
          className="container"
          id="contact-container2"
          style={{ borderRadius: "40px" }}
        >
          <div className="row  contact_row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h1 className="contact-color-black contact-align contact-mar ">
                Contact us
              </h1>
              <p className="contact-color-black contact-align contact-mar2 contact_text">
                Give us a call or drop by anytime,we endeavour to answer all
                enquiries within 24 hours on business days.We will be happy to
                answer your questions.
              </p>
              <p className="contact-color-black contact-align contact-mar3">
                <h5 className="contact-color-black contact-align contact-mar-b  ">
                  <LanguageIcon
                    fontSize="large"
                    style={{ color: "#ffcc39" }}
                    className="m-icon"
                  />
                  Our Address
                </h5>
                <span className="contact-span ">
                  <p class="contact-text">
                    Office no 12, Aries Tower Maryam Business Center, Murree Rd,
                    Shamsabad, Rawalpindi
                  </p>
                </span>
              </p>

              <p className="contact-color-black contact-align contact-mar3">
                <h5 className="contact-color-black contact-align contact-mar-b">
                  <EmailIcon
                    fontSize="large"
                    style={{ color: "#ffcc39" }}
                    className="m-icon"
                  />
                  Our Mails
                </h5>
                <span className="contact-span2">
                  <p class="contact-text">info@therevolutiontechnologies.com</p>
                </span>
              </p>
              <p className="contact-color-black contact-align contact-mar3">
                <h5 className="contact-color-black contact-align contact-mar-b">
                  {" "}
                  <CallIcon fontSize="large" style={{ color: "#ffcc39" }} />{" "}
                  Contact
                </h5>
                <span className="contact-span2">
                  <p class="contact-text">+92-331-7766-777</p>
                </span>
              </p>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6">
              <div id="contact-form">
                <h1 className="contact-color" id="contact-pad">
                  Ready to get Started?
                </h1>
                <p className="contact-color2">
                  Your Email Address will not be published.Required fields are
                  marked.
                </p>
                {isSubmitted ? (
                  <p className="contact-color2">
                    Thank you for your submission!
                  </p>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                      <FormControl
                        type="text"
                        placeholder="Name"
                        className="contact-input input"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                      <FormControl
                        type="email"
                        placeholder="Email"
                        className="contact-input input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                      <FormControl
                        as="textarea"
                        rows={5}
                        placeholder="Message"
                        className="textarea1 contact-input"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Button
                      style={{
                        color: "navy",
                        backgroundColor: "#BA8D06",
                        fontWeight: "bold",
                        paddingInline: "2%",
                        width: "24%",
                      }}
                      className="btn1"
                      type="submit"
                      id="sendButton"
                    >
                      Send Email
                    </Button>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="container-fluid" id="contact-container3">
        {/* <img src="../images/googlemap.png" alt="image" srcset="" className="contactimag2" /> */}
        <Map />
      </div>
    </>
  );
};
export default Contact;
