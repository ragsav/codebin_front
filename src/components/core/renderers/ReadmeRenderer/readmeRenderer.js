import React, { useEffect, useState } from "react";
import { Card} from "react-bootstrap";
import MarkdownView from "react-showdown";


export default function ReadmeRenderer (props) {
  const [markDown,setMarkDown] = useState("")
  useEffect(()=>{
    fetchFile()
  })
  function fetchFile() {
    if (props.file) {
      fetch(props.file)
        .then((response) => response.text())
        .then((text) => {
          setMarkDown(text);
        });
    }
  }

  

  
    return (
      <Card style={{ padding: 20, margin: 0 ,textAlign:"left",width:"100%"}} id="content">
        <MarkdownView
          markdown={markDown}
          options={{ tables: true, emoji: true }}
        />
      </Card>
    );
 
}
