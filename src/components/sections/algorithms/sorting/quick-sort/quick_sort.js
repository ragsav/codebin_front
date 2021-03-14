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
function partition(arr, low, high, res_data) {
  var pivot = arr[high];

  var i = low - 1;
  for (var j = low; j <= high - 1; j++) {
    res_data.push(
      JSON.parse(JSON.stringify(setRes([], [high, j], [], arr.slice(0), [])))
    );
    if (arr[j] < pivot) {
      i++;
      res_data.push(
        JSON.parse(JSON.stringify(setRes([i,  j], [], [], arr.slice(0), [])))
      );
      var t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
      res_data.push(
        JSON.parse(JSON.stringify(setRes([], [], [i,  j], arr.slice(0), [])))
      );
    }
  }
  res_data.push(
    JSON.parse(JSON.stringify(setRes([i + 1], [high], [], arr.slice(0), [])))
  );
  var t = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = t;
  res_data.push(
    JSON.parse(JSON.stringify(setRes([], [], [i + 1, high], arr.slice(0), [])))
  );

  return i + 1;
}
function quick_sort(arr, low, high, res_data) {
  if (low < high) {
    var pi = partition(arr, low, high, res_data);

    quick_sort(arr, low, pi - 1, res_data); // Before pi
    quick_sort(arr, pi + 1, high, res_data); // After pi
  }
  return res_data;
}
export default function QuickSort() {
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
    let a = new Array(20);
    for (let i = 0; i < 20; ++i) a[i] = 0;
    var resData = quick_sort(array,     0, array.length - 1, []);
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
          title={"Quick sort"}
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