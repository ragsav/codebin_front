import * as React from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import Constants from "../../constants/constants";
class MatrixCell extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this.props.data);
    this.activeStyle = {
      border: "1px solid #000",
      display: "block",
      margin: "4px 0",
      padding: "4px",
      width: "100%",
      textAlign: "center",
    };

    this.defaultStyle = {
      border: "1px solid #eee",
      display: "block",
      margin: "4px 0",
      padding: "4px",
      width: "100%",
      textAlign: "center",
    };
  }

  onChange(e) {
    var val = e.target.value;
    this.props.matrix.setCellValue(this.props.x, this.props.y, val);
    this.setState({ value: val });
  }

  componentDidMount() {
    // if (this.props.active) this.focus();
  }

  componentDidUpdate() {
    // if (this.props.active) this.focus();
  }

  render() {
    var style = this.defaultStyle;
    if (this.props.active) style = this.activeStyle;
    return (
      <input
        ref="input"
        type="text"
        style={style}
        value={this.props.value}
        readOnly={this.props.readonly}
        onChange={this.onChange.bind(this)}
      />
    );
  }
}

export class Matrix extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);
    this.state = {
      rows: this.props.data.length,
      columns: this.props.data[0].length,
      x: -1,
      y: -1,
      caret: 0,
      columns: this.props.data,
      resize: false,
    };

    this.style = {
      overflow: "hidden",
      display: "inline-block",
      borderLeft: "2px solid #333",
      borderRight: "2px solid #333",
      padding: "0 2px",
      borderRadius: "4px",
    };
    this.addColumn = this.addColumn.bind(this);
    this.addRow = this.addRow.bind(this);
    this.removeColumn = this.removeColumn.bind(this);
    this.removeRow = this.removeRow.bind(this);
  }

  setCellValue(x, y, val) {
    var columns = this.state.columns;
    columns[x][y] = val;
    this.setState({
      columns: columns,
    });

    this.props.onDataChanged(columns);
    // console.log(this.state.columns);
  }

  addRow = () => {
    var columns = this.state.columns;
    var new_row = [];
    for (var i = 0; i < columns[0].length; i++) {
      new_row.push(0);
    }
    columns.push(new_row);
    this.setState({
      height: columns.length + 1,
      columns: columns,
    });
    this.props.onDataChanged(columns);
  };

  addColumn = () => {
    var columns = this.state.columns;
    // var newColumn = new Array(this.getHeight());
    for (var i = 0; i < columns.length; i++) {
      columns[i].push(0);
    }
    // columns.push(newColumn);

    this.setState({
      width: columns[0].length + 1,
      columns: columns,
    });
    this.props.onDataChanged(columns);
  };

  removeRow = () => {
    this.state.columns.pop();
    this.setState({
      columns: this.state.columns,
    });
    this.props.onDataChanged(this.state.columns);
  };

  removeColumn = () => {
    for (var i = 0; i < this.state.columns.length; i++) {
      this.state.columns[i].pop();
    }
    this.setState({
      columns: this.state.columns,
    });
    this.props.onDataChanged(this.state.columns);
  };

  render() {
    var currentCell = 0;

    var columns = this.state.columns.map(function (columnValues, x) {
      var y = 0;
      var column = columnValues.map(function (value, y) {
        var cell = (
          <MatrixCell
            key={x + "-" + y}
            value={value}
            matrix={this}
            x={x}
            y={y}
            readonly={this.props.readonly}
          />
        );
        currentCell++;
        return <Col style={{ padding: 0, margin: 0 }}>{cell}</Col>;
      }, this);

      var col = (
        <Row key={x} style={{ padding: 0, margin: 0 }}>
          {column}
        </Row>
      );
      return col;
    }, this);
    return (
      <Container style={{ padding: 0 }}>
        {this.props.readonly ? (
          <Row style={{ padding: 0, margin: 0 }}>
            <Col style={{ padding: 0, margin: 0 }}>Answer</Col>
          </Row>
        ) : (
          <Row style={{ padding: 0, margin: 0 }}>
            <Col
              style={{ padding: 4, margin: 0 }}
              xs={{ span: 2 }}
              sm={{ span: 2 }}
              md={{ span: 2 }}
              lg={{ span: 2 }}
              xl={{ span: 2 }}
            >
              <Button
                onClick={this.addRow}
                style={{
                  fontSize: 12,
                  padding: 2,
                  width: "100%",
                  backgroundColor: Constants.SECONDARY,
                  border: `1px solid ${Constants.SECONDARY}`,
                }}
              >
                Row +
              </Button>
            </Col>
            <Col
              style={{ padding: 4, margin: 0 }}
              xs={{ span: 2 }}
              sm={{ span: 2 }}
              md={{ span: 2 }}
              lg={{ span: 2 }}
              xl={{ span: 2 }}
            >
              <Button
                onClick={this.addColumn}
                style={{
                  fontSize: 12,
                  padding: 2,
                  width: "100%",
                  backgroundColor: Constants.SECONDARY,
                  border: `1px solid ${Constants.SECONDARY}`,
                }}
              >
                Col +
              </Button>
            </Col>
            <Col
              style={{ padding: 4, margin: 0 }}
              xs={{ span: 2 }}
              sm={{ span: 2 }}
              md={{ span: 2 }}
              lg={{ span: 2 }}
              xl={{ span: 2 }}
            >
              <Button
                onClick={this.removeRow}
                style={{
                  fontSize: 12,
                  padding: 2,
                  width: "100%",
                  backgroundColor: Constants.PRIMARY,
                  color: Constants.SECONDARY,
                  border: `1px solid ${Constants.SECONDARY}`,
                }}
              >
                Row -
              </Button>
            </Col>

            <Col
              style={{ padding: 4, margin: 0 }}
              xs={{ span: 2 }}
              sm={{ span: 2 }}
              md={{ span: 2 }}
              lg={{ span: 2 }}
              xl={{ span: 2 }}
            >
              <Button
                onClick={this.removeColumn}
                style={{
                  fontSize: 12,
                  padding: 2,
                  width: "100%",
                  backgroundColor: Constants.PRIMARY,
                  color: Constants.SECONDARY,
                  border: `1px solid ${Constants.SECONDARY}`,
                }}
              >
                Col -
              </Button>
            </Col>
            <Col
              style={{ padding: 4, margin: 0 }}
              xs={{ span: 4 }}
              sm={{ span: 4 }}
              md={{ span: 4 }}
              lg={{ span: 4 }}
              xl={{ span: 4 }}
            >
              <Button
                style={{
                  fontSize: 12,
                  padding: 2,
                  width: "100%",
                  backgroundColor: Constants.TERTIARY,
                  color: Constants.SECONDARY,
                  border: `1px solid ${Constants.SECONDARY}`,
                }}
              >{`Dimensions : ${this.state.columns.length} * ${this.state.columns[0].length}`}</Button>
            </Col>
          </Row>
        )}

        <Row style={{ padding: 0, margin: 0 }}>
          <Col style={{ padding: 0, margin: 0 }}>{columns}</Col>
        </Row>
      </Container>
    );
  }
}
