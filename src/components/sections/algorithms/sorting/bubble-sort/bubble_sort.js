import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import DynamicArrayRenderer from "../../../../core/renderers/DynamicArrayRenderer/dynamicArrayRenderer"
import RendererBar from "../../../../core/renderers/renderer_bar";
import { useState } from "react";
import GistRenderer from "../../../../core/renderers/GistRenderer/gistRenderer";


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

function bubble_Sort(arr) {
  var res_data = [];
  var len = arr.length,
    i,
    j;

  for (i = 0; i < len; i++) {
    for (j = 0; j < len - i; j++) {
      var res = {};

      res_data.push(
        JSON.parse(
          JSON.stringify(setRes([], [j,j+1], [], arr.slice(0), []))
        )
      );
      if (arr[j] > arr[j + 1]) {
          res_data.push(
            JSON.parse(
              JSON.stringify(setRes([j,j+1], [], [], arr.slice(0), []))
            )
          );
          var t = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = t;
          res_data.push(
            JSON.parse(
              JSON.stringify(setRes([], [], [j,j+1], arr.slice(0), []))
            )
          );
        }
    }
  }
  
  return res_data;
}

export default function BubbleSort() {
  
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
    var resData = bubble_Sort(array);
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
          title={"Bubble sort"}
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
        id="a8fedc55621e182626ef3fd27db6cbf3"
        code={true}
      ></GistRenderer>
    </Container>
  );
}
