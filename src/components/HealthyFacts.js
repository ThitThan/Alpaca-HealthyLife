import React from 'react'
import './shared.css'

import Hungry from './healthylife/pages/fact/facthungry'
import Footer from '../components/healthylife/pages/components/footer'

class HealthyFacts extends React.Component {
    render() {
        return (
            <div className = "container">
                <Hungry />
            </div> 
        );
    }
}

export default HealthyFacts;
