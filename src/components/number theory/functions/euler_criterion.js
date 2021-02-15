import React from "react";
import { Grid } from "@agney/react-loading";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Terminal from "./terminal";
import { euler_criterion } from "../algorithms/algorithms";
import Constants from "../../../constants/constants";
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
                      <div
                        className="textStyleCode"
                        style={{
                          margin: 4,
                          paddingTop: 8,
                          paddingBottom: 8,
                          borderRadius: 4,
                          backgroundColor: Constants.MONOKAI,
                          color: Constants.HEADINGCOLOR,
                          fontSize: 10,
                        }}
                      >
                        Euler Criterion
                      </div>

                      <Row style={{ padding: 4, width: "100%", margin: 0 }}>
                        <Col style={{ padding: 0 }}>
                          <Form.Control
                            type="text"
                            placeholder="A"
                            style={{
                              fontSize: "small",
                              color: "#272822",
                              backgroundColor: "white",
                              border: `1px solid ${Constants.CALCULATEBUTTONBG}`,
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
                              color: "#272822",
                              backgroundColor: "white",
                              border: `1px solid ${Constants.CALCULATEBUTTONBG}`,
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
                              color: Constants.CALCULATEBUTTONTEXTCOLOR,
                              // boxShadow: "1px 3px 1px #9E9E9E",
                              backgroundColor: Constants.CALCULATEBUTTONBG,
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

        {/* <Row
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
        </Row> */}
      </Col>
    </div>
  );
}
