import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Constants from "../constants/constants";





export default function Home(){
  
  

  
    return (
      <div style={{}}>
        <Col
          style={{
            margin: "auto",
            backgroundColor: "white",
            borderRadius: 0,
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
                        <li key={"nt"} style={{ padding: 4, fontSize: 16 }}>
                          <a href={Constants.HOST + "nt/"}>
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
                          <a href={Constants.HOST + "ds"}>
                            <strong>
                              DATA STRUCTURES{" "}
                              <span style={{ color: "red" }}>
                                (More coming soon)
                              </span>
                            </strong>
                          </a>
                          <ul>
                            {Constants.DSLIST.map((l, x) => (
                              <li
                                key={x}
                                style={{
                                  padding: 4,
                                  fontSize: 14,
                                  fontWeight: 500,
                                }}
                              >
                                <a href={Constants.HOST + "ds/" + l.key}>
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
                        <li key={"ag"} style={{ padding: 4, fontSize: 16 }}>
                          <a href={Constants.HOST + "alg"}>
                            <strong>
                              ALGORITHMS{" "}
                              <span style={{ color: "red" }}>
                                (More coming soon)
                              </span>
                            </strong>{" "}
                          </a>
                          <ul>
                            {Constants.ALGLIST.map((l) => (
                              <li
                                key={l.key}
                                style={{
                                  padding: 4,
                                  fontSize: 14,
                                  fontWeight: 500,
                                }}
                              >
                                <a href={Constants.HOST + "alg/" + l.key}>
                                  {l.name}
                                </a>
                                {l.algorithms ? (
                                  <ul>
                                    {l.algorithms.map((a) => (
                                      <li
                                        key={a.key}
                                        style={{
                                          padding: 4,
                                          fontSize: 14,
                                          fontWeight: 500,
                                        }}
                                      >
                                        <a
                                          href={
                                            Constants.HOST +
                                            "alg/" +
                                            l.key +
                                            "/" +
                                            a.key
                                          }
                                        >
                                          {a.name}
                                        </a>

                                        <ul></ul>
                                      </li>
                                    ))}
                                  </ul>
                                ) : null}
                                <ul></ul>
                              </li>
                            ))}
                          </ul>
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
                              <span style={{ color: "red" }}></span>
                            </strong>
                          </a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Col>
          </Row>
        </Col>
      </div>
    );
  
}
