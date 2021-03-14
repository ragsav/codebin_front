import React from "react";
import Renderer from "../Renderer";
import { Col, Row, Button, Card } from "react-bootstrap";
import Constants from "../../../../constants/constants";
export default function DynamicArrayRenderer(props) {
  

  

  function setBGColor(i){
      
    const { red, yellow, blue } = props.arrayState;
    
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
            
          >
            {props.arrayState.array.map((a, i) => (
              <div
                id={i}
                key={i}
                style={{
                  backgroundColor: setBGColor(i),
                  alignSelf: "baseline",
                  padding: 0,
                  height: a === -1 ? 0 : a,
                  width: "3.5%",
                  margin: 5,
                }}
              ></div>
            ))}
          </Row>
          <Row style={{ padding: 4, margin: 0 }} id="nums" >
            {props.arrayState.array.map((a, i) => (
              <input
                key={i + "2"}
                readOnly
                value={a}
                style={{
                  alignSelf: "baseline",
                  backgroundColor: setBGColor(i),
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


