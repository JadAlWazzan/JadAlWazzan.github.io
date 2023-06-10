import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch(
        "https://formsubmit.co/b00458287eb8a9b5c129ac34c69a3248",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        setSubmitted(true);
        event.target.reset();
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (submitted) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }
  }, [submitted]);

  return (
    <div>
      <Container fluid className="resume-section">
        <h1 className="resume-section-title text-center mb-4">
          Contact Me Form
        </h1>

        <Row className="resume">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <form id="contactForm" onSubmit={handleSubmit}>
                    {/* HoneyPot */}
                    <input
                      type="text"
                      name="_honey"
                      style={{ display: "none" }}
                    />
                    <input
                      type="hidden"
                      name="_next"
                      value="Sucess. Message sent!"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="fields">
                      <div className="field">
                        <label htmlFor="name">Name: </label>
                        <br />
                        <input
                          className="border-2 rounded-lg"
                          type="text"
                          name="name"
                          id="name"
                          required
                        />
                      </div>
                      <br />
                      <div className="field">
                        <label htmlFor="phoneNumber">Phone Number: </label>
                        <br />
                        <input
                          className="border-2 rounded-lg"
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                        />
                      </div>
                      <br />
                      <div className="field">
                        <label htmlFor="email">Email: </label>
                        <br />
                        <input
                          className="border-2 rounded-lg"
                          type="email"
                          name="email"
                          id="email"
                          required
                        />
                      </div>
                      <br />
                      <div className="field">
                        <label htmlFor="message">Message: </label>
                        <br />
                        <textarea
                          className="border-2 rounded-lg"
                          name="message"
                          id="message"
                          rows="7"
                          cols={50}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <br />
                    <div>
                      {showSuccessMessage && <div>Success. Message sent!</div>}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            type="submit"
            form="contactForm"
            style={{ maxWidth: "250px" }}
          >
            Submit
          </Button>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />

      </Container>
      <Particle />
    </div>
  );
}

export default Contact;
