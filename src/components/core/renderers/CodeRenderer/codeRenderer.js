import React from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default class CodeRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      terms: "",
    };
  }
  componentWillMount() {
    if (this.props.file) {
      fetch(this.props.file)
        .then((response) => response.text())
        .then((text) => {
          this.setState({ terms: text });
        });
    }
  }

  render() {
    return (
      <Card
        style={{ padding: 0, margin: 0, width: "100%", textAlign: "left" }}
        id="content"
      >
        <SyntaxHighlighter language="cpp" style={monokai}>
          {this.state.terms}
        </SyntaxHighlighter>
      </Card>
    );
  }
}
