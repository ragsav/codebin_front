import React from "react";
import logo from "../copy.png";
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
import Constants from "../constants/constants";
const MainNavBar = () => (
  <div
    style={{
      backgroundColor: Constants.TERTIARY,
      margin: "auto",

      // marginLeft:"5%",
      // marginRight:"5%",
      // backgroundColor: "white",
      borderRadius: 2,
      padding: 12,
      width: "1024px",
    }}
  >
    <Navbar
      sticky="top"
      style={{
        backgroundColor: Constants.MONOKAI,
        // justifyContent: "center",
        // margin: "10px auto",

        // // marginLeft:"5%",
        // // marginRight:"5%",
        // // backgroundColor: "white",
        borderRadius: 4,
        // width: "1024px",
      }}
    >
      <Row style={{ padding: 4, width: "100%", margin: 0 }}>
        <Col style={{ padding: 0, margin: 0 }}>
          <Navbar.Brand
            href="#home"
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
              href={Constants.HOST}
              style={{
                float: "right",
                color: Constants.TERTIARY,
                marginRight: 20,
              }}
            >
              Home
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Navbar>
  </div>
);

export default MainNavBar;
