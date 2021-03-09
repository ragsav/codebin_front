import React from "react";
import { Grid } from "@agney/react-loading";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Terminal from "./answer_display";
import { euler_criterion } from "./nt_algorithms";
import Constants from "../../constants/constants";
import Footer from "../footer";
var res_string = [];

export default function EulerCriterion() {
  const [error, setError] = useState([]);

  const [text, setText] = useState([]);
  const [a, setA] = useState(0);
  const [n, setN] = useState(0);
  //   const [exponent, setExponent] = useState(0);

  return (
    <div>
      <Col
        style={{
          margin: "auto",
          backgroundColor: "white",
          borderRadius: 0,

          padding: 8,
          // margin: 0,
        }}
      >
        <Row
          style={{
            padding: "0",
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
                  <Col
                    sm={9}
                    style={{
                      padding: 4,
                      margin: 0,
                      // width: "100%",

                      height: "100%",
                    }}
                  >
                    <Terminal text={text} height="440px"></Terminal>
                  </Col>
                  <Col
                    sm={3}
                    style={{
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    <Form style={{ width: "100%" }}>
                      <Card
                        className="textStyleCode"
                        style={{
                          margin: 4,
                          paddingTop: 8,
                          paddingBottom: 8,
                          borderRadius: 4,
                          backgroundColor: Constants.PRIMARY,
                          color: Constants.SECONDARY,
                          fontSize: 10,
                        }}
                      >
                        Euler Criterion
                      </Card>

                      <Row style={{ padding: 4, width: "100%", margin: 0 }}>
                        <Col style={{ padding: 0 }}>
                          <Form.Control
                            type="text"
                            placeholder="A"
                            style={{
                              fontSize: "small",
                              color: Constants.MONOKAI,
                              backgroundColor: "white",
                              border: `1px solid ${Constants.SECONDARY}`,
                            }}
                            onChange={(v) => {
                              setA(v.target.value);
                            }}
                          />
                        </Col>
                      </Row>
                      <Row style={{ padding: 4, width: "100%", margin: 0 }}>
                        <Col style={{ padding: 0 }}>
                          <Form.Control
                            type="text"
                            placeholder="N"
                            style={{
                              fontSize: "small",
                              color: Constants.MONOKAI,
                              backgroundColor: "white",
                              border: `1px solid ${Constants.SECONDARY}`,
                            }}
                            onChange={(v) => {
                              setN(v.target.value);
                            }}
                          />
                        </Col>
                      </Row>

                      <Row style={{ padding: 4, width: "100%", margin: 0 }}>
                        <Col style={{ padding: 0 }}>
                          <Button
                            variant="success"
                            type="submit"
                            className="mr-1"
                            style={{
                              width: "100%",
                              fontSize: "13px",
                              float: "left",
                              border: "none",
                              fontWeight: "500",
                              color: Constants.TERTIARY,
                              // boxShadow: "1px 3px 1px #9E9E9E",
                              backgroundColor: Constants.SECONDARY,
                            }}
                            onClick={(e) => {
                              e.preventDefault();

                              euler_criterion(a, n, res_string);
                              setText(res_string);
                              res_string = [];
                              //   console.log(text);
                            }}
                          >
                            {false ? (
                              <Row>
                                <Col>
                                  <Grid width="20" height="20" />
                                </Col>
                              </Row>
                            ) : (
                              <Row>
                                <Col className="textStyleCode">Calculate</Col>
                              </Row>
                            )}
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </Card>
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
