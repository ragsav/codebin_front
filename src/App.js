import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import GithubCorner from "react-github-corner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//common imports
import MainNavBar from "./components/common/navBar";
import Footer from "./components/common/footer";
import Home from "./components/home";
import About from "./components/common/about";
import Constants from "./constants/constants";


//number theory imports
import NumberTheoryTab from "./components/sections/number_theory/home";
import ExponentialMod from "./components/sections/number_theory/exponential_mod";
import JacobiSymbol from "./components/sections/number_theory/jacobi_symbol";
import EulerPsuedoprime from "./components/sections/number_theory/euler_psuedoprime";
import JacobiEulerPsuedoprime from "./components/sections/number_theory/euler_jacobi_psuedoprime";
import FermatLittleTheorum from "./components/sections/number_theory/fermat_little_theorum";
import PrimeFactors from "./components/sections/number_theory/factors";
import FermatPsuedoprime from "./components/sections/number_theory/fermat_psuedoprime";
import FermatMod from "./components/sections/number_theory/fermat_mod";
import EulerCriterion from "./components/sections/number_theory/euler_criterion";
import EulerTotient from "./components/sections/number_theory/euler_totient";
import EulerFermatTheorum from "./components/sections/number_theory/euler_fermat_theory";
import PollardRho from "./components/sections/number_theory/pollard_rho";
import FermatFactorization from "./components/sections/number_theory/fermat_factorization";


//linear algebra imports
import LinearAlgebraTab from "./components/sections/linear_algebra/home";
import MatrixInverse from "./components/sections/linear_algebra/inverse";
import MatrixDet from "./components/sections/linear_algebra/determinant";
import MatrixMul from "./components/sections/linear_algebra/multiplication";
import MatrixEigen from "./components/sections/linear_algebra/eigen";
import LinearSystem from "./components/sections/linear_algebra/linear_system";


//data strucutres imports
import DataStructureTab from "./components/sections/data_structures/home";


//algorithms imports
import AlgorithmsTab from "./components/sections/algorithms/home";
import BubbleSort from "./components/sections/algorithms/sorting/bubble-sort/bubble_sort";
import InsertionSort from "./components/sections/algorithms/sorting/insertion-sort/insertion_sort";
import SelectionSort from "./components/sections/algorithms/sorting/selection-sort/selection_sort";
import MergeSort from "./components/sections/algorithms/sorting/merge-sort/merge_sort";
import QuickSort from "./components/sections/algorithms/sorting/quick-sort/quick_sort";
import HeapSort from "./components/sections/algorithms/sorting/heap-sort/heap_sort";


//study materials imports
import StudyTab from "./components/sections/studyMaterial/study_tab";
import SubjectPage from "./components/sections/studyMaterial/subject_page";

import BinarySearch from "./components/sections/algorithms/search/binary-search/binary_search";
import LinearSearch from "./components/sections/algorithms/search/linear-search/linear_search";

import Stack from "./components/sections/data_structures/stack/stack_vis";
import Queue from "./components/sections/data_structures/queue/queue_vis";
import MyChart from "./components/sections/data_structures/array/array_vis";

function App() {
  return (
    <div className="App">
      <GithubCorner
        href="https://github.com/ragsav/codebin_frontend"
        target="_blank"
        direction="left"
        bannerColor="#fff"
        octoColor={Constants.SECONDARY}
      />
      <Container style={{ padding: 0, width: Constants.WIDTH }} fluid>
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
                <Route exact path="/about">
                  <About></About>
                </Route>

                <Route exact path="/nt">
                  <NumberTheoryTab></NumberTheoryTab>
                </Route>
                <Route exact path="/linear_algebra">
                  <LinearAlgebraTab></LinearAlgebraTab>
                </Route>
                <Route exact path="/ds">
                  <DataStructureTab></DataStructureTab>
                </Route>
                <Route exact path="/alg">
                  <AlgorithmsTab></AlgorithmsTab>
                </Route>
                <Route exact path="/study">
                  <StudyTab></StudyTab>
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

                <Route exact path="/alg/sorting/bubble_sort">
                  <BubbleSort></BubbleSort>
                </Route>
                <Route exact path="/alg/sorting/selection_sort">
                  <SelectionSort></SelectionSort>
                </Route>
                <Route exact path="/alg/sorting/insertion_sort">
                  <InsertionSort></InsertionSort>
                </Route>
                <Route exact path="/alg/sorting/quick_sort">
                  <QuickSort></QuickSort>
                </Route>
                <Route exact path="/alg/sorting/merge_sort">
                  <MergeSort></MergeSort>
                </Route>
                <Route exact path="/alg/sorting/heap_sort">
                  <HeapSort></HeapSort>
                </Route>
                <Route exact path="/alg/searching/binary_search">
                  <BinarySearch></BinarySearch>
                </Route>
                <Route exact path="/alg/searching/linear_search">
                  <LinearSearch></LinearSearch>
                </Route>

                <Route exact path="/ds/stack">
                  <Stack></Stack>
                </Route>
                <Route exact path="/ds/queue">
                  <Queue></Queue>
                </Route>

                <Route exact path="/study/dbms">
                  <SubjectPage></SubjectPage>
                </Route>
                <Route exact path="/ds/array">
                  <MyChart></MyChart>
                </Route>
              </Switch>

              {/* <Col sm={2} style={{ padding: 0 }}>
              <OptionsContainer tabCallback={this.setTab} />
            </Col> */}
            </Router>
          </Col>
        </Row>
        <Row
          style={{
            padding: 0,
            margin: 0,
          }}
        >
          <Col
            style={{
              padding: 0,
              margin: 0,
            }}
          >
            <Footer></Footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
