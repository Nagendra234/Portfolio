import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Logo from "../../assets/icons/logow.webp";
import {HashLink as Link} from 'react-router-hash-link'
import "./my-navbar.styles.css";

const Transition = styled.div`
height:55px;
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
  a{
    color:white;
    padding:5px;
    text-decoration:none;
  }
`;

const MyNavbar = () => {

  return (
    <Transition>
      <Navbar
        fixed="top"
        variant="dark"
        style={{height:'60px', justifyContent:'space-between', alignItems:'center', background:'rgba(0,0,0,0.45)'}}
      >
        <div>
          <Navbar.Brand href="#home">
            Nagendra
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Link smooth to="#">Home</Link>
              <Link smooth to="#about">About</Link>
              <Link smooth to="#skills">Skills</Link>
              <Link smooth to="#experience">Experience</Link>
              <Link smooth to="#projects">Projects</Link>
              <Link smooth to="#contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </Transition>
  );
};

export default MyNavbar;
