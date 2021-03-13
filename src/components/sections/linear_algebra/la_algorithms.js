import React from "react";
import {
  Alert,
  Form,
  Button,
  Card,
  Row,
  Col,
  Navbar,
  Nav,
  FormControl,
} from "react-bootstrap";
const linear = require("./gauss_jordan");
const math = require("mathjs");

function convert_to_float(matrix) {
  var n = matrix.length;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      matrix[i][j] = parseFloat(matrix[i][j]);
    }
  }
  return matrix;
}

function display_matrix(label, matrix) {
  // console.log("this is display matrix");

  // console.log(typeof matrix);

  var rows = matrix.map(function (rowVal, x) {
    var row = rowVal.map(function (value, y) {
      // var cell = <p key={y + "-" + x}>{value}</p>;
      // currentCell++;
      return (
        <Col key={y + "-" + x} style={{ padding: 4, margin: 0 }}>
          {Math.round(value * 1000) / 1000}
        </Col>
      );
    }, this);

    row = (
      <Row key={x} style={{ padding: 0, margin: 0 }}>
        {row}
      </Row>
    );
    return row;
  }, this);
  return (
    <div
      style={{
        display: "inline-block",
        borderLeft: "2px solid #333",
        borderRight: "2px solid #333",
        padding: "0 2px",
        borderRadius: "4px",
      }}
    >
      {rows}
    </div>
  );
}

function join_matrix(label, a, b) {
  return (
    <Row>
      <Col>{label}</Col>
      <Col>
        <Row>
          <Col>{display_matrix("", a)}</Col>
          <Col>{display_matrix("", b)}</Col>
        </Row>
      </Col>
    </Row>
  );
}

export function mat_inv(matrix, comp_list) {
  try {
    var inv = math.inv(math.matrix(convert_to_float(matrix)));
    //   console.log(inv.valueOf());
    comp_list.push(display_matrix("Ans = ", inv.valueOf()));
    return inv.valueOf();
  } catch (e) {
    alert(e);
  }
}

export function mat_det(matrix, comp_list) {
  try {
    var det = math.det(math.matrix(convert_to_float(matrix)));
    comp_list.push(det);
  } catch (e) {
    alert(e);
  }
}

export function mat_mul(a, b, comp_list) {
  try {
    var mul = math.multiply(
      math.matrix(convert_to_float(a)),
      math.matrix(convert_to_float(b))
    );
    console.log(mul.valueOf());
    comp_list.push(display_matrix("Ans = ", mul.valueOf()));
  } catch (e) {
    alert(e);
  }
}

export function mat_eigen(a, comp_list) {
  try {
    var eigen = math.eigs(math.matrix(convert_to_float(a)));
    comp_list.push(
      display_matrix("Eigen vectors(as columns) = ", eigen.vectors._data)
    );
    // console.log(eigen.vectors._data);
  } catch (e) {
    alert(e);
  }
}

export function mat_linear_sys(a, b, comp_list) {
  try {
    var sol = math.lusolve(
      math.matrix(convert_to_float(a)),
      math.transpose(math.matrix(convert_to_float(b)))
    );

    comp_list.push(display_matrix("", sol.valueOf()));
  } catch (e) {
    alert(e);
  }
}
