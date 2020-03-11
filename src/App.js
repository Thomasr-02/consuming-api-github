import React, {Component} from 'react';
import './App.css';
import axios  from 'axios';
import Navbar from './components/Navbar';

function App() {
  this.state = {
    
  }


  return (
    <div className="App">
      <Navbar />
      <div className="container" id="app">
          <div className="card card-body">
            <h1>Pesquisar users do github</h1>
            <p className="lead">Digite o nome do user</p>
            <input id="search" type="text" className="form-control" required />
          </div>        
      </div> 


    </div>
  );
}

export default App;
