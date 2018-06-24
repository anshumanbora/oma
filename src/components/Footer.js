import React,{Component} from 'react';


export default class Footer extends Component{

    render(){
        return(
            <div className="footer">
                <div className="row">
                    <div className="col-lg-5">
                        <div><span className="image"><img src={require('../assets/Shape-1.png')} /></span>480-378-3270</div>
                        <div><span className="image"><img src={require('../assets/Shape-2.png')} /></span>SALES@KERSONDYNAMICS.COM</div>
                        <div><span className="image"><img src={require('../assets/Shape-3.png')} /></span>9917 E.BELL RD. STE.120 / SCOTTSDALE, AZ/ 85260</div>
                    </div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-3 text-right">
                        &copy;2017 KERSON DYNAMICS
                    </div>

                </div>

            </div>
        )
    }

}