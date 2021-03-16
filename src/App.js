import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Rou from "./router/";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Rou />
        <Footer />
      </Router>
    </>
  );
}

export default App;
