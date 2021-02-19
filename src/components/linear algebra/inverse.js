import React from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { Grid } from "@agney/react-loading";
import Constants from "../../constants/constants";
import Footer from "../footer";
import { Matrix } from "./matrix_input";
import { mat_inv } from "./la_algorithms";
const axios = require("axios");
var res_string = [];
export default class MatrixInverse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Array.from(Array(3), () => new Array(3).fill(0)),
      answer: Array.from(Array(3), () => new Array(3).fill(0)),
      errors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDataChanged = this.onDataChanged.bind(this);
  }
  componentDidMount() {}

  componentWillUnmount() {}

  handleSubmit = (event) => {
    var self = this;
    event.preventDefault();
  };

  onDataChanged = (new_data) => {
    this.setState({
      data: new_data,
    });
    // console.log(new_data);
  };

  render() {
    return (
      <div>
        <Col
          style={{
            margin: "auto",
            backgroundColor: "white",
            borderRadius: 0,
            width: "1024px",
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
                        data={this.state.data}
                        width={300}
                        onDataChanged={this.onDataChanged}
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
                          Matrix Inverse
                        </Card>

                        {/* <Row style={{ padding: 4, width: "100%", margin: 0 }}>
                          <Col style={{ padding: 0 }}>
                            <Form.Control
                              type="text"
                              placeholder="Base"
                              style={{
                                fontSize: "small",
                                color: Constants.MONOKAI,
                                backgroundColor: "white",
                                border: `1px solid ${Constants.SECONDARY}`,
                              }}
                              onChange={(v) => {
                                // setA(v.target.value);
                              }}
                            />
                          </Col>
                        </Row> */}

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
                                if (
                                  this.state.data.length ===
                                  this.state.data[0].length
                                ) {
                                  this.setState({
                                    answer: mat_inv(this.state.data),
                                  });
                                  //   console.log(this.state.answer);
                                } else {
                                  alert("Matrix should be square");
                                }
                                // factor(a, res_string);
                                // setText(res_string);
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
              <Card
                style={{
                  height: "100%",
                }}
              >
                <Container fluid style={{ padding: 4, margin: 0 }}>
                  <Row style={{ padding: 0, margin: 0 }}>
                    <Col
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
                        data={this.state.answer}
                        width={300}
                        readonly
                      ></Matrix>
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
}
