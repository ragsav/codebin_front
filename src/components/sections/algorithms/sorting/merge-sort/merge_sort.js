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
function merge(org,temp, low, mid, high, res_data) {
  let leftIndex = low;
  let rightIndex = mid + 1;
  let k = low;
  while (leftIndex < mid + 1 && rightIndex < high + 1) {
    res_data.push(
      JSON.parse(
        JSON.stringify(
          setRes([], [leftIndex, rightIndex], [], org.slice(0), [])
        )
      )
    );
    if (org[leftIndex] < org[rightIndex]) {
      temp[k]=org[leftIndex]
      leftIndex++;
      k++
    } else {
      temp[k]=org[rightIndex]
      rightIndex++;
      k++;
    }
  }
  console.log(temp);
  console.log(rightIndex);
  console.log(high)
  console.log(leftIndex)
  console.log(mid);
  while (rightIndex < high+1) {
    temp[k] = org[rightIndex];
    rightIndex++;
    k++;
  }
  while (leftIndex < mid + 1) {
    temp[k] = org[leftIndex];
    leftIndex++;
    k++;
  }

  for(var i=low;i<high+1;i++){
    org[i]=temp[i];
    res_data.push(
      JSON.parse(
        JSON.stringify(
          setRes([], [], [i], org.slice(0), [])
        )
      )
    );
  }
}
function merge_sort(arr,temp, low, high, res_data) {
  if (low >= high) {
    return;
  }
  console.log(temp)
  const mid = Math.floor(low + (high - low) / 2);
  merge_sort(arr,temp, low, mid, res_data);
  merge_sort(arr,temp, mid + 1, high, res_data);
  merge(arr,temp, low, mid, high, res_data);
  return res_data;
}

export default function MergeSort() {
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
    var resData = merge_sort(array,a,0,array.length-1,[]);
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
          title={"Merge sort"}
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
