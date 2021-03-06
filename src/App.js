
import MainNavBar from "./components/navBar";

import './App.css';
import { Row, Col, Container } from "react-bootstrap";
import Home from "./components/home";

import Constants from "./constants/constants";
// import EncryptDecrypt from "./components/encrypt decrypt/encrypt_decrypt";
import NumberTheoryTab from "./components/number theory/NumberTheoryTab";
import LinearAlgebraTab from "./components/linear algebra/linear_algebra";
// import CodeViewerInt from "./components/CodeViewerInt";
import ExponentialMod from "./components/number theory/exponential_mod";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JacobiSymbol from "./components/number theory/jacobi_symbol";
import EulerPsuedoprime from "./components/number theory/euler_psuedoprime";
import JacobiEulerPsuedoprime from "./components/number theory/euler_jacobi_psuedoprime";
import FermatLittleTheorum from "./components/number theory/fermat_little_theorum";
import PrimeFactors from "./components/number theory/factors";
import FermatPsuedoprime from "./components/number theory/fermat_psuedoprime";
import FermatMod from "./components/number theory/fermat_mod";
import EulerCriterion from "./components/number theory/euler_criterion";
import EulerTotient from "./components/number theory/euler_totient";
import EulerFermatTheorum from "./components/number theory/euler_fermat_theory";
import PollardRho from "./components/number theory/pollard_rho";
import FermatFactorization from "./components/number theory/fermat_factorization";



// import { Matrix } from "./components/linear algebra/matrix_input";
import MatrixInverse from "./components/linear algebra/inverse";
import MatrixDet from "./components/linear algebra/determinant";
import MatrixMul from "./components/linear algebra/multiplication";
import MatrixEigen from "./components/linear algebra/eigen";
import LinearSystem from "./components/linear algebra/linear_system";

function App() {
  return (
    <div
      className="App"
      style={{
        overflow: "scroll",
        backgroundColor: Constants.PRIMARY,
        padding: 10,
      }}
    >
      <Container style={{ padding: 0, height: "100%" }} fluid>
        <Row
          style={{ padding: 0, margin: 0, width: "100%", maxHeight: "100%" }}
        >
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
                  <Home></Home>
                </Route>
                
                <Route exact path="/linear_algebra">
                  <LinearAlgebraTab></LinearAlgebraTab>
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

                <Route exact path="/linear_algebra/matrix_inverse">
                  <MatrixInverse></MatrixInverse>
                </Route>
                <Route exact path="/linear_algebra/matrix_determinant">
                  <MatrixDet></MatrixDet>
                </Route>
                <Route exact path="/linear_algebra/matrix_multiplication">
                  <MatrixMul></MatrixMul>
                </Route>
                <Route exact path="/linear_algebra/matrix_eigen">
                  <MatrixEigen></MatrixEigen>
                </Route>
                <Route exact path="/linear_algebra/mat_linear_system">
                  <LinearSystem></LinearSystem>
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
