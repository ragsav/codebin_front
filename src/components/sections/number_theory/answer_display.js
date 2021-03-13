import React from "react";
import { Row, Col } from "react-bootstrap";
import Constants from "../../../constants/constants";

export default function Terminal(props) {
  //   const [text, setText] = useState(text);

  return (
    <div>
      <Col
        style={{
          padding: 0,
          margin: 0,
          width: "100%",
        }}
      >
        <Row style={{ padding: 0, margin: 0 }}>
          <Col style={{ padding: 0, margin: 0 }}>
            <textarea
              readOnly
              value={props.text.join("\n")}
              type="text"
              placeholder="Answer will be shown here"
              readOnly
              style={{
                fontSize: "small",
                color: Constants.SECONDARY,
                padding: 8,
                height: props.height,
                width: "100%",
                backgroundColor: Constants.TERTIARY,
                borderRadius: 4,
                border: `1px solid ${Constants.MONOKAI}`,
              }}
            ></textarea>
          </Col>
        </Row>
        <Row></Row>
      </Col>
    </div>
  );
}
