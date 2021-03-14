import React from "react";

import { Row, Col, Container } from "react-bootstrap";

import DynamicArrayRenderer from "../../../../core/renderers/DynamicArrayRenderer/dynamicArrayRenderer";
import RendererBar from "../../../../core/renderers/renderer_bar";
import readme from "./README.md";
import code from "./code.cpp";
import ReadmeRenderer from "../../../../core/renderers/ReadmeRenderer/readmeRenderer";
import CodeRenderer from "../../../../core/renderers/CodeRenderer/codeRenderer";
import { useState, useEffect } from "react";

function randomArray() {
  return Array.from({ length: 20 }, () => Math.floor(Math.random() * 400));
}

function setRes(red, yellow, blue, array, label) {
  var res = {};
  res.red = red;
  res.yellow = yellow;
  res.blue = blue;
  res.array = array.slice(0);
  res.label = label;
  return res;
}
function selection_sort(arr) {
  var res_data = [];

  let n = arr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      res_data.push(
        JSON.parse(JSON.stringify(setRes([], [j, min], [], arr.slice(0), [])))
      );
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      
      res_data.push(
        JSON.parse(JSON.stringify(setRes([i, min], [], [], arr.slice(0), [])))
      );
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
      res_data.push(
        JSON.parse(JSON.stringify(setRes([], [], [i, min], arr.slice(0), [])))
      );
      
    }
  }

  return res_data;
}

export default function SelectionSort() {
  const [speed, setSpeed] = useState(2);
  const [array, setArray] = useState(randomArray());
  const [arrayState, setArrayState] = useState(setRes([], [], [], array, []));

  function reload() {
    window.location.reload();
  }

  function setCustomArray(arrString) {
    var arr = [];
    arrString.split(",").forEach((val) => {
      arr.push(val);
    });
    setArray(arr.slice(0));
  }
  function setRandomArray() {
    setArray(randomArray());
  }

  function runAnimation(val) {
    var resData = selection_sort(array);
    resData.push(
      JSON.parse(JSON.stringify(setRes([], [], [], array.slice(0), [])))
    );
    console.log(resData);
    resData.forEach((a, i) => {
      setTimeout(() => {
        setArrayState(a);
      }, i * 1000 * speed);
    });
  }

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
          reload={reload}
          setPlaying={runAnimation}
          setSpeed={setSpeed}
          setArray={setCustomArray}
          setRandomArray={setRandomArray}
        ></RendererBar>
      </Row>

      <Row style={{ margin: 0, padding: 4 }}>
        <Col style={{ margin: 0, padding: 0 }}>
          {arrayState ? (
            <DynamicArrayRenderer
              id="renderer"
              arrayState={JSON.parse(JSON.stringify(arrayState))}
            ></DynamicArrayRenderer>
          ) : null}
        </Col>
      </Row>
      <Row style={{ padding: 4, margin: 0 }}>
        <CodeRenderer file={code}></CodeRenderer>
      </Row>
      <Row style={{ padding: 4, margin: 0, textAlign: "left" }}>
        <ReadmeRenderer file={readme}></ReadmeRenderer>
      </Row>
    </Container>
  );
}
