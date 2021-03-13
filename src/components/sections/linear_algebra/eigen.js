import React from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { Grid } from "@agney/react-loading";
import Constants from "../../../constants/constants";
import { useEffect, useState } from "react";
import { Matrix } from "./matrix_input";
import { mat_eigen } from "./la_algorithms";
import DisplayAnswer from "./answer_display";
// import Terminal from "../terminal";
const axios = require("axios");

var res_string = [];
export default function MatrixEigen() {
  const [error, setError] = useState([]);

  const [text, setText] = useState([]);
  const [data, setData] = useState([
    [1, 2],
    [3, 4],
  ]);

  useEffect(() => {
    // console.log(data);
  });
  return (
    <div>
      <Col
        style={{
          margin: "auto",
          backgroundColor: "white",
          borderRadius: 0,

          padding: 8,
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
                      padding: 0,
                      paddingRight: 16,
                      paddingLeft: 16,
                      margin: 0,
                      // width: "100%",

                      height: "100%",
                    }}
                  >
                    <Matrix
                      data={data}
                      width={300}
                      onDataChanged={setData}
                    ></Matrix>
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
                        Matrix Eigen vectors
                      </Card>

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
                              // console.log("before chnage");
                              // console.log(data);
                              // var copy_data = data.slice();
                              var copy_data = data.map(function (arr) {
                                return arr.slice();
                              });
                              mat_eigen(copy_data, res_string);
                              // console.log("after chnage");
                              // console.log(data);
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

        {text.length === 0 ? null : (
          <Row
            style={{
              padding: "0",
              margin: "0% 0% 0% 0%",
              marginTop: 40,
            }}
          >
            <Col
              style={{
                padding: 4,
                margin: 0,
              }}
            >
              <DisplayAnswer comp={text}></DisplayAnswer>
              {/* <Terminal text={text} height="1024px"></Terminal> */}
            </Col>
          </Row>
        )}
      </Col>
    </div>
  );
}
