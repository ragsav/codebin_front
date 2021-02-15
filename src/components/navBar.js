import React from "react";
import logo from "../copy.png";
import { Alert, Form, Button, Card, Row, Col, Navbar } from "react-bootstrap";
import Constants from "../constants/constants";
const MainNavBar = () => (
  <div>
    <Navbar
      sticky="top"
      style={{ backgroundColor: Constants.MONOKAI, justifyContent: "center" }}
    >
      <div style={{ width: "1024px", margin: "10px auto" }}>
        <Navbar.Brand
          href="#home"
          style={{ fontSize: "20px", float: "left" }}
        >
          <div
            style={{ color: Constants.HEADINGCOLOR, fontSize: "20px" }}
            className="textStyleCode"
          >
            {Constants.WEBSITE}
          </div>
          <div
            style={{ color: "white", fontSize: "15px" }}
            className="textStyleBarcode"
          >
            {Constants.WEBSITE}
          </div>
        </Navbar.Brand>
      </div>
    </Navbar>
  </div>
);

export default MainNavBar;
