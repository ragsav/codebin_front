import {
  Alert,
  Form,
  Button,
  Card,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import Constants from "../constants/constants";
import React from "react";

import aboutPath from "../about.md";
import Footer from "./footer";
import MarkdownView from "react-showdown";


export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = { terms: null };
  }
  componentWillMount() {
    fetch(aboutPath)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ terms: text });
      });
  }
  render() {
    return (
      <div style={{ width: "100%" }}>
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
              <Card style={{ padding: 0, margin: 0 }}>
                <Row
                  style={{
                    padding: "0%",
                    margin: "0%",
                  }}
                >
                  <Col
                    style={{
                      padding: 4,
                      margin: 0,
                    }}
                  >
                    <Row
                      style={{
                        padding: 0,
                        margin: 0,
                        marginTop: 5,
                        textAlign: "left",
                      }}
                    >
                      {/* <ReactMarkdown
                        plugins={[gfm]}
                        source={this.state.terms}
                      /> */}
                      <Col>
                        <MarkdownView
                          style={{ marginTop: 40 }}
                          markdown={this.state.terms}
                          options={{ tables: true, emoji: true }}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}
