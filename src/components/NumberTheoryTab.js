import React from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { Grid } from "@agney/react-loading";

import Footer from "./footer";

const axios = require("axios");
const companyList = [
  {
    name: "Prime factors",
    key: "prime_factors",
  },
  {
    name: "Exponential Mod",
    key: "exponential_mod",
  },

  {
    name: "Jacobi Symbol",
    key: "jacobi_symbol",
  },
  {
    name: "Euler Psuedoprime",
    key: "euler_psuedoprime",
  },
  {
    name: "Jacobi-Euler Psuedoprime",
    key: "jacobi_euler_psuedoprime",
  },
];
export default class NumberThoeryTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {}

  componentWillUnmount() {}

  handleSubmit = (event) => {
    var self = this;
    event.preventDefault();
  };

  hasError(key) {
    return this.state.errors.indexOf(key) !== -1;
  }
  render() {
    return (
      <div>
        <Col
          style={{
            // maxWidth:"100%",
            // left:"50px",
            // right:"50px",
            // padding: "30px",
            margin: "auto",

            // marginLeft:"5%",
            // marginRight:"5%",
            backgroundColor: "white",
            borderRadius: 0,
            maxWidth: "80%",
            minWidth: "450px",
            padding: 0,
            // margin: 0,
          }}
        >
          <Row
            style={{
              padding: "2% 0% 2% 0%",
              margin: "0% 0% 0% 0%",
            }}
          >
            <Col
              style={{
                padding: 4,
                margin: 0,
              }}
            >
              <Row style={{ padding: 0, margin: 0 }}>
                <Card
                  className="textStyleCode"
                  style={{
                    width: "100%",
                    backgroundColor: "#272822",

                    border: "none",
                    borderRadius: 4,
                    padding: "1%",
                    fontSize: "13px",
                    fontWeight: "500",
                    color: "#04e000",
                    margin: 4,
                  }}
                >
                  <Row style={{ padding: 0, margin: 0 }}>
                    <Col style={{ padding: 0, margin: 0, textAlign: "start" }}>
                      Number>Theory
                    </Col>
                  </Row>
                </Card>
              </Row>
              <Row
                gutter={40}
                style={{
                  padding: 0,
                  margin: 0,
                  marginTop: 5,
                }}
              >
                {companyList.map((co) => (
                  <Col
                    style={{
                      padding: 4,
                      margin: 0,
                    }}
                    xs={{ span: 6 }}
                    sm={{ span: 6 }}
                    md={{ span: 4 }}
                    lg={{ span: 3 }}
                    xl={{ span: 2 }}
                  >
                    <Card
                      style={{
                        height: "100%",
                        padding: 4,
                        margin: 4,
                        backgroundColor: "rgb( 211, 229, 242)",
                      }}
                    >
                      <a
                        href={`http://localhost:3000/nt/${co.key}`}
                        target="_blank"
                        // className="textStyleCode"
                        style={{
                          textDecoration: "none",
                          color: "#272822",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        {" "}
                        {co.name}
                      </a>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          <Row
            style={{
              padding: 0,
              margin: 0,
            }}
          >
            <Col
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              <Footer></Footer>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}
