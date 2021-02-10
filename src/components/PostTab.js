import React from "react";
import logo from "../public.png";
import {
  Alert,
  Form,
  Button,
  Card,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { Grid } from "@agney/react-loading";
import CodeViewer from "./CodeViewer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const axios = require("axios");
function toDate(date) {
  var d = new Date(date);
  return d.toTimeString();
}
function PostsList(props) {
  const posts = props.posts[0].message;

  //   console.log(posts[0].message);
  const PostItems = posts.map((post) => (
    <Card
      style={{
        padding: "0% 0% 0% 0%",
        border: "none",
        borderRadius: 0,
        fontSize: "12px",
        color: "#616161",
        fontWeight: "100",
        margin: 1,
      }}
    >
      <Row
        style={{
          margin: 0,
        }}
      >
        <Col
          sm={2}
          style={{
            padding: 4,
            margin: 0,
            textAlign: "center",
          }}
        >
          <a href={`http://localhost:3000/${post._id}`} target="_blank">
            {post.title}
          </a>
        </Col>
        <Col
          sm={6}
          style={{
            padding: 4,
            margin: 0,
            textAlign: "end",
          }}
        >
          {toDate(post.updatedAt)}
        </Col>
        <Col
          sm={2}
          style={{
            padding: 4,
            margin: 0,
            textAlign: "end",
          }}
        >
          {post.isPassword ? "True" : "False"}
        </Col>
        <Col
          sm={2}
          style={{
            padding: 4,
            margin: 0,
            textAlign: "end",
          }}
        >
          {post.editable ? "True" : "False"}
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "#ededed",
          //   width: "100%",
          height: "1px",
          padding: "0% 1% 0% 1%",
          margin: "0px 4px 0px 4px",
        }}
      ></Row>
    </Card>
  ));
  return (
    <Col
      style={{
        padding: 0,
        margin: 0,
      }}
    >
      {PostItems}
    </Col>
  );
}
export default class PostTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      posts: [],
      errors: [],
    };
    this.setLoading = this.setLoading.bind(this);
    this.setPosts = this.setPosts.bind(this);
    this.loadPost = this.loadPost.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  componentDidMount() {
    this.loadPost();
  }
  loadPost = () => {
    var self = this;
    self.setLoading(true);
    axios({
      method: "get",
      headers: { "Content-Type": "application/json" },
      url: "https://copybinback.herokuapp.com/api/public/getLatestPosts/",
    })
      .then(function (response) {
        console.log(response.data);
        self.setPosts([]);
        var newData = self.state.posts.concat([response.data]);

        self.setPosts(newData);
        self.setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  setLoading = (loading) => {
    this.setState({
      loading,
    });
  };

  setPosts = (posts) => {
    this.setState({
      posts: posts,
    });
  };

  handleRefresh = (event) => {
    event.preventDefault();
    this.loadPost();
  };
  render() {
    return (
      <div
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        <Card style={{ padding: 2, margin: 0 }}>
          <Row style={{ padding: 0, margin: 0 }}>
            <Card
              className="textStyleCode"
              style={{
                width: "100%",
                backgroundColor: "#272822",

                border: "none",
                borderRadius: 4,
                padding: "1%",
                fontSize: "13px",
                fontWeight: "500",
                color: "#04e000",
                margin: 4,
              }}
            >
              <Row style={{ padding: 0, margin: 0 }}>
                <Col
                  sm={10}
                  style={{ padding: 0, margin: 0, textAlign: "start" }}
                >
                  Public>Codes
                </Col>
                <Col
                  sm={2}
                  style={{ padding: 0, margin: 0, alignItems: "end" }}
                >
                  <Button
                    variant="success"
                    type="submit"
                    className="mr-1"
                    style={{
                      width: "100%",
                      //   padding: 0,
                      textAlign: "center",
                      fontSize: "9px",
                      float: "center",
                      border: "none",
                      fontWeight: "400",
                      color: "#04e000",
                      boxShadow: "none",
                      backgroundColor: "#272822",
                    }}
                    onClick={this.handleRefresh}
                  >
                    Refresh
                  </Button>
                </Col>
              </Row>
            </Card>
          </Row>
          <Row
            style={{
              width: "100%",
              margin: 0,
              padding: 0,
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            <Col
              sm={2}
              style={{
                padding: "5px",

                color: "rgb(116, 147, 168)",
                margin: 0,
                textAlign: "center",
              }}
            >
              Title
            </Col>
            <Col
              sm={6}
              style={{
                padding: "5px",

                color: "rgb(116, 147, 168)",
                margin: 0,
                textAlign: "end",
              }}
            >
              Last updated
            </Col>
            <Col
              sm={2}
              style={{
                padding: "5px",

                color: "rgb(116, 147, 168)",
                margin: 0,
                textAlign: "end",
              }}
            >
              Password protected
            </Col>
            <Col
              sm={2}
              style={{
                padding: "5px",

                color: "rgb(116, 147, 168)",
                margin: 0,
                textAlign: "end",
              }}
            >
              Editable
            </Col>
          </Row>
          <Row
            style={{
              backgroundColor: "#272822",
              //   width: "100%",
              height: "1px",
              padding: "0% 1% 0% 1%",
              margin: "0px 4px 0px 4px",
            }}
          ></Row>
          <Row style={{ padding: 0, margin: 0 }}>
            {this.state.loading === false ? (
              <PostsList posts={this.state.posts}></PostsList>
            ) : null}
          </Row>
          <div
            style={{
              width: "100%",
              height: "20px",
            }}
          ></div>
        </Card>
      </div>
    );
  }
}
