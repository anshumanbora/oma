import React,{Component} from 'react';

export default class SeeHow extends Component{

    render(){
        return(
            <div className="row see-how-wrapper">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 see-how">
                    <div className="slogan underline-slogan text-center"><div className="rise-up-animate">MINERAL RIGHTS OWNERS DESERVE BETTER</div></div>
                    <div className="sub-slogan text-center"><div className="rise-up-animate">Technology that puts your mineral interests front and center.</div></div>
                    <button className="button">SEE HOW</button>
                </div>
                <div className="col-lg-3"></div>

            </div>

        )
    }
}