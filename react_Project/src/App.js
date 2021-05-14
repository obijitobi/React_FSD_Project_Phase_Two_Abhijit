//import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import {BrowserRouter as Router,Link,NavLink,Route,Redirect} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AddEvent from "./components/AddEvent";
import MovieList from "./components/MovieList";
class App extends Component {
  
  render() {
    return (

      <Router>
             <div className="container">
                  <header className="d-flex justify-content-center py-3 border-bottom">
                    <ul className="nav nav-pills">
                      <li className="nav-item"><NavLink to="/home" className="nav-link">Home</NavLink></li> 
                      <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li> 
                      <li className="nav-item"><NavLink to="/MovieList" className="nav-link">MovieList</NavLink></li>   
                      <li className="nav-item"><NavLink to="/AddEvent" className="nav-link">AddEvent</NavLink></li>                     
                      
                    </ul>
                  </header>

            </div >

        <Route path="/" exact render={Home} />
        <Route path="/home" render={Home} />
        <Route path="/contact" render={Contact} />
        <Route path="/AddEvent" component={AddEvent} />
        <Route path="/MovieList" component={MovieList} />
      </Router>
    );
  }
}
export default App;
