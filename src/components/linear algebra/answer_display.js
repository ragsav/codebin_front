import React from "react";
import { Grid } from "@agney/react-loading";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import Constants from "../../constants/constants";
import { useEffect, useState } from "react";

// function display_matrix() {
//   var columns = matrix.map(function (rowVal, x) {
//     var y = 0;
//     var column = rowVal.map(function (value, y) {
//       var cell = <p>{value}</p>;
//       // currentCell++;
//       return <Col style={{ padding: 0, margin: 0 }}>{cell}</Col>;
//     }, this);

//     var row = (
//       <Row key={x} style={{ padding: 0, margin: 0 }}>
//         {column}
//       </Row>
//     );
//     return row;
//   }, this);
//   return columns;
// }

export default function DisplayAnswer(props) {
  return (
    <div
      style={{
        // display: "inline-block",
        margin: 0,
        padding: 16,

        border: `1px solid ${Constants.PRIMARY}`,
        borderRadius: 4,
      }}
    >
      {props.comp[0]}
      {/* {props.comp.map((d, i) => {
        return (
          <div key={i} style={{ float: "left" }}>
            {d}
          </div>
        );
      })} */}
    </div>
  );
}
