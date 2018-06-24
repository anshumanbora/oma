import React,{Component} from 'react';

export default class Navbar extends Component{

    render(){
        return(
            <div className="navbar">
                {/*setting propperties of the navigatin bar*/}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-wrap">
                    {/*button for navbar when screen is small*/}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/*contents of the navbar*/}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link underline" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link underline rise-up-nav" href="#">ROYALTY ADVOCATE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link underline rise-up-nav2" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link underline rise-up-nav3" href="#">CAREERS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link underline rise-up-nav4" href="#">CONTACT US</a>
                            </li>
                        </ul>

                    </div>
                </nav>

            </div>
        )
    }




}
