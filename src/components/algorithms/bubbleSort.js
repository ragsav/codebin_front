import React from "react";

import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";

import Constants from "../../constants/constants";
import Footer from "../footer";

import Array1DRenderer from "../core/renderers/Array1DRenderer";

function randomArray() {
  return Array.from({ length: 20 }, () => Math.floor(Math.random() * 400));
}
function bubble_Sort(arr) {
  var res_data = [];
  var len = arr.length,
    i,
    j,
    stop;

  for (i = 0; i < len; i++) {
    for (j = 0; j < len - i; j++) {
      var res = {};

      if (j < len - 1) {
        res.compare = [j, j + 1];

        if (arr[j] > arr[j + 1]) {
          res.swap = [j, j + 1];
          var t = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = t;
        } else {
          res.swap = [];
        }
        res.replace = [];
        res_data.push(res);
      }
    }
  }
  return res_data;
}

export default class BubbleSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: randomArray(),
      playing: false,
      animations: [],
    };
  }
  componentDidMount() {}

  setPlaying = () => {
    this.setState({
      playing: !this.state.playing,
    });
  };

  render() {
    return (
      <Container
        style={{
          margin: "auto",
          backgroundColor: "white",
          borderRadius: 0,

          padding: 8,
          // margin: 0,
        }}
      >
        <Row style={{ margin: 0, padding: 0 }}>
          <Card
            style={{
              margin: 4,
              width: "100%",
              borderRadius: 4,
              backgroundColor: Constants.PRIMARY,
              color: Constants.SECONDARY,
              fontSize: 10,
            }}
          >
            <Row style={{ margin: 0, padding: 0 }}>
              <Button
                className="textStyleCode"
                style={{
                  fontSize: "13px",
                  float: "right",
                  border: "none",
                  fontWeight: "500",
                  paddingLeft: 20,
                  paddingRight: 20,
                  margin: 4,
                  color: Constants.SECONDARY,
                  // boxShadow: "1px 3px 1px #9E9E9E",
                  backgroundColor: Constants.PRIMARY,
                }}
              >
                Bubble Sort
              </Button>
              <Button
                style={{
                  fontSize: "13px",
                  float: "right",
                  border: "none",
                  fontWeight: "500",
                  margin: 4,
                  color: Constants.TERTIARY,
                  // boxShadow: "1px 3px 1px #9E9E9E",
                  backgroundColor: Constants.SECONDARY,
                }}
                onClick={(e) => {
                  window.location.reload();
                }}
              >
                Generate Random Array
              </Button>

              <Button
                style={{
                  fontSize: "13px",
                  float: "right",
                  border: "none",
                  margin: 4,
                  fontWeight: "500",
                  color: Constants.TERTIARY,
                  // boxShadow: "1px 3px 1px #9E9E9E",
                  backgroundColor: Constants.SECONDARY,
                }}
                onClick={(e) => {
                  this.setPlaying(true);
                }}
              >
                Sort
              </Button>
            </Row>
          </Card>
        </Row>
        <Row style={{ margin: 0, padding: 4 }}></Row>
        <Row style={{ margin: 0, padding: 4 }}>
          <Col style={{ margin: 0, padding: 0 }}>
            <Array1DRenderer
              id="renderer"
              array={this.state.array}
              playing={this.state.playing}
              res_data={JSON.parse(
                JSON.stringify(bubble_Sort([...this.state.array]))
              )}
            ></Array1DRenderer>
          </Col>
        </Row>
      </Container>
    );
  }
}
