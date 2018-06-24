import React,{Component} from 'react';

export default class SeeHow extends Component{

    render(){
        return(
            <div className="row see-how-wrapper">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 see-how">
                    <div className="slogan underline-slogan text-center">MINERAL RIGHTS OWNERS DESERVE BETTER</div>
                    <div className="sub-slogan text-center">Technology that puts your mineral interests front and center.</div>
                    <button className="button">SEE HOW</button>
                </div>
                <div className="col-lg-3"></div>

            </div>

        )
    }
}