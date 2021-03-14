import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import DynamicArrayRenderer from "../../../../core/renderers/DynamicArrayRenderer/dynamicArrayRenderer";
import RendererBar from "../../../../core/renderers/renderer_bar";
import GistRenderer from "../../../../core/renderers/GistRenderer/gistRenderer";
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
function heapify(arr, n, i, res_data) {
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest]) {
    largest = l;
    res_data.push(
      JSON.parse(JSON.stringify(setRes([], [l, largest], [], arr.slice(0), [])))
    );
  }

  if (r < n && arr[r] > arr[largest]) {
    largest = r;
    res_data.push(
      JSON.parse(JSON.stringify(setRes([], [r, largest], [], arr.slice(0), [])))
    );
  }

  if (largest != i) {
    res_data.push(
      JSON.parse(JSON.stringify(setRes([i,  largest], [], [], arr.slice(0), [])))
    );
    var t = arr[i];
    arr[i] = arr[largest];
    arr[largest] = t;
    res_data.push(
      JSON.parse(JSON.stringify(setRes([], [], [i, largest], arr.slice(0), [])))
    );
    heapify(arr, n, largest, res_data);
  }
}

function heap_sort(arr, n, res_data) {
  for (var i = n / 2 - 1; i >= 0; i--) {
    heapify(arr, n, i, res_data);
  }

  for (var i = n - 1; i > 0; i--) {
    res_data.push(
      JSON.parse(JSON.stringify(setRes([i, 0], [], [], arr.slice(0), [])))
    );

    var t = arr[i];
    arr[i] = arr[0];
    arr[0] = t;
    res_data.push(
      JSON.parse(JSON.stringify(setRes([], [], [i, 0], arr.slice(0), [])))
    );
    heapify(arr, i, 0, res_data);
  }
  
  return res_data;
}

export default function HeapSort() {
  const [speed, setSpeed] = useState(2);
  const [array, setArray] = useState(randomArray());
  const [arrayState, setArrayState] = useState(
    setRes([], [], [], array, [])
  );

  function reload() {
    window.location.reload();
  }

  function setCustomArray(arrString) {
    var arr = [];
    arrString.split(",").forEach((val) => {
      arr.push(val);
    });
    setArray(arr.slice(0));
    setArrayState(setRes([], [], [], array, []));
  }
  function setRandomArray() {
    setArray(randomArray());
    setArrayState(setRes([], [], [], array, []));
  }

  function runAnimation(val) {
    var resData = heap_sort(array,    array.length,    []);
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
          title={"Heap sort"}
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
      <GistRenderer
        id="2d8336d4f4a2a113a04a9b2f4b2bc540"
        code={true}
      ></GistRenderer>
    </Container>
  );
}
