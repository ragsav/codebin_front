import React from "react";

import {
  Alert,
  Form,
  Button,
  Card,
  Row,
  Col,
  Navbar,
  Nav,
  FormControl,
} from "react-bootstrap";
import Constants from "../../constants/constants";
const MainNavBar = () => (
  <div>
    <Col
      style={{
        backgroundColor: Constants.TERTIARY,
        margin: "auto",
        borderRadius: 0,
        padding: 12,
      }}
    >
      <Navbar
        sticky="top"
        style={{
          backgroundColor: Constants.MONOKAI,
          borderRadius: 4,
        }}
      >
        <Row style={{ padding: 4, width: "100%", margin: 0 }}>
          <Col style={{ padding: 0, margin: 0 }}>
            <Navbar.Brand
              href={Constants.HOST}
              style={{ fontSize: "20px", float: "left" }}
            >
              <div
                style={{ color: Constants.HEADING, fontSize: "20px" }}
                className="textStyleCode"
              >
                {Constants.WEBSITE}
              </div>
            </Navbar.Brand>
          </Col>
          <Col style={{ padding: 0, margin: 0 }}>
            <Nav style={{ float: "right" }}>
              <Nav.Link
                href={Constants.HOST + "about"}
                style={{
                  float: "right",
                  color: Constants.TERTIARY,
                  marginRight: 20,
                }}
              >
                About
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Navbar>
    </Col>
  </div>
);

export default MainNavBar;
