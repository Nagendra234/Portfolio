import React, { useState, useEffect } from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Container from "react-bootstrap/Container";
import TimeLine from "./components/projects-timeline/Project";
import Experience from "./pages/experience/Experience";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ContactForm from "./pages/contact-form/Contact";
import { Parallax } from "react-parallax";
import Particles from "react-particles-js";
// import { particlesOptions } from "./particlesOptions";
import FooterPanel from "./components/footer/footer.component";
import {BrowserRouter} from 'react-router-dom'

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <MyTitleMessage />

      <div id="about">
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div id="skills">
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>
      </div>
      <div id="experience">
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      <div id="projects">
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <TimeLine />
          </Slide>
        </Container>
      </div>
      <div id="contact">
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <ContactForm />
          </Fade>
        </Container>
      </div>
      <hr />
      <FooterPanel />
    </div>
    </BrowserRouter>
  );
};

export default App;
