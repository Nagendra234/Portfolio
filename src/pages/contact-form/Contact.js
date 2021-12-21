import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div>
      <h1 className="text-center font-details-b">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron" style={{backgroundColor:"transparent"}}>
      <h5 className="text-center" style={{position:'relative',bottom:'40px'}}>Send Me a Mail or Messege To <span className="text-success" style={{textDecoration:'underline'}}>Hire me</span></h5>
        <Row className="d-flex justify-content-center">
          <Col className="d-flex justify-content-center align-self-center flex-wrap">
            <div className="m-2">
              <a
                href="mailto:naginagendra234@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title="Send Me A Mail">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://twitter.com/Its_Me_Nagendra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-info" title="Tweets Are Welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://instagram.com/hey_wait_its_me_nagendra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-light  " title="Tweets Are Welcomed!">
                  <i className="fab fa-instagram"></i> Instagram
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://m.facebook.com/100010126924637"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="Say Hello On FB">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
