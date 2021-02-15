import React from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { Grid } from "@agney/react-loading";
import Constants from "../constants/constants";
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
    name: "Euler Criterion",
    key: "euler_criterion",
  },
  {
    name: "Euler Psuedoprime",
    key: "euler_psuedoprime",
  },
  {
    name: "Jacobi-Euler Psuedoprime",
    key: "jacobi_euler_psuedoprime",
  },
  {
    name: "Fermat's little theorum",
    key: "fermat_little_theorum",
  },
  {
    name: "Fermats mod",
    key: "fermat_mod",
  },
  {
    name: "Fermat's Psuedoprime",
    key: "fermat_psuedoprime",
  },
  {
    name: "Euler's Totient",
    key: "euler_totient",
  },
  {
    name: "Euler Fermat Theorum",
    key: "euler_fermat_theorum",
  },
  {
    name: "Pollard Rho",
    key: "pollard_rho",
  },
  {
    name: "Fermat's Factorization",
    key: "fermat_factorization",
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
            margin: "10px auto",

            // marginLeft:"5%",
            // marginRight:"5%",
            backgroundColor: "white",
            borderRadius: 0,
            width: "1024px",
            padding: 4,
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
                      {Constants.NUMBERTHEORY}
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
                      padding: 0,
                      paddingTop:       4,
                      paddingBottom:4,
                      margin: 0,
                    }}
                    xs={{ span: 12 }}
                    sm={{ span: 6 }}
                    md={{ span: 4 }}
                    lg={{ span: 4 }}
                    xl={{ span: 3 }}
                  >
                    <Card
                      style={{
                        height: "100%",
                        padding: 4,
                        margin: 4,
                        backgroundColor: "#51b82a",
                      }}
                    >
                      <a
                        href={Constants.HOST + "nt/" + co.key}
                        target="_blank"
                        // className="textStyleCode"
                        style={{
                          textDecoration: "none",
                          color: "white",
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
