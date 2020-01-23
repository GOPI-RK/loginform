import React from 'react';
import './App.css';
import Login from "./components/login/login";
import Home from "./components/home/home";
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom";

function App() {
  return (
    <div>
     
    <Router>
    <Switch> 
    <Route exact path="/" component={Login} />
    <Route path="/Home" component={Home} />
    </Switch> 
  </Router>

       
    </div>
  );
}

export default App;
