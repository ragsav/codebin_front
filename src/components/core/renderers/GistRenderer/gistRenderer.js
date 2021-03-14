import React, { useEffect, useState } from "react";
import { Row, Card } from "react-bootstrap";
import Gist from "react-gist";
import Constants from "../../../../constants/constants";

export default function GistRenderer(props) {
  if (props.code === true) {
    return (
      <div>
        <Row style={{ padding: 4, margin: 0, textAlign: "left" }}>
          <Card style={{ width: "100%", margin: 0 }}>
            <Gist
              id={Constants.GISTHOST + props.id}
              file="code.cpp"
              style={{ margin: 0, padding: 0 }}
            />
          </Card>
        </Row>
        <Row style={{ padding: 4, margin: 0, textAlign: "left" }}>
          <Card style={{ width: "100%", margin: 0 }}>
            <Gist
              id={Constants.GISTHOST + props.id}
              file="README.md"
              style={{ margin: 0, padding: 0 }}
            />
          </Card>
        </Row>
      </div>
    );
  } else {
    return (
      <Row style={{ padding: 4, margin: 0, textAlign: "left" }}>
        <Card style={{ width: "100%", margin: 0 }}>
          <Gist
            id={Constants.GISTHOST + props.id}
            file="README.md"
            style={{ margin: 0, padding: 0 }}
          />
        </Card>
      </Row>
    );
  }
}
