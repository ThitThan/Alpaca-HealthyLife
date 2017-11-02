import React from 'react'
import './shared.css'
import aboutweb from './img/aboutweb.png'
import Aboutphone from './img/aboutphone.png'



// import Hungry from './healthylife/pages/fact/facthungry'

class About extends React.Component {
    render() {
        return (
            <div>
                <div>
                <img src={aboutweb} className="image1 bg"/>
                <img src={Aboutphone} className="image2 bg"/>
                
            </div>
            
            </div>
        );
    }
}

export default About;
