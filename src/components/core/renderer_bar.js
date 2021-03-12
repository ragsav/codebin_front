import React from "react";

import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import Constants from "../../constants/constants";

export default class RendererBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      speed: 0,
    };
  }
  componentDidMount() {}

  render() {
    return (
      <Card
        style={{
          margin: 4,
          width: "100%",
          borderRadius: 4,
          backgroundColor: Constants.PRIMARY,
          color: Constants.SECONDARY,
          fontSize: 10,
        }}
      >
        <Row style={{ margin: 0, padding: 0 }}>
          <Button
            className="textStyleCode"
            style={{
              fontSize: "13px",
              float: "right",
              border: "none",
              fontWeight: "500",
              paddingLeft: 20,
              paddingRight: 20,
              margin: 4,
              color: Constants.SECONDARY,
              // boxShadow: "1px 3px 1px #9E9E9E",
              backgroundColor: Constants.PRIMARY,
            }}
          >
            {this.props.title}
          </Button>
          <Button
            style={{
              fontSize: "13px",
              float: "right",
              border: "none",
              fontWeight: "500",
              margin: 4,
              color: Constants.TERTIARY,
              // boxShadow: "1px 3px 1px #9E9E9E",
              backgroundColor: Constants.SECONDARY,
            }}
            onClick={(e) => {
              this.props.reload();
            }}
          >
            Generate Random Array
          </Button>

          <Button
            disabled={this.state.playing}
            style={{
              fontSize: "13px",
              float: "right",
              border: "none",
              margin: 4,
              fontWeight: "500",
              color: Constants.TERTIARY,
              // boxShadow: "1px 3px 1px #9E9E9E",
              backgroundColor: Constants.SECONDARY,
            }}
            onClick={(e) => {
              if (this.state.speed === 0) {
                toast.error(`Speed cannot be 0`, {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              } else {
                if (this.state.speed > 5) {
                  toast.warn(
                    `Increased spped may lead to the lagging of colored bars`,
                    {
                      position: "bottom-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                }
                this.setState({
                  playing: true,
                });
                this.props.setPlaying(true);
              }
            }}
          >
            Sort
          </Button>
          <Button
            disabled={this.state.playing}
            style={{
              fontSize: "13px",
              float: "right",
              border: "none",
              margin: 4,
              fontWeight: "500",
              color: Constants.TERTIARY,
              // boxShadow: "1px 3px 1px #9E9E9E",
              backgroundColor: Constants.SECONDARY,
            }}
            onClick={(e) => {
              if (this.state.speed < 10) {
                this.props.setSpeed(4 / (this.state.speed + 1));
                this.setState({
                  speed: this.state.speed + 1,
                });
              }
            }}
          >
            Increase speed
          </Button>
          <Button
            disabled={this.state.playing}
            style={{
              fontSize: "13px",
              float: "right",
              border: "none",
              margin: 4,
              fontWeight: "500",
              color: Constants.SECONDARY,
              // boxShadow: "1px 3px 1px #9E9E9E",
              backgroundColor: Constants.PRIMARY,
            }}
          >
            {this.state.speed}
          </Button>

          <Button
            disabled={this.state.playing}
            style={{
              fontSize: "13px",
              float: "right",
              border: "none",
              margin: 4,
              fontWeight: "500",
              color: Constants.TERTIARY,
              // boxShadow: "1px 3px 1px #9E9E9E",
              backgroundColor: Constants.SECONDARY,
            }}
            onClick={(e) => {
              if (this.state.speed > 0) {
                this.props.setSpeed(this.state.speed - 1);
                this.setState({
                  speed: this.state.speed - 1,
                });
              }
            }}
          >
            Decrease speed
          </Button>
        </Row>
      </Card>
    );
  }
}
