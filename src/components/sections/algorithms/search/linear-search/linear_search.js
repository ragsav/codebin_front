import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import GistRenderer from "../../../../core/renderers/GistRenderer/gistRenderer";
import DynamicArrayRenderer from "../../../../core/renderers/DynamicArrayRenderer/dynamicArrayRenderer";
import RendererBar from "../../../../core/renderers/renderer_bar";
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

function linear_search(arr, x_index, resData) {
  for (var i = 0; i < arr.length; i++) {
    resData.push(
      JSON.parse(
        JSON.stringify(setRes([i], [], [x_index], arr.slice(0), [x_index]))
      )
    );
    if (arr[i] == arr[x_index]) {
      resData.push(
        JSON.parse(JSON.stringify(setRes([], [i], [], arr.slice(0), [x_index])))
      );
      break;
    }
  }
}

export default function LinearSearch() {
  const [speed, setSpeed] = useState(2);
  const [array, setArray] = useState(randomArray());
  const [arrayState, setArrayState] = useState(setRes([], [], [], array, []));

  function reload() {
    window.location.reload();
  }

  function setCustomArray(arrString) {
    var arr = [];
    arrString.split(",").forEach((val) => {
      arr.push(parseInt(val));
    });
    console.log(arr);
    setArray(arr.slice(0));
    setArrayState(setRes([], [], [], array, []));
  }
  function setRandomArray() {
    setArray(randomArray());
    setArrayState(setRes([], [], [], array, []));
  }

  function runAnimation(val) {
    var resData = [];
    var x_index = Math.round(Math.random() * array.length - 1);
    linear_search(array, x_index, resData);
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
          title={"Linear Search"}
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
        id="ec0d1413cbba6d941f91dd2aac3c13fe"
        code={true}
      ></GistRenderer>
    </Container>
  );
}
