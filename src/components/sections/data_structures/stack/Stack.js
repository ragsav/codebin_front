import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DynamicArrayRenderer from "../../../core/renderers/DynamicArrayRenderer/dynamicArrayRenderer";
import GistRenderer from "../../../core/renderers/GistRenderer/gistRenderer";
import RendererBar from "../../../core/renderers/renderer_bar";


function randomArray() {
  return Array.from({ length: 20 }, () => Math.floor(Math.random() * 400));
}
function randomSeq() {
  var seq = [];
  for (var i = 0; i < 30; i++) {
    var ran = Math.floor(Math.random() * 400);
    var s = ran % 3 === 1 ? "pop" : "push:" + ran.toString();

    seq.push(s);
  }
  return seq;
}
function shiftArrayByOneToEnd(array) {
  for (var i = array.length - 1; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = -1;
}
function shiftArrayByOneToFront(array) {
  for (var i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array[array.length - 1] = -1;
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
function stack(seq) {
  console.log(seq);
  var res_data = [];
  var arr = Array.from({ length: 20 }, () => -1);
  for (var i = 0; i < seq.length; i++) {
    var s = seq[i].split(":");
    var command = s[0];

    if (command == "push") {
      var num = parseInt(s[1]);
      if (arr[arr.length - 1] != -1) {
        res_data.push(
          JSON.parse(JSON.stringify(setRes([0], [], [], arr.slice(0), [])))
        );
      } else {
        shiftArrayByOneToEnd(arr);
        res_data.push(
          JSON.parse(JSON.stringify(setRes([], [0], [], arr.slice(0), [])))
        );
        arr[0] = num;
        res_data.push(
          JSON.parse(JSON.stringify(setRes([], [], [0], arr.slice(0), [])))
        );
      }
    } else {
      if (arr[0] === -1) {
        res_data.push(
          JSON.parse(JSON.stringify(setRes([0], [], [], arr.slice(0), [])))
        );
      } else {
        res_data.push(
          JSON.parse(JSON.stringify(setRes([], [0], [], arr.slice(0), [])))
        );
        shiftArrayByOneToFront(arr);
        res_data.push(
          JSON.parse(JSON.stringify(setRes([], [], [0], arr.slice(0), [])))
        );
      }
    }
  }
  console.log(res_data);
  res_data.push(
    JSON.parse(JSON.stringify(setRes([], [], [], arr.slice(0), [])))
  );
  return res_data;
}

export default function Stack() {
  const [speed, setSpeed] = useState(2);
  const [seq, setSeq] = useState(randomSeq());
  const [arrayState, setArrayState] = useState(
    setRes(
      [],
      [],
      [],
      Array.from({ length: 20 }, () => -1),
      []
    )
  );

  function reload() {
    window.location.reload();
  }
    function setRandomSeq() {
      setSeq(randomSeq());
    }
  function setCustomInput(seq_string) {
    setSeq(seq_string.split(","));
  }
  function runAnimation(val) {
    var resData = stack(seq);
    console.log(resData);
    //
    resData.forEach((a, i) => {
      setTimeout(() => {
        // console.log(a);
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
          title={"Stack"}
          reload={reload}
          setPlaying={runAnimation}
          setSpeed={setSpeed}
          setArray={setCustomInput}
          setRandomArray={setRandomSeq}
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
        id="fb1c5bd1af6780200bbea8ae18b138f6"
        code={true}
      ></GistRenderer>
    </Container>
  );
}
