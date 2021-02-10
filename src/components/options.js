/* eslint-disable arrow-body-style */

import React from "react";
// import WordTableRow from "./WordTableRow";
import {
  Alert,
  Form,
  Card,
  Row,
  Col,
  Navbar,
  Container,
  Button,
  Table,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
// import Button from "@material-ui/core/Button";

export default class OptionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "Text link generator",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({
      tab: event.target.value,
    });
    this.props.processText(this.state.text);
    event.preventDefault();
  }

  render() {
    return (
      <div className="mr-4" style={{ width: "100%", padding: 0 }}>
        <Card
          style={{
            overflow: "auto",
            margin: 0,
            height: "550px",
            padding: 0,
            borderRadius: 0,
          }}
        >
          <NavLink
            to="/"
            exact
            style={{
              backgroundColor: "white",
              color: "#858585",
              textDecoration: "none",
              fontSize: "small",
              padding: 2,
              display: "inline-block",
            }}
            activeClassName="activeRoute"
            activeStyle={{
              backgroundColor: "#363636",
              color: "#fff",
            }}
          >
            Code editor
          </NavLink>

          <NavLink
            to="/json_editor"
            style={{
              backgroundColor: "white",
              color: "#858585",
              textDecoration: "none",
              fontSize: "small",
              padding: 2,
              display: "inline-block",
            }}
            activeClassName="activeRoute"
            activeStyle={{
              backgroundColor: "#363636",
              color: "#fff",
            }}
          >
            JSON editor
          </NavLink>
          <NavLink
            to="/diff_viewer"
            style={{
              backgroundColor: "white",
              color: "#858585",
              textDecoration: "none",
              fontSize: "small",
              padding: 2,
              display: "inline-block",
            }}
            activeClassName="activeRoute"
            activeStyle={{
              backgroundColor: "#363636",
              color: "#fff",
            }}
          >
            JSON editor
          </NavLink>

          {/* <Col style={{ padding: 0 }}>
            <Button
              onClick={this.handleSubmit}
              variant="outline-dark"
              style={{
                borderRadius: 0,
                border: "none",
                width: "100%",
                fontSize: "10px",
                fontWeight: "600",
              }}
            >
              JSON editor
            </Button>
            <div
              style={{
                borderTop: "1px solid #cccccc ",
              }}
            ></div>
            <Button
              onClick={this.handleSubmit}
              variant="outline-dark"
              style={{
                borderRadius: 0,
                border: "none",
                width: "100%",
                fontSize: "10px",
                fontWeight: "600",
              }}
            >
              Text link generator
            </Button>
            <div
              style={{
                borderTop: "1px solid #cccccc ",
              }}
            ></div>
          </Col> */}
        </Card>
      </div>
    );
  }
}
// ResultsContainer.propTypes = {
//   countedWords: React.PropTypes.array.isRequired,
//   loading: React.PropTypes.bool.isRequired,
// };
