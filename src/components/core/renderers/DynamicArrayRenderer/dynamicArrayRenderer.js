import React from "react";
import Renderer from "../Renderer";
import { Col, Row, Button, Card } from "react-bootstrap";
import Constants from "../../../../constants/constants";
class DynamicArrayRenderer extends Renderer {
  constructor(props) {
    super(props);
    this.bar = React.createRef();
    this.nums = React.createRef();
    this.setBGColor = this.setBGColor.bind(this);
  }

  componentDidMount() {
    // console.log("renderer mounted");
    // this.setArrayState();
  }

  componentDidUpdate(prevState, prevProps) {
    // console.log("renderer updated ");
    // console.log(this.prevProps);
  }

  setBGColor = (i) => {
      
    const { red, yellow, blue } = this.props.arrayState;
    
      if (red.indexOf(i) != -1) {
        return Constants.ARRAYSWAPCOLOR;
      }
    
    if (blue.indexOf(i) != -1) {
      
        return Constants.ARRAYOKCOLOR;
      
    }
    if (yellow.indexOf(i) != -1) {
      
        return Constants.ARRAYCOMPARECOLOR;
      
    }
    return Constants.ARRAYCOLOR;
  };

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
            {this.props.arrayState.array.map((a, i) => (
              <div
                id={i}
                key={i}
                style={{
                  backgroundColor: this.setBGColor(i),
                  alignSelf: "baseline",
                  padding: 0,
                  height: a === -1 ? 0 : a,
                  width: "3.5%",
                  margin: 5,
                }}
              ></div>
            ))}
          </Row>
          <Row style={{ padding: 4, margin: 0 }} id="nums" ref={this.nums}>
            {this.props.arrayState.array.map((a, i) => (
              <input
                key={i + "2"}
                readOnly
                value={a}
                style={{
                  alignSelf: "baseline",
                  backgroundColor: this.setBGColor(i),
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

export default DynamicArrayRenderer;
