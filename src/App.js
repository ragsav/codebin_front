import logo from './logo.svg';
import MainForm from "./components/mainForm";
import MainNavBar from "./components/navBar";
import Home from "./components/Home";
import './App.css';
import Footer from './components/footer';

function App() {
  return (
    <div
      className="App"
      style={{
        
         height:  "100vh",
      
         overflow: "hidden",
      
         backgroundColor: "rgb(116, 147, 168)",
     
      }}
    >
      <MainNavBar></MainNavBar>
      <Home></Home>
      
    </div>
  );
}

export default App;
