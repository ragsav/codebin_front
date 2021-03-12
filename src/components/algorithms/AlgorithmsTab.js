import React from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import Constants from "../../constants/constants";
import Footer from "../../components/footer";

const axios = require("axios");

export default class AlgorithmsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {}

  componentWillUnmount() {}

  handleSubmit = (event) => {
    var self = this;
    event.preventDefault();
  };

  hasError(key) {
    return this.state.errors.indexOf(key) !== -1;
  }
  render() {
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
                        {Constants.ALGORITHM}
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
                    {Constants.ALGLIST.map((l) => (
                      <li style={{ padding: 4, fontSize: 14, fontWeight: 500 }}>
                        <a href={Constants.HOST + "alg/" + l.key}>{l.name}</a>
                        {l.algorithms ? (
                          <ul>
                            {l.algorithms.map((a) => (
                              <li
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
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </div>
    );
  }
}