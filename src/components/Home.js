import React from 'react'
import './dist/css/bootstrap.css'
import './shared.css'
import In01 from './img/in01.jpg' 
import In02 from './img/in02.jpg' 
import In03 from './img/in03.jpg' 

class Home extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <h1>HEALTHY LIFE</h1>
                {/* <p>u n d e r   c o n s t r u c t i o n</p> */}
                <br/>
    <div  className="container">
        <div  className="container">
            <div className="row">
                <div className="col-4"> <img src={In01} className="fitt"/></div>
                <div className="col-4"><img src={In02} className="fitt"/></div>
                <div className="col-4"><img src={In03} className="fitt"/></div>
            </div>
        </div>
    </div>
            </div>
        );
    }
}

export default Home;
