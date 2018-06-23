import React,{Component} from 'react';

export default class Navbar extends Component{

    render(){
        return(
            <div className="navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ROYALTY ADVOCATE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CAREERS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT US</a>
                            </li>
                        </ul>

                    </div>
                </nav>

            </div>
        )
    }




}
