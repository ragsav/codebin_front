import React from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";

import Footer from "./footer";

import Constants from "../constants/constants";

const axios = require("axios");

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();

    this.state = {};
  }

  componentWillUnmount() {}
  componentDidMount() {}

  render() {
    return (
      <div style={{}}>
        <Col
          style={{
            margin: "auto",
            backgroundColor: "white",
            borderRadius: 0,
            width: "1024px",
            padding: 4,
          }}
        >
          <Row
            style={{
              padding: 4,
              margin: "0% 0% 0% 0%",
            }}
          >
            <Col
              style={{
                padding: 4,
                margin: 0,
              }}
            >
              <Card
                style={{
                  height: "100%",
                }}
              >
                <Container fluid style={{ padding: 4, margin: 0 }}>
                  <Row style={{ padding: 0, margin: 0 }}>
                    <Card
                      className="textStyleCode"
                      style={{
                        width: "100%",
                        backgroundColor: Constants.PRIMARY,
                        borderRadius: 4,
                        padding: 4,
                        fontSize: "13px",
                        fontWeight: "500",
                        color: Constants.SECONDARY,
                        margin: 4,
                      }}
                    >
                      <Row style={{ padding: 0, margin: 0 }}>
                        <Col
                          style={{ padding: 4, margin: 0, textAlign: "start" }}
                        >
                          {Constants.HOME}
                        </Col>
                      </Row>
                    </Card>
                  </Row>
                  <Row style={{ padding: 0, margin: 0, marginTop: 20 }}>
                    <Col style={{ padding: 0, margin: 0, textAlign: "start" }}>
                      <ul>
                        <li key={"lg"} style={{ padding: 4, fontSize: 16 }}>
                          <a href={Constants.HOST + "link_generator"}>
                            <strong>LINK GENERATION</strong>
                          </a>
                          <ul>
                            <li style={{ padding: 4, fontSize: 12 }}>
                              Anonymously generate short lived links for your
                              code or text
                            </li>
                          </ul>
                        </li>
                        <li key={"ed"} style={{ padding: 4, fontSize: 16 }}>
                          <a href={Constants.HOST + "encrypt_decrypt"}>
                            <strong>ENCRYPT / DECRYPT</strong>
                          </a>
                          <ul>
                            <li style={{ padding: 4, fontSize: 12 }}>
                              Encrypt/Decrypt any file or text with no server
                              side uploading
                            </li>
                          </ul>
                        </li>
                        <li key={"nt"} style={{ padding: 4, fontSize: 16 }}>
                          <a href={Constants.HOST + "nt"}>
                            <strong>
                              NUMBER THEORY (Step by step answer){" "}
                              <span style={{ color: "red" }}>
                                (More coming soon)
                              </span>
                            </strong>
                          </a>
                          <ul>
                            {Constants.NTLIST.map((l, x) => (
                              <li
                                key={x}
                                style={{
                                  padding: 4,
                                  fontSize: 14,
                                  fontWeight: 500,
                                }}
                              >
                                <a href={Constants.HOST + "nt/" + l.key}>
                                  {l.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li key={"la"} style={{ padding: 4, fontSize: 16 }}>
                          <a href={Constants.HOST + "linear_algebra"}>
                            <strong>
                              LINEAR ALGEBRA (Step by step answer)
                              <span style={{ color: "red" }}>
                                (More coming soon)
                              </span>
                            </strong>
                          </a>
                          <ul>
                            {Constants.LALIST.map((l, x) => (
                              <li
                                key={x}
                                style={{
                                  padding: 4,
                                  fontSize: 14,
                                  fontWeight: 500,
                                }}
                              >
                                <a
                                  href={
                                    Constants.HOST + "linear_algebra/" + l.key
                                  }
                                >
                                  {l.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                          {/* <ul>
                            {Constants.NTLIST.map((l) => (
                              <li style={{ padding: 4, fontSize: 12 }}>
                                <a href="">{l.name}</a>
                              </li>
                            ))}
                          </ul> */}
                        </li>
                        <li key={"ds"} style={{ padding: 4, fontSize: 16 }}>
                          <a href="">
                            <strong>
                              DATA STRUCTURES{" "}
                              <span style={{ color: "red" }}>
                                (Coming soon)
                              </span>
                            </strong>
                          </a>
                          {/* <ul>
                            {Constants.NTLIST.map((l) => (
                              <li style={{ padding: 4, fontSize: 12 }}>
                                <a href="">{l.name}</a>
                              </li>
                            ))}
                          </ul> */}
                        </li>
                        <li key={"ag"} style={{ padding: 4, fontSize: 16 }}>
                          <a href="">
                            <strong>
                              ALGORITHMS{" "}
                              <span style={{ color: "red" }}>
                                (Coming soon)
                              </span>
                            </strong>{" "}
                          </a>
                          {/* <ul>
                            {Constants.NTLIST.map((l) => (
                              <li style={{ padding: 4, fontSize: 12 }}>
                                <a href="">{l.name}</a>
                              </li>
                            ))}
                          </ul> */}
                        </li>
                        <li key={"cg"} style={{ padding: 4, fontSize: 16 }}>
                          <a href="">
                            <strong>
                              CRYPTOGRAPHY (Step by step answer){" "}
                              <span style={{ color: "red" }}>
                                (Coming soon)
                              </span>
                            </strong>
                          </a>
                          {/* <ul>
                            {Constants.NTLIST.map((l) => (
                              <li style={{ padding: 4, fontSize: 12 }}>
                                <a href="">{l.name}</a>
                              </li>
                            ))}
                          </ul> */}
                        </li>
                        <li key={" "} style={{ padding: 4, fontSize: 16 }}>
                          <a href="https://drive.google.com/drive/u/0/folders/1hUoc1g2cxJDXdBij_t3ojCWQoQzWJbpD">
                            <strong>
                              STUDY MATERIAL{" "}
                              <span style={{ color: "red" }}>
                                
                              </span>
                            </strong>
                          </a>
                          {/* <ul>
                            {Constants.NTLIST.map((l) => (
                              <li style={{ padding: 4, fontSize: 12 }}>
                                <a href="">{l.name}</a>
                              </li>
                            ))}
                          </ul> */}
                        </li>
                      </ul>
                    </Col>
                  </Row>
                  <Row style={{ padding: 0, margin: 0, marginTop: 20 }}>
                    <Card
                      className="textStyleCode"
                      style={{
                        width: "100%",
                        backgroundColor: Constants.PRIMARY,
                        borderRadius: 4,
                        padding: 4,
                        fontSize: "13px",
                        fontWeight: "500",
                        color: Constants.SECONDARY,
                        margin: 4,
                      }}
                    >
                      <Row style={{ padding: 0, margin: 0 }}>
                        <Col
                          style={{ padding: 4, margin: 0, textAlign: "start" }}
                        >
                          {Constants.ABOUT}
                        </Col>
                      </Row>
                    </Card>
                  </Row>
                  <Row
                    style={{
                      padding: 0,
                      margin: 0,
                      marginTop: 20,
                      textAlign: "start",
                    }}
                  >
                    <ul>
                      <li style={{ padding: 4, fontSize: 16 }}>
                        <strong>DESCRIPTION</strong>

                        <ul>
                          <li>
                            <a
                              href=""
                              style={{
                                textDecoration: "none",
                                fontWeight: 500,
                              }}
                            >
                              {Constants.WEBSITE}
                            </a>{" "}
                            is a non-profit educational website.
                          </li>
                        </ul>
                      </li>
                      <li style={{ padding: 4, fontSize: 16 }}>
                        <strong>CREDITS</strong>
                      </li>
                      <li style={{ padding: 4, fontSize: 16 }}>
                        <a
                          href="https://github.com/ragsav/copybin_front"
                          target="_blank"
                        >
                          <strong>SOURCE</strong>
                        </a>
                      </li>
                    </ul>
                  </Row>
                </Container>
              </Card>
            </Col>
          </Row>

          <Row
            style={{
              padding: 4,
              margin: 0,
            }}
          >
            <Col
              style={{
                padding: 4,
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
