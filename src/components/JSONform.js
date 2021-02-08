import React from "react";
import { Alert, Form, Button, Card, Row, Col } from "react-bootstrap";

export default class JSONform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleProcess = this.handleProcess.bind(this);
  }

  handleChange(event) {
    console.log("text value chnaged");
    this.setState({ text: event.target.value });
    this.props.processText(this.state.text);
  }

  handleProcess(event) {
    console.log("processing clicked");
    console.log(this.state);
    this.props.processText(this.state.text);
    event.preventDefault();
  }
  handleSubmit(event) {
    console.log("text submitted");
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Card
          border="primary"
          style={{ height: "550px", borderRadius: 0, padding: 0, margin: 0 }}
        >
          <Form style={{ height: "550px" }}>
            {/* <div style={{ padding: 4 }}></div>
            <Row style={{ padding: 4 }}>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  style={{ fontSize: "small" }}
                />
              </Col>
            </Row>
            <Row style={{ padding: 4 }}>
              <Col>
                <Form.Control as="select" style={{ fontSize: "small" }}>
                  <option>10 minutes</option>
                  <option>1 hour</option>
                  <option>1 day</option>
                  <option>1 weak</option>
                  <option>2 weaks</option>
                </Form.Control>
              </Col>
            </Row>
            <Row style={{ padding: 4 }}>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Enter reads to burn"
                  style={{ fontSize: "small" }}
                />
              </Col>
            </Row>
            <Row style={{ padding: 4 }}>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="Password Enabled"
                  style={{ fontSize: "small", float: "left" }}
                />
              </Col>
            </Row>
            <Row style={{ padding: 4 }}>
              <Col>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{ fontSize: "small" }}
                />
              </Col>
            </Row>
            <Row style={{ padding: 4 }}>
              <Col style={{}}>
                <Button
                  variant="success"
                  type="submit"
                  size="lg"
                  style={{ fontSize: "small", width: "100%" }}
                  onClick={this.handleProcess}
                >
                  Generate Link
                </Button>
              </Col>
            </Row>
            <Row style={{ padding: 4 }}>
              <Col>
                <Form.Group>
                  <Form.Control
                    placeholder="Link will be generated here"
                    style={{
                      fontSize: "small",
                      backgroundColor: "rgb(161, 255, 170)",
                    }}
                    as="textarea"
                    rows={10}
                    size="sm"
                    readOnly
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
            </Row> */}
          </Form>
        </Card>
      </div>
    );
  }
}

// MainForm.propTypes = {
//   processText: React.PropTypes.array.isRequired,
// };
