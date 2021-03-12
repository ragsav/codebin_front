import React from "react";

import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import Constants from "../../constants/constants";

export default class CustomArray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: false,
    };
  }
  componentDidMount() {}

  setArray = (array) => {
    this.setState({
      array: array,
    });
  };
}
