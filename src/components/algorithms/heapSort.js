import React from "react";

import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";

import Constants from "../../constants/constants";
import Footer from "../footer";
import RendererBar from "../core/renderer_bar";
import Array1DRenderer from "../core/renderers/Array1DRenderer";

function randomArray() {
  return Array.from({ length: 20 }, () => Math.floor(Math.random() * 400));
}
function heapify(arr, n, i, res_data) {
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest]) {
    largest = l;
    var res = {};
    res.compare = [l, largest];
    res.swap = [];
    res.replace = [];
    res_data.push(res);
  }

  if (r < n && arr[r] > arr[largest]) {
    largest = r;
    var res = {};
    res.compare = [l, largest];
    res.swap = [];
    res.replace = [];
    res_data.push(res);
  }

  if (largest != i) {
    var res = {};
    res.compare = [l, largest];
    res.swap = [i, largest];
    res.replace = [];
    res_data.push(res);

    var t = arr[i];
    arr[i] = arr[largest];
    arr[largest] = t;
    heapify(arr, n, largest, res_data);
  }
}

function heap_sort(arr, n, res_data) {
  for (var i = n / 2 - 1; i >= 0; i--) {
    heapify(arr, n, i, res_data);
  }

  for (var i = n - 1; i > 0; i--) {
    var res = {};
    res.compare = [0, i];
    res.swap = [0, i];
    res.replace = [];
    res_data.push(res);

    var t = arr[i];
    arr[i] = arr[0];
    arr[0] = t;
    heapify(arr, i, 0, res_data);
  }
  return res_data;
}

export default class HeapSort extends React.Component {
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
          <RendererBar
            title={"Heap sort"}
            reload={this.reload}
            setPlaying={this.setPlaying}
            setSpeed={this.setSpeed}
          ></RendererBar>
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
                  heap_sort([...this.state.array], this.state.array.length, [])
                )
              )}
            ></Array1DRenderer>
          </Col>
        </Row>
      </Container>
    );
  }
}