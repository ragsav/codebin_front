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
        <Navbar.Brand href="#home" style={{ fontSize: "20px", float: "left" }}>
          <div
            style={{ color: Constants.SECONDARY, fontSize: "20px" }}
            className="textStyleCode"
          >
            {Constants.WEBSITE}
          </div>
          {/* <div
            style={{ color: "white", fontSize: "15px" }}
            className="textStyleBarcode"
          >
            {Constants.WEBSITE}
          </div> */}
        </Navbar.Brand>
        {/* <Row style={{ padding: 4, width: "100%", margin: 0 }}>
          <Col style={{ padding: 0 }}>
            <a
              className="textStyleCode"
              href={Constants.HOST + "nt"}
              style={{
                textDecoration: "none",

                fontSize: 12,
                color: Constants.SECONDARY,

                fontWeight: "400",
              }}
            >
              {Constants.NUMBERTHEORY}
            </a>
          </Col>
        </Row>
        <Row style={{ padding: 4, width: "100%", margin: 0 }}>
          <Col style={{ padding: 0 }}>
            <a
              className="textStyleCode"
              href={Constants.HOST + "encrypt_decrypt"}
              style={{
                textDecoration: "none",

                fontSize: 12,
                color: Constants.SECONDARY,

                fontWeight: "400",
              }}
            >
              {Constants.ENCRYPTDECRYPTHEADING}
            </a>
          </Col>
        </Row> */}
      </div>
    </Navbar>
  </div>
);

export default MainNavBar;
