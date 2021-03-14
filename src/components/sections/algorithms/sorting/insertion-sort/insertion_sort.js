import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import DynamicArrayRenderer from "../../../../core/renderers/DynamicArrayRenderer/dynamicArrayRenderer";
import RendererBar from "../../../../core/renderers/renderer_bar";
import GistRenderer from "../../../../core/renderers/GistRenderer/gistRenderer";
import { useState } from "react";

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
function insertion_sort(arr) {
  var res_data = [];
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = arr[i];
    // The last element of our sorted subarray
    let j = i - 1;

    while (j > -1 && current < arr[j]) {
      res_data.push(
        JSON.parse(JSON.stringify(setRes([], [j, j + 1], [], arr.slice(0), [])))
      );
      res_data.push(
        JSON.parse(JSON.stringify(setRes([j, j + 1], [], [], arr.slice(0), [])))
      );
      arr[j + 1] = arr[j];
      res_data.push(
        JSON.parse(JSON.stringify(setRes([], [], [j, j + 1], arr.slice(0), [])))
      );
      j--;
    }
    res_data.push(
      JSON.parse(JSON.stringify(setRes([j + 1, i], [], [], arr.slice(0), [])))
    );
    arr[j + 1] = current;
    res_data.push(
      JSON.parse(JSON.stringify(setRes([], [], [j + 1, i], arr.slice(0), [])))
    );
  }

  return res_data;
}

export default function InsertionSort() {
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
    setArrayState(setRes([], [], [], array, []));
  }
  function setRandomArray() {
    setArray(randomArray());
    setArrayState(setRes([], [], [], array, []));
  }

  function runAnimation(val) {
    var resData = insertion_sort(array);
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
          title={"Insertion sort"}
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
        id="25bedcd0336890ebe8ac187e0e9ddd9c"
        code={true}
      ></GistRenderer>
    </Container>
  );
}
