/* eslint-disable arrow-body-style */

import React from "react";
import WordTableRow from "./WordTableRow";
import {
  Alert,
  Form,
  Button,
  Card,
  Row,
  Col,
  Navbar,
  Table,
} from "react-bootstrap";
const ResultsContainer = ({ countedWords, loading }) => {
  const renderTableRows = () => {
    return countedWords.map((wordObject, i) => (
      <WordTableRow {...wordObject} key={i} />
    ));
  };

  const loadContent = () => {
    if (1) {
      console.log(countedWords.length);
      const rows = renderTableRows();
      return (
        <div className="mr-1" style={{ width: "100%" }}>
          <Card
            // border="dark"
            bg="white"
            style={{ overflow: "auto", margin: 0, height: "550px" }}
          >
            <h6 className="m-1" style={{ fontSize: "small" }}>
              Word count
            </h6>
            <div
              style={{
                borderTop: "1px solid #cccccc ",
                marginTop: 5,
              }}
            ></div>
            <Table responsive bordered={true}>
              <tbody>{rows}</tbody>
            </Table>
          </Card>
        </div>
      );
    }
    if (loading) {
      return (
        <div className="col-12">
          <img src="static/loading-icon.svg" alt="loading icon" />
        </div>
      );
    }
    return "";
  };

  const content = loadContent();
  return <div className="row">{content}</div>;
};

// ResultsContainer.propTypes = {
//   countedWords: React.PropTypes.array.isRequired,
//   loading: React.PropTypes.bool.isRequired,
// };

export default ResultsContainer;
