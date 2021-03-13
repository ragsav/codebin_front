import React from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import MarkdownView from "react-showdown";
// import "../../algorithms/readme_files/README.md"
export default class ReadmeRenderer extends React.Component {
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
      <Card style={{ padding: 20, margin: 0 }}>
        <MarkdownView
          style={{ marginTop: 40 }}
          markdown={this.state.terms}
          options={{ tables: true, emoji: true }}
        />
      </Card>
    );
  }
}
