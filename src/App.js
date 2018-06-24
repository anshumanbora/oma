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
    return <div className="moto text-right"> BUILT BY ROYALTY OWNERS<br/> FOR ROYALTY OWNERS</div>
}

class App extends Component {
  render() {
    return (
      <div>

          <Navbar/>
          <Logo/>
          {/*<Pipeline/>*/}
          <SeeHow/>
          {/*<OilRig/>*/}
          <Moto/>

          <Footer/>


      </div>
    );
  }
}

export default App;
