import React from "react";
import logo from "../copy.png";
import { Alert, Form, Button, Card, Row, Col, Navbar } from "react-bootstrap";

const MainNavBar = () => (
  <div>
    <Navbar sticky="top" style={{ backgroundColor: "#272822" }}>
      <div style={{ paddingLeft: "10%" }}>
        <Navbar.Brand href="#home" style={{ color: "white", fontSize: "20px" }}>
          <div
            style={{ color: "#04e000", fontSize: "20px" }}
            className="textStyleCode"
          >
            Code>Bin
          </div>
          <div
            style={{ color: "white", fontSize: "15px" }}
            className="textStyleBarcode"
          >
            Code>Bin
          </div>
        </Navbar.Brand>
      </div>
    </Navbar>
  </div>
);

export default MainNavBar;
