import React from "react";
import Renderer from "../Renderer";
import { Col, Row, Button, Card } from "react-bootstrap";
import Constants from "../../../../constants/constants";
class Array1DRenderer extends Renderer {
  constructor(props) {
    super(props);
    this.bar = React.createRef();
    this.nums = React.createRef();
    this.state = {
      playing: this.props.playing,
      timeouts: [],
    };
  }

  // setPlaying = () => {
  //   this.setState({
  //     playing: !this.state.playing,
  //   });
  // };
  componentDidMount() {
    // if (this.state.playing === true) {
    //   this.animate(2);
    // }
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.props.playing === true) {
      this.animate(this.props.speed);
    }
  }
  animate = (speed) => {
    var bars = this.bar.current.children;
    var nums = this.nums.current.children;

    var res_data = this.props.res_data;

    var timeouts = [];
    for (var i = 0; i < res_data.length; i++) {
      const { compare, swap, replace } = res_data[i];

      const _b1 = bars[compare[0]].style;
      const _b2 = bars[compare[1]].style;
      const _n1s = nums[compare[0]].style;
      const _n2s = nums[compare[1]].style;
      var to1 = setTimeout(() => {
        // console.log(b1);
        _b1.backgroundColor = Constants.ARRAYCOMPARECOLOR;
        _b2.backgroundColor = Constants.ARRAYCOMPARECOLOR;
        _n1s.backgroundColor = Constants.ARRAYCOMPARECOLOR;
        _n2s.backgroundColor = Constants.ARRAYCOMPARECOLOR;
      }, i * 1000 * speed);
      timeouts.push(to1);

      if (swap.length > 0) {
        const b1 = bars[swap[0]].style;
        const b2 = bars[swap[1]].style;
        const n1 = nums[swap[0]];
        const n2 = nums[swap[1]];
        const n1s = nums[swap[0]].style;
        const n2s = nums[swap[1]].style;

        var to2 = setTimeout(() => {
          // console.log(b1);
          b1.backgroundColor = Constants.ARRAYSWAPCOLOR;
          b2.backgroundColor = Constants.ARRAYSWAPCOLOR;
          n1s.backgroundColor = Constants.ARRAYSWAPCOLOR;
          n2s.backgroundColor = Constants.ARRAYSWAPCOLOR;
          var t = b2.height;
          b2.height = b1.height;
          b1.height = t;

          var n = n2.value;
          n2.value = n1.value;
          n1.value = n;
        }, i * 1000 * speed + 500);
        timeouts.push(to2);

        var to3 = setTimeout(() => {
          b1.backgroundColor = Constants.ARRAYCOLOR;
          b2.backgroundColor = Constants.ARRAYCOLOR;
          n1s.backgroundColor = Constants.ARRAYCOLOR;
          n2s.backgroundColor = Constants.ARRAYCOLOR;
        }, i * 1000 * speed + 1000);
        timeouts.push(to3);
      } else if (replace.length > 0) {
        const b1 = bars[replace[0]].style;
        const b2 = bars[replace[1]].style;
        const n1 = nums[replace[0]];
        const n2 = nums[replace[1]];
        const n1s = nums[replace[0]].style;
        const n2s = nums[replace[1]].style;

        var to2 = setTimeout(() => {
          // console.log(b1);
          b1.backgroundColor = Constants.ARRAYSWAPCOLOR;
          b2.backgroundColor = Constants.ARRAYSWAPCOLOR;
          n1s.backgroundColor = Constants.ARRAYSWAPCOLOR;
          n2s.backgroundColor = Constants.ARRAYSWAPCOLOR;
          var t = b2.height;
          b1.height = t;

          var n = n2.value;
          n1.value = n;
        }, i * 1000 * speed + 500);
        timeouts.push(to2);

        var to3 = setTimeout(() => {
          b1.backgroundColor = Constants.ARRAYCOLOR;
          b2.backgroundColor = Constants.ARRAYCOLOR;
          n1s.backgroundColor = Constants.ARRAYCOLOR;
          n2s.backgroundColor = Constants.ARRAYCOLOR;
        }, i * 1000 * speed + 1000);
        timeouts.push(to3);
      } else {
        var to2 = setTimeout(() => {
          // console.log(b1);
          _b1.backgroundColor = Constants.ARRAYOKCOLOR;
          _b2.backgroundColor = Constants.ARRAYOKCOLOR;
          _n1s.backgroundColor = Constants.ARRAYOKCOLOR;
          _n2s.backgroundColor = Constants.ARRAYOKCOLOR;
        }, i * 1000 * speed + 500);
        timeouts.push(to2);

        var to3 = setTimeout(() => {
          _b1.backgroundColor = Constants.ARRAYCOLOR;
          _b2.backgroundColor = Constants.ARRAYCOLOR;
          _n1s.backgroundColor = Constants.ARRAYCOLOR;
          _n2s.backgroundColor = Constants.ARRAYCOLOR;
        }, i * 1000 * speed + 1000);
        timeouts.push(to3);
      }
      var to4 = setTimeout(() => {
        // console.log(b1);
        _b1.backgroundColor = Constants.ARRAYCOLOR;
        _b2.backgroundColor = Constants.ARRAYCOLOR;
        _n1s.backgroundColor = Constants.ARRAYCOLOR;
        _n2s.backgroundColor = Constants.ARRAYCOLOR;
      }, i * 1000 * speed + 1000);
      timeouts.push(to4);
    }
  };
  toString = (value) => {
    switch (typeof value) {
      case "number":
        return [
          Number.POSITIVE_INFINITY,
          Number.MAX_SAFE_INTEGER,
          0x7fffffff,
        ].includes(value)
          ? "∞"
          : [
              Number.NEGATIVE_INFINITY,
              Number.MIN_SAFE_INTEGER,
              -0x80000000,
            ].includes(value)
          ? "-∞"
          : Number.isInteger(value)
          ? value.toString()
          : value.toFixed(3);
      case "boolean":
        return value ? "T" : "F";
      default:
        return value;
    }
  };

  refresh() {
    this.forceUpdate();
  }

  renderData() {
    return null;
  }
  render() {
    return (
      <Card
        style={{
          backgroundColor: Constants.TERTIARY,
          width: "100%",

          padding: 20,
        }}
      >
        <div style={{}}>
          <Row
            style={{
              padding: 4,
              margin: 0,
              height: 400,
              alignContent: "center",
            }}
            id="bar"
            ref={this.bar}
          >
            {this.props.array.map((col, j) => (
              <div
                id={j}
                key={j}
                style={{
                  backgroundColor: Constants.ARRAYCOLOR,
                  alignSelf: "baseline",
                  padding: 0,
                  height: col,
                  width: "3.5%",
                  margin: 5,
                }}
              ></div>
            ))}
          </Row>
          <Row style={{ padding: 4, margin: 0 }} id="nums" ref={this.nums}>
            {this.props.array.map((col, j) => (
              <input
                key={j + "2"}
                readOnly
                value={col}
                style={{
                  alignSelf: "baseline",
                  backgroundColor: Constants.ARRAYCOLOR,
                  padding: 4,
                  color: Constants.TERTIARY,
                  margin: 5,
                  fontWeight: "400",
                  fontSize: 10,
                  width: "3.5%",
                }}
              ></input>
            ))}
          </Row>
        </div>
      </Card>
    );
  }
}

export default Array1DRenderer;
