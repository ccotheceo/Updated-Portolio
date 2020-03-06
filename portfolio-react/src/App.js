import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import projects from "./projects.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProjectWrapper from "./components/ProjectWrapper";
import {Layout} from "./components/Layout";

import "./App.css";

class App extends Component {
  state = {
    projects
  };

  render() {
    return (
      <React.Fragment>
           <Router>
        <NavigationBar />
        <Header/>
        <br></br>
        <Layout>
          <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={ProjectWrapper} />
          <Route exact path="/contact" component={Contact} />
          </Switch>
        </Layout>
        
        
        <Footer />
      </Router>
      </React.Fragment>
   
    );
  }
}

export default App;