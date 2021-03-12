import React from "react";

import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";

import Constants from "../../constants/constants";
import Footer from "../footer";

import Array1DRenderer from "../core/renderers/Array1DRenderer";
import RendererBar from "../core/renderer_bar";

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
  reload = ()  =>  {
    window.location.reload();
  };;

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
          <RendererBar title={"Bubble sort"} reload={this.reload} setPlaying={this.setPlaying} setSpeed = {this.setSpeed}></RendererBar>
          
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
                JSON.stringify(bubble_Sort([...this.state.array]))
              )}
            ></Array1DRenderer>
          </Col>
        </Row>
      </Container>
    );
  }
}
