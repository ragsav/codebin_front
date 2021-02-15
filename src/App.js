
import MainNavBar from "./components/navBar";

import './App.css';
import { Row, Col, Container } from "react-bootstrap";
import EditorTab from "./components/EditorTab";
// import LinkViewer from "./components/unused/LinkViewer";
import CodeViewer from "./components/CodeViewer";
import Constants from "./constants/constants";
import NumberTheoryTab from "./components/NumberTheoryTab";
// import CodeViewerInt from "./components/CodeViewerInt";
import ExponentialMod from "./components/number theory/functions/exponential_mod";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JacobiSymbol from "./components/number theory/functions/jacobi_symbol";
import EulerPsuedoprime from "./components/number theory/functions/euler_psuedoprime";
import JacobiEulerPsuedoprime from "./components/number theory/functions/euler_jacobi_psuedoprime";
import FermatLittleTheorum from "./components/number theory/functions/fermat_little_theorum";
import PrimeFactors from "./components/number theory/functions/factors";
import FermatPsuedoprime from "./components/number theory/functions/fermat_psuedoprime";
import FermatMod from "./components/number theory/functions/fermat_mod";
import EulerCriterion from "./components/number theory/functions/euler_criterion";
import EulerTotient from "./components/number theory/functions/euler_totient";
import EulerFermatTheorum from "./components/number theory/functions/euler_fermat_theory";
import PollardRho from "./components/number theory/functions/pollard_rho";
import FermatFactorization from "./components/number theory/functions/fermat_factorization";
function App() {
  return (
    <div
      className="App"
      style={{ overflow: "scroll", backgroundColor: Constants.APPBG }}
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
                <Route exact path="/nt/euler_criterion">
                  <EulerCriterion></EulerCriterion>
                </Route>
                <Route exact path="/nt/euler_psuedoprime">
                  <EulerPsuedoprime></EulerPsuedoprime>
                </Route>
                <Route exact path="/nt/jacobi_euler_psuedoprime">
                  <JacobiEulerPsuedoprime></JacobiEulerPsuedoprime>
                </Route>
                <Route exact path="/nt/fermat_little_theorum">
                  <FermatLittleTheorum></FermatLittleTheorum>
                </Route>
                <Route exact path="/nt/fermat_mod">
                  <FermatMod></FermatMod>
                </Route>
                <Route exact path="/nt/fermat_psuedoprime">
                  <FermatPsuedoprime></FermatPsuedoprime>
                </Route>
                <Route exact path="/nt/euler_totient">
                  <EulerTotient></EulerTotient>
                </Route>
                <Route exact path="/nt/euler_fermat_theorum">
                  <EulerFermatTheorum></EulerFermatTheorum>
                </Route>
                <Route exact path="/nt/pollard_rho">
                  <PollardRho></PollardRho>
                </Route>
                <Route exact path="/nt/fermat_factorization">
                  <FermatFactorization></FermatFactorization>
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
