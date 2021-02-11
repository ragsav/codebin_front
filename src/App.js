
import MainNavBar from "./components/navBar";

import './App.css';
import { Row, Col, Container } from "react-bootstrap";
import EditorTab from "./components/EditorTab";
// import LinkViewer from "./components/unused/LinkViewer";
import CodeViewer from "./components/CodeViewer";
import NumberTheoryTab from "./components/NumberTheoryTab";
// import CodeViewerInt from "./components/CodeViewerInt";
import ExponentialMod from "./components/number theory/exponential_mod";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JacobiSymbol from "./components/number theory/jacobi_symbol";
import EulerPsuedoprime from "./components/number theory/euler_psuedoprime";
import JacobiEulerPsuedoprime from "./components/number theory/euler_jacobi_psuedoprime";
import PrimeFactors from "./components/number theory/factors";

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

                <Route exact path="/viewer/:tid">
                  <CodeViewer></CodeViewer>
                </Route>
                <Route exact path="/nt/prime_factors">
                  <PrimeFactors></PrimeFactors>
                </Route>
                <Route exact path="/nt/exponential_mod">
                  <ExponentialMod></ExponentialMod>
                </Route>
                <Route exact path="/nt/jacobi_symbol">
                  <JacobiSymbol></JacobiSymbol>
                </Route>
                <Route exact path="/nt/euler_psuedoprime">
                  <EulerPsuedoprime></EulerPsuedoprime>
                </Route>
                <Route exact path="/nt/jacobi_euler_psuedoprime">
                  <JacobiEulerPsuedoprime></JacobiEulerPsuedoprime>
                </Route>
                <Route exact path="/nt">
                  <NumberTheoryTab></NumberTheoryTab>
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
