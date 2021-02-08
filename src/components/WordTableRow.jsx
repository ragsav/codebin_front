/* eslint-disable arrow-body-style */
import React from "react";

const WordTableRow = ({ word, count, prime }) => {
  return (
    <tr>
      <td
        style={{
          fontSize: "small",
          padding: 0,
          color: "rgb(130, 130, 130)",
          fontWeight: "600",
        }}
      >
        {word}
      </td>
      <td
        style={{
          fontSize: "small",
          padding: 0,
          color: "rgb(130, 130, 130)",
          fontWeight: "600",
        }}
      >
        {count}
      </td>
      {/* <td
        style={{ fontSize: "small", padding: 0, color: "rgb(130, 130, 130)" }}
      >{`${prime}`}</td> */}
    </tr>
  );
};

// WordTableRow.propTypes = {
//   word: React.PropTypes.string.isRequired,
//   count: React.PropTypes.number.isRequired,
//   prime: React.PropTypes.bool.isRequired,
// };

export default WordTableRow;
