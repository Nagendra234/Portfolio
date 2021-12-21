import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Buffer from './logo-black.png'
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
        <Container>
            <Card style={{backgroundColor:"rgba(0,0,0,0.1)"}}>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                    variant="top"
                    className="img-resize"
                  src={Buffer}
                  alt="Accenture logo"
                  color="red"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Software Developer
                  </Card.Title>
                </div>
                <div>
                  <div className="text-center text-light" >
                    <strong className="body-title-style ">
                      Frontend Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> React Js, Redux, HTML5, CSS, JavaScript,Bootstrap,Postman
                    <br />
                    <strong>Duration:</strong> Aug 2019 - Sept 2021
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed &amp; enhanced</strong> multiple
                        features with customizability option across web apps
                      </li>
                      <li>
                        <strong>Provided</strong> application maintenance while
                        working as `Production Support`.
                      </li>
                      <li>
                        <strong>Performed</strong> CRUD operations on multiple
                        databases to load/ remove data according to the business
                        requirements.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
        </Container>
    </div>
  );
};

export default Experience;
