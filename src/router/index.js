import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home";
import News from "../pages/new";
import Contact from "../pages/contact";
import "./index.css";
import Detail from "../pages/detailNew/detail";

function Rou(props) {
  return (
    <div className="container__main" style={{ marginTop: 100 }}>
      <Route exact path="/" component={Home} />
      <Route exact path="/news" component={News} />
      <Route exact path="/detail/:slug" component={Detail} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default Rou;
