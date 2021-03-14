import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Constants from "../../../constants/constants";
import readme from "./README.md";
import ReadmeRenderer from "../../core/renderers/ReadmeRenderer/readmeRenderer";
const axios = require("axios");

export default function NumberThoeryTab() {
  
  
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
                    <Row
                      style={{
                        padding: 0,

                        margin: 0,
                      }}
                    >
                      <Col
                        style={{ padding: 4, margin: 0, textAlign: "start" }}
                      >
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
                    textAlign: "start",
                  }}
                >
                  <ul>
                    {Constants.NTLIST.map((l) => (
                      <li style={{ padding: 4, fontSize: 14, fontWeight: 500 }} key={l.key}>
                        <a href={Constants.HOST + "nt/" + l.key}>{l.name}</a>
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
