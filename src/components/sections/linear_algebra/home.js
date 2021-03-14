import React from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { Grid } from "@agney/react-loading";
import readme from "./README.md";
import ReadmeRenderer from "../../core/renderers/ReadmeRenderer/readmeRenderer";
import Constants from "../../../constants/constants";

const axios = require("axios");

export default function LinearAlgebraTab (){
  
  
    return (
      <div>
        <Col
          style={{
            margin: "auto",

            backgroundColor: "white",
            borderRadius: 0,

            padding: 4,
          }}
        >
          <Card
            style={{
              margin: 8,
              height: "100%",
              paddingBottom: 10,
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
                  padding: 0,
                  margin: 0,
                }}
              >
                <Row style={{ padding: 0, margin: 0 }}>
                  <Card
                    className="textStyleCode"
                    style={{
                      width: "100%",
                      backgroundColor: Constants.PRIMARY,

                      // border: "none",
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
                        {Constants.LINEARALGEBRA}
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
                    textAlign: "start",
                  }}
                >
                  <ul>
                    {Constants.LALIST.map((l) => (
                      <li style={{ padding: 4, fontSize: 14, fontWeight: 500 }} key={l.key}>
                        <a href={Constants.HOST + "linear_algebra/" + l.key}>
                          {l.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Row>
              </Col>
            </Row>
            <Row style={{ padding: 10, margin: 0, textAlign: "left" }}>
              <ReadmeRenderer file={readme}></ReadmeRenderer>
            </Row>
          </Card>
        </Col>
      </div>
    );
  
}
