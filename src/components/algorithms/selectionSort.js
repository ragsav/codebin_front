import React from "react";

import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";

import Constants from "../../constants/constants";
import Footer from "../footer";
import RendererBar from "../core/renderer_bar";
import Array1DRenderer from "../core/renderers/Array1DRenderer";

function randomArray() {
  return Array.from({ length: 20 }, () => Math.floor(Math.random() * 400));
}
function selection_sort(arr) {
  var res_data = [];

  let n = arr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      var res = {};
      res.compare = [min, j];
      res.replace = [];
      res.swap = [];
      res_data.push(res);
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      var res = {};
      res.compare = [min, i];
      res.replace = [];
      res.swap = [min, i];
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
      res_data.push(res);
    }
  }

  return res_data;
}

export default class SelectionSort extends React.Component {
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
            title={"Selection sort"}
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
                JSON.stringify(selection_sort([...this.state.array]))
              )}
            ></Array1DRenderer>
          </Col>
        </Row>
      </Container>
    );
  }
}
