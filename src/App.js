import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassList from './ClassList';
import Repos from './Repos';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
       <div>
         <h1>Front End Cohort</h1>
         <ul role="nav">
           <li><Link to="/classlist">Class List</Link></li>
         </ul>
        {this.props.children}
       </div>
     )
   }
 }

export default App;
