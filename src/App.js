import React, { Component } from 'react';
import Footer from './components/Footer';
import './App.css';
import Navbar from "./components/Navbar";


function Logo(){
  return <img className="logo" src={require('./assets/Logo1.png')} />;
}
function Pipeline(){
  return <img className="pipeline" src={require('./assets/Pipeline.png')} />;
}

class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <Logo/>
          <Pipeline/>
          <Footer/>


      </div>
    );
  }
}

export default App;
