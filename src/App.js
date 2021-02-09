import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import Home from "./component/Home";
import Header from "./common/Header";
import Footer from "./common/Footer";
import ListNews from "./Edition/ListNews";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="ListNews">
          <ListNews></ListNews>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
