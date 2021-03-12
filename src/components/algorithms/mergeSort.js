import React from "react";

import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";

import Constants from "../../constants/constants";
import Footer from "../footer";

import Array1DRenderer from "../core/renderers/Array1DRenderer";

// var res_data=[];
function randomArray() {
  return Array.from({ length: 20 }, () => Math.floor(Math.random() * 400));
}
function merge(org, low, mid, high, res_data) {
  let leftIndex = low;
  let rightIndex = mid + 1;

  while (leftIndex < mid + 1 && rightIndex < high + 1) {
    var res = {};
    res.compare = [leftIndex, rightIndex];
    res.replace = [];
    if (org[leftIndex] < org[rightIndex]) {
      // temp[k]=org[leftIndex]
      leftIndex++;
      // k++
      res.swap = [];
      res_data.push(res);
    } else {
      // temp[k]=org[rightIndex]
      res.swap = [rightIndex, leftIndex];
      var t = org[rightIndex];
      org[rightIndex] = org[leftIndex];
      org[leftIndex] = t;

      res_data.push(res);
      t = rightIndex;

      while (t < high && org[t] > org[t + 1]) {
        var res = {};
        res.compare = [t, t + 1];
        var m = org[t + 1];
        org[t + 1] = org[t];
        org[t] = m;
        res.swap = [t, t + 1];
        res.replace = [];
        res_data.push(res);
        t++;
      }
    }
  }
  while (rightIndex < high && org[rightIndex] > org[rightIndex + 1]) {
    var res = {};
    res.compare = [rightIndex, rightIndex + 1];
    var t = org[rightIndex + 1];
    org[rightIndex + 1] = org[rightIndex];
    org[rightIndex] = t;
    res.swap = [rightIndex, rightIndex + 1];
    res.replace = [];
    res_data.push(res);
    rightIndex++;
  }
}
function merge_sort(arr, low, high, res_data) {
  if (low >= high) {
    return;
  }
  const mid = Math.floor(low + (high - low) / 2);
  merge_sort(arr, low, mid, res_data);
  merge_sort(arr, mid + 1, high, res_data);
  merge(arr, low, mid, high, res_data);
  console.log(res_data);
  return res_data;
}

export default class MergeSort extends React.Component {
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
                Merge Sort
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
                JSON.stringify(
                  merge_sort(
                    [...this.state.array],
                    0,
                    this.state.array.length - 1,
                    []
                  )
                )
              )}
            ></Array1DRenderer>
          </Col>
        </Row>
      </Container>
    );
  }
}
