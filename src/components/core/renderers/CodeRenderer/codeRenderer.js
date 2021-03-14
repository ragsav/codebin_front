import React, { useEffect, useState } from "react";
import { Card} from "react-bootstrap";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeRenderer (props) {
  const [code,setCode] = useState("");

  useEffect(()=>{
    fetchCode()
  })
  function fetchCode() {
    if (props.file) {
      fetch(props.file)
        .then((response) => response.text())
        .then((text) => {
          setCode(text)
        });
    }
  }

  
    return (
      <Card
        style={{ padding: 0, margin: 0, width: "100%", textAlign: "left" }}
        id="content"
      >
        <SyntaxHighlighter language="cpp" style={monokai}>
          {code}
        </SyntaxHighlighter>
      </Card>
    );
  
}
