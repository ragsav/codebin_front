
import MainNavBar from "./components/navBar";

import './App.css';
import { Row, Col, Container } from "react-bootstrap";
import EditorTab from "./components/EditorTab";
// import LinkViewer from "./components/unused/LinkViewer";
import CodeViewer from "./components/CodeViewer";
// import CodeViewerInt from "./components/CodeViewerInt";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div
      className="App"
      style={{ overflow: "scroll", backgroundColor: "#f0f6ff" }}
    >
      <Container style={{ padding: 0, height: "100%" }} fluid>
        <Row style={{ padding: 0, margin: 0, width: "100%" }}>
          <Col style={{ padding: 0, margin: 0 }}>
            <MainNavBar></MainNavBar>
          </Col>
        </Row>
        <Row
          style={{ padding: 0, margin: 0, width: "100%", maxHeight: "100%" }}
        >
          <Col style={{ padding: 0, margin: 0 }}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <EditorTab></EditorTab>
                </Route>

                <Route path="/:tid">
                  <CodeViewer></CodeViewer>
                </Route>
                
              </Switch>

              {/* <Col sm={2} style={{ padding: 0 }}>
              <OptionsContainer tabCallback={this.setTab} />
            </Col> */}
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
