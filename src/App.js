
import MainNavBar from "./components/navBar";

import './App.css';
import { Row, Col, Container } from "react-bootstrap";
import TextTab from "./components/EditorTab";
import LinkViewer from "./components/LinkViewer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{   overflow:   "scroll"   }}>
      <Container style={{ padding: 0, height: "100%" }} fluid>
        <Row style={{ padding: 0, margin: 0, width: "100%" }}>
          <Col style={{ padding: 0, margin: 0 }}>
            <MainNavBar></MainNavBar>
          </Col>
        </Row>
        <Row
          style={{ padding: 4, margin: 0, width: "100%", maxHeight: "100%" }}
        >
          <Col style={{ padding: 0, margin: 0 }}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <TextTab></TextTab>
                </Route>

                <Route path="/:tid">
                  <LinkViewer></LinkViewer>
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
