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

const StringEncoder = ({ countedWords, loading }) => {
  const renderTableRows = () => {
    return countedWords.map((wordObject, i) => (
      <WordTableRow {...wordObject} key={i} />
    ));
  };

  const loadContent = () => {
    if (countedWords.length > 0) {
      console.log(countedWords.length);
      const rows = renderTableRows();
      return (
        <div className="col-10 mt-4">
          <Card
            border="dark"
            bg="light"
            style={{ overflow: "auto", height: "100%" }}
          >
            <h6 className="m-1" style={{ fontSize: "medium" }}>
              Word count analysis
            </h6>
            <Table responsive bordered={true}>
              <thead>
                <tr>
                  <th style={{ fontSize: "small", padding: 0 }}>Word</th>
                  <th style={{ fontSize: "small", padding: 0 }}>Count</th>
                  <th style={{ fontSize: "small", padding: 0 }}>Prime?</th>
                </tr>
              </thead>
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
