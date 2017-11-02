import React from 'react'
import './shared.css'
import aboutweb from './img/aboutweb.png'

// import Hungry from './healthylife/pages/fact/facthungry'

class About extends React.Component {
    render() {
        return (
            <div>
                <img src={aboutweb} className="bg"/>
            </div>
        );
    }
}

export default About;
