import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import profile from './profile.png'

const About = () => {
  return (
    <div>
      <div className="about" >
        <h1 className="pt-3 text-center pb-3">ABOUT ME</h1>
        <Container style={{backgroundColor:"rgba(0,0,0,0.1)"}}>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2">
                <Image
                  className="profile justify-content-end"
                  src={profile}
                  alt="profile"
                  thumbnail
                  fluid
                  style={{height:'350px',backgroundColor:'transparent', border:'rgba(0,0,0,0.1) solid 1px'}}
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Muppalla Nagendra</strong>
                <br />A passionate programmer, born and brought up
                in Nellore, AP. I am a Front Developer with React.js, Redux Technologies and Basic Knoweldge in
                Express.js, Node.js and MongoDB.
                <br />
                In 2019, I successfully completed my Engineering with
                specialization in 'Mechanical Engineering'.
                <br />
                Working with the clients, my goal is always driven towards
                providing amazing experience with the best level of quality and
                service to them.
                <br />I love learning about new technologies, what problems are
                they solving and How can I use them to build better and scalable
                products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-danger">
                        Hire me
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
