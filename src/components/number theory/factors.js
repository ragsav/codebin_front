import React from "react";
import { Grid } from "@agney/react-loading";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Terminal from "./terminal";
import { factor } from "../../helpers/algorithms";
var res_string = [];

export default function PrimeFactors() {
  const [error, setError] = useState([]);

  const [text, setText] = useState([]);
  const [a, setA] = useState(0);

  //   const [exponent, setExponent] = useState(0);

  return (
    <div>
      <Col
        style={{
          padding: 0,
          margin: "auto",
          width: "600px",
          float: "center",
          backgroundColor: "white",
        }}
      >
        <Row style={{ padding: 0, margin: 0 }}>
          <Col style={{ padding: 4, margin: 0 }}>
            <Form style={{ width: "100%" }}>
              <div style={{ padding: 4 }}></div>
              <Row style={{ padding: 4, width: "100%", margin: 0 }}>
                <Col style={{ padding: 0, margin: 0 }}>
                  <Card
                    className="textStyleCode"
                    style={{
                      fontSize: "small",
                      color: "#04e000",
                      padding: 4,
                      backgroundColor: "#272822",
                      border: "1px solid #272822",
                    }}
                  >
                    {" "}
                    Factors
                  </Card>
                </Col>
              </Row>

              <Row style={{ padding: 4, width: "100%", margin: 0 }}>
                <Col style={{ padding: 0, margin: 0 }}>
                  <Form.Control
                    type="text"
                    placeholder="A"
                    style={{
                      fontSize: "small",
                      color: "#272822",
                      backgroundColor: "white",
                      border: "1px solid #272822",
                    }}
                    //   onChange={onTitleChanged}
                    onChange={(v) => {
                      setA(v.target.value);
                    }}
                  />
                </Col>
              </Row>

              <Row style={{ padding: 4, width: "100%", margin: 0 }}>
                <Col style={{ padding: 0, margin: 0 }}>
                  <Button
                    variant="success"
                    type="submit"
                    className="mr-1"
                    style={{
                      width: "100%",
                      fontSize: "12px",
                      float: "left",
                      border: "none",
                      fontWeight: "500",
                      color: "#04e000",
                      // boxShadow: "1px 3px 1px #9E9E9E",
                      backgroundColor: "#272822",
                    }}
                    onClick={(e) => {
                      e.preventDefault();

                      factor(a, res_string);
                      setText(res_string);
                      res_string = [];
                      //   console.log(text);
                    }}
                  >
                    <Row>
                      <Col className="textStyleCode">Calculate</Col>
                    </Row>
                  </Button>
                </Col>
              </Row>
              <Row style={{ padding: 4, width: "100%", margin: 0 }}>
                <Col style={{ padding: 0, margin: 0 }}>
                  <Terminal text={text} height="350px"></Terminal>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row></Row>
      </Col>
    </div>
  );
}
