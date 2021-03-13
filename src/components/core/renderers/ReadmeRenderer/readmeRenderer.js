import React from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import MarkdownView from "react-showdown";
const marked = require("marked");
// import "../../algorithms/readme_files/README.md"
const markdown = `
# Welcome to React Showdown :+1:

To get started, edit the markdown in \`example/src/App.tsx\`.

| Column 1 | Column 2 |
|----------|----------|
| A1       | B1       |
| A2       | B2       |
`;

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

  getMarkdownText() {
    var renderer = marked.Renderer();
    var rawMarkup = marked(this.state.terms, { sanitize: true });
    return { __html: marked(rawMarkup, { renderer: renderer }) };
  }

  render() {
    return (
      <Card style={{ padding: 20, margin: 0 ,textAlign:"left",width:"100%"}} id="content">
        <MarkdownView
          // style={{ marginTop: 40 }}
          markdown={this.state.terms}
          options={{ tables: true, emoji: true }}
        />
        {/* <div dangerouslySetInnerHTML={this.getMarkdownText()} /> */}
      </Card>
    );
  }
}
