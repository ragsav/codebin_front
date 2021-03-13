import React from "react";

import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import readme from "./README.md";
import ReadmeRenderer from "../../../../core/renderers/ReadmeRenderer/readmeRenderer";
import RendererBar from "../../../../core/renderers/renderer_bar";
import Array1DRenderer from "../../../../core/renderers/Array1DRenderer";

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
  return res_data;
}

export default class MergeSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: randomArray(),
      playing: false,
      speed: 0,
      animations: [],
    };
    this.setPlaying = this.setPlaying.bind(this);
    this.setSpeed = this.setSpeed.bind(this);
    this.reload = this.reload.bind(this);
    this.setCustomArray = this.setCustomArray.bind(this);
  }
  componentDidMount() {}

  setPlaying = (val) => {
    this.setState({
      playing: val,
    });
  };
  setSpeed = (speed) => {
    this.setState({
      speed: speed,
    });
  };
  reload = () => {
    window.location.reload();
  };

  setCustomArray = (s) => {
    var string_array = s.split(",");
    var arr = [];
    string_array.forEach((e) => {
      arr.push(parseInt(e));
    });
    this.setState({
      array: arr,
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
          <RendererBar
            title={"Merge sort"}
            reload={this.reload}
            setPlaying={this.setPlaying}
            setSpeed={this.setSpeed}
            setArray={this.setCustomArray}
          ></RendererBar>
        </Row>
        <Row style={{ margin: 0, padding: 4 }}></Row>
        <Row style={{ margin: 0, padding: 4 }}>
          <Col style={{ margin: 0, padding: 0 }}>
            <Array1DRenderer
              id="renderer"
              array={this.state.array}
              playing={this.state.playing}
              speed={this.state.speed}
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
        <Row style={{ padding: 4, margin: 0, textAlign: "left" }}>
          <ReadmeRenderer file={readme}></ReadmeRenderer>
        </Row>
      </Container>
    );
  }
}
