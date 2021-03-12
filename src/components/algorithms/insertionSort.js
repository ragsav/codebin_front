import React from "react";

import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";

import Constants from "../../constants/constants";
import Footer from "../footer";
import RendererBar from "../core/renderer_bar";
import Array1DRenderer from "../core/renderers/Array1DRenderer";

function randomArray() {
  return Array.from({ length: 20 }, () => Math.floor(Math.random() * 400));
}
function insertion_sort(arr) {
  var res_data = [];
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = arr[i];
    // The last element of our sorted subarray
    let j = i - 1;

    while (j > -1 && current < arr[j]) {
      var res = {};
      res.compare = [j + 1, j];
      res.replace = [];
      arr[j + 1] = arr[j];
      res.swap = [j + 1, j];
      res_data.push(res);
      j--;
    }
    var res = {};
    res.swap = [j + 1, i];
    res.compare = [i, j + 1];
    res.replace = [];
    arr[j + 1] = current;

    res.swap = [];
    res_data.push(res);
  }

  console.log(res_data);
  return res_data;
}

export default class InsertionSort extends React.Component {
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
            title={"Bubble sort"}
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
                JSON.stringify(insertion_sort([...this.state.array]))
              )}
            ></Array1DRenderer>
          </Col>
        </Row>
      </Container>
    );
  }
}
