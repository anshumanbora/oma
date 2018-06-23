import React, { Component } from 'react';
import Footer from './components/Footer';
import './App.css';
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <Footer/>


      </div>
    );
  }
}

export default App;
