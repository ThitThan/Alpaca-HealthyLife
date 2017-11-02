import React from 'react'
import './shared.css'
import aboutweb from './img/aboutweb.png'

// import Hungry from './healthylife/pages/fact/facthungry'

class About extends React.Component {
    render() {
        return (
            <div>
                <div>
                <img src={aboutweb} className="image1 bg2"/>
                {/* <img src={Aboutphone} className="image2 bg2"/>
                 */}
            </div>
            
                <img src={aboutweb} className="bg"/>
            </div>
        );
    }
}

export default About;
