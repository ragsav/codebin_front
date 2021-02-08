import React from "react";
import logo from "../copy.png";
import { Alert, Form, Button, Card, Row, Col, Navbar } from "react-bootstrap";

const MainNavBar = () => (
  <div>
    <Navbar
      sticky="top"
      className="textStylePangolin"
      style={{ backgroundColor: "#363636" }}
    >
      <Navbar.Brand
        href="#home"
        style={{ marginLeft: "100px", color: "white" }}
      >
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-center m-1"
        />{" "}
        Copy bin
      </Navbar.Brand>
    </Navbar>
  </div>
);

export default MainNavBar;
