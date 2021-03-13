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
            title={"Quick sort"}
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
        <Row style={{ padding: 4, margin: 0, textAlign: "left" }}>
          <ReadmeRenderer file={readme}></ReadmeRenderer>
        </Row>
      </Container>
    );
  }
}
