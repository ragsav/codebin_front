import React from "react";

import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";

import Constants from "../../constants/constants";
import Footer from "../footer";

import Array1DRenderer from "../core/renderers/Array1DRenderer";

// var res_data=[];
function randomArray() {
  return Array.from({ length: 20 }, () => Math.floor(Math.random() * 400));
}
function partition(arr, low, high, res_data) {
  var pivot = arr[high];

  var i = low - 1;
  for (var j = low; j <= high - 1; j++) {
    var res = {};
    res.replace = [];
    res.compare = [high, j];
    if (arr[j] < pivot) {
      i++;
      res.swap = [i, j];
      var t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    } else {
      res.swap = [];
    }
    res_data.push(res);
  }
  var res = {};
  res.replace = [];
  res.compare = [high, i + 1];
  res.swap = [high, i + 1];
  res_data.push(res);
  var t = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = t;

  return i + 1;
}
function quick_sort(arr, low, high, res_data) {
  if (low < high) {
    var pi = partition(arr, low, high, res_data);

    quick_sort(arr, low, pi - 1, res_data); // Before pi
    quick_sort(arr, pi + 1, high, res_data); // After pi
  }
  return res_data;
}
export default class QuickSort extends React.Component {
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
                Quick Sort
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
                  quick_sort(
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
