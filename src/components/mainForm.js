import React from "react";
import { Alert, Form, Button, Card, Row, Col } from "react-bootstrap";
import { useLoading, Audio, SpinningCircles, Grid } from "@agney/react-loading";
const axios = require("axios");
const Loader = require("react-loader");
// import { FcSynchronize } from "react-icons/fc";
export default class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      title: "",
      password: "",
      burn: -1,
      expiry: 3600,
      isPassword: false,
      link: "",
      submitted: false,
      errors: [],
    };

    this.onCheckBoxClicked = this.onCheckBoxClicked.bind(this);
    this.onTitleChanged = this.onTitleChanged.bind(this);
    this.onTextChanged = this.onTextChanged.bind(this);
    this.onBurnChanged = this.onBurnChanged.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
    this.onExpiryChanged = this.onExpiryChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onLinkRecieved = this.onLinkRecieved.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleProcess = this.handleProcess.bind(this);
  }
  onCheckBoxClicked = () => {
    this.setState({ isPassword: !this.state.isPassword });
  };
  onTitleChanged = (event) => {
    this.setState({ title: event.target.value });
  };
  onTextChanged = (event) => {
    this.setState({ text: event.target.value });
  };
  onBurnChanged = (event) => {
    this.setState({ burn: event.target.value });
  };
  onPasswordChanged = (event) => {
    console.log(this.state.password);
    this.setState({ password: event.target.value });
  };
  onExpiryChanged = (event) => {
    this.setState({ expiry: parseInt(event.target.value) });
  };
  onLinkRecieved = (url) => {
    this.setState({
      link: url,
    });
  };
  handleSubmit = (event) => {
    var self = this;
    var errors = [];
    if (this.state.text === "") {
      errors.push("text");
    }
    if (this.state.title === "") {
      errors.push("title");
    }
    if (this.state.isPassword && this.state.password === "") {
      errors.push("password");
    }

    this.setState({
      errors: errors,
    });

    console.log(errors);
    if (errors.length > 0) {
      // return false;

      event.preventDefault();
    } else {
      this.setState({
        submitted: true,
      });
      alert("everything good. submit form!");
      const postObject = {
        text: this.state.text,
        expiry: parseInt(this.state.expiry),
        isPassword: this.state.isPassword,
        password: this.state.password,
      };

      axios({
        method: "post",
        headers: { "Content-Type": "application/json" },
        url: "https://copybinback.herokuapp.com/api/public/generateLink",
        data: postObject,
      })
        .then(function (response) {
          console.log(response.data.url);
          self.setState({
            link: response.data.url,
            submitted: false,
          });
        })
        .catch(function (error) {
          console.log(error);
        });

      console.log("text submitted");
      console.log(postObject);
      event.preventDefault();
    }
  };
  hasError(key) {
    return this.state.errors.indexOf(key) !== -1;
  }
  render() {
    return (
      <div>
        <Card
          border="none"
          style={{ height: "550px", margin: 0, borderRadius: 0, width: "100%" }}
        >
          <Form className="m-5">
            <Row className="m-1">
              <Col>
                <Form.Group>
                  <Row>
                    <Form.Control
                      style={{
                        backgroundColor: this.hasError("text")
                          ? "rgb(255, 236, 235)"
                          : "white",
                        border: this.hasError("text")
                          ? "1px solid red"
                          : "1px solid rgb(153, 153, 153)",
                        fontSize: "small",
                        color: "rgb(153, 153, 153)",
                      }}
                      as="textarea"
                      rows={10}
                      size="sm"
                      placeholder="Enter your text here"
                      // value={this.state.text}
                      onChange={this.onTextChanged}
                    />
                  </Row>
                </Form.Group>
              </Col>
            </Row>

            <Row className="m-1">
              <Col>
                <Row>
                  <Col style={{ padding: 0 }}>
                    <Form.Label
                      style={{
                        color: "rgb(153, 153, 153)",
                        fontWeight: "600",
                        fontSize: "small",
                        float: "left",
                      }}
                    >
                      Give your text a title
                    </Form.Label>
                  </Col>
                  <Col style={{ padding: 0 }}>
                    <Form.Control
                      size="sm"
                      type="text"
                      onChange={this.onTitleChanged}
                      placeholder="Title"
                      style={{
                        fontSize: "small",
                        color: "rgb(153, 153, 153)",
                        backgroundColor: this.hasError("title")
                          ? "rgb(255, 236, 235)"
                          : "white",
                        border: this.hasError("title")
                          ? "1px solid red"
                          : "1px solid rgb(153, 153, 153)",
                      }}
                    />
                  </Col>
                </Row>

                <Row className="mt-2">
                  <Col style={{ padding: 0 }}>
                    <Form.Label
                      style={{
                        color: "rgb(153, 153, 153)",
                        fontWeight: "600",
                        fontSize: "small",
                        float: "left",
                      }}
                    >
                      Select expiry of text
                    </Form.Label>
                  </Col>
                  <Col style={{ padding: 0 }}>
                    <Form.Control
                      as="select"
                      size="sm"
                      onChange={this.onExpiryChanged}
                      style={{
                        fontSize: "small",
                        border: "1px solid rgb(153, 153, 153)",
                        color: "rgb(153, 153, 153)",
                      }}
                    >
                      <option value="600">10 minutes</option>
                      <option value="3600">1 hour</option>
                      <option value="86400">1 day</option>
                      <option value="604800">1 weak</option>
                      <option value="1209600">2 weaks</option>
                    </Form.Control>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col style={{ padding: 0 }}>
                    <Form.Label
                      style={{
                        color: "red",
                        fontWeight: "600",
                        fontSize: "small",
                        float: "left",
                      }}
                    >
                      Burn after
                    </Form.Label>
                  </Col>
                  <Col style={{ padding: 0 }}>
                    <Form.Control
                      size="sm"
                      type="number"
                      placeholder="Enter reads to burn"
                      style={{
                        fontSize: "small",
                        border: "1px solid rgb(153, 153, 153)",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col style={{ padding: 0 }}>
                    <Button
                      variant="success"
                      type="submit"
                      className="mr-1"
                      style={{
                        width: "80%",
                        fontSize: "small",
                        float: "left",
                        border: "none",
                        fontWeight: "600",
                        backgroundColor: "rgb(116, 147, 168)",
                      }}
                      onClick={this.handleSubmit}
                    >
                      <Row>
                        <Col sm={10}>
                          {this.state.submitted
                            ? "Generating Link..."
                            : "Generate Link"}
                        </Col>
                        <Col sm={2}>
                          <Grid
                            style={{
                              visibility: this.state.submitted
                                ? "visible"
                                : "hidden",
                            }}
                            width="12"
                          />
                        </Col>
                      </Row>
                    </Button>
                  </Col>
                  <Col style={{ padding: 0 }}>
                    <Form.Control
                      type="text"
                      value={this.state.link}
                      readOnly
                      placeholder="Link will be generated here"
                      style={{
                        fontSize: "small",
                        border:
                          this.state.link === ""
                            ? "1px solid white"
                            : "1px solid rgb(191, 212, 227)",
                        boxShadow:
                          this.state.link === ""
                            ? "null"
                            : "0 0 10px rgb(191, 212, 227)",
                        backgroundColor: "rgb( 211, 229, 242)",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col sm={4}>
                    <Form.Check
                      type="checkbox"
                      checked={this.state.isPassword}
                      onChange={this.onCheckBoxClicked}
                      label="Password Enabled"
                      style={{
                        fontSize: "small",
                        float: "left",
                        color: "rgb(153, 153, 153)",
                        fontWeight: "600",
                      }}
                    />
                  </Col>

                  <Col sm={8} style={{ padding: 0 }}>
                    {this.state.isPassword ? (
                      <Form.Control
                        size="sm"
                        type="password"
                        placeholder="Password"
                        onChange={this.onPasswordChanged}
                        style={{
                          fontSize: "small",
                          float: "right",
                          color: "rgb(153, 153, 153)",
                          backgroundColor: this.hasError("title")
                            ? "rgb(255, 236, 235)"
                            : "white",
                          border: this.hasError("title")
                            ? "1px solid red"
                            : "1px solid rgb(153, 153, 153)",
                        }}
                      />
                    ) : (
                      <Form.Control
                        size="sm"
                        type="password"
                        placeholder="Password"
                        readOnly
                        style={{ fontSize: "small", float: "right" }}
                      />
                    )}
                  </Col>
                </Row>

                {/* <Row className="mt-2">
                  <Col>
                    <Button
                      variant="info"
                      onClick={this.handleProcess}
                      style={{ fontSize: "small", float: "left" }}
                    >
                      Count Words
                    </Button>
                  </Col>
                </Row> */}
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    );
  }
}

// MainForm.propTypes = {
//   processText: React.PropTypes.array.isRequired,
// };
