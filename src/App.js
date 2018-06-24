import React, { Component } from 'react';
import Footer from './components/Footer';
import './App.css';
import Navbar from "./components/Navbar";
import SeeHow from "./components/SeeHow";


function Logo(){
  return <img className="logo" src={require('./assets/Logo1.png')} />;
}
function Pipeline(){
  return <img className="pipeline" src={require('./assets/Pipeline.png')} />;
}
function OilRig() {
    return <img className="oilrig" src={require('./assets/Oil-Rig.png')} />;
}
function Moto() {
    return <div className="moto text-right rise-up-moto"> BUILT BY ROYALTY OWNERS<br/> FOR ROYALTY OWNERS</div>
}
function Slanted(){
  return <img className="slanted rise-up-animate3" src={require('./assets/slanted.png')} />;
}

function Dots(){
    return <img className="dots rise-up-animate6" src={require('./assets/Dots.png')} />;
}

class App extends Component {
  render() {
    return (
      <div>
          <div className="content">
            <Navbar/>
            <Logo/>
            <Pipeline/>
            <SeeHow/>
            <Slanted/>
            <Dots/>
            <OilRig/>
            <Moto/>
          </div>
          <div className="before-footer"></div>
          <Footer/>
      </div>
    );
  }
}

export default App;
