import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';

import Home from './components/Home';
import HealthyKitchen from './components/HealthyKitchen';

import HeaderLogo from './components/img/header-logo.png'

import './components/font-awesome-4.7.0/css/font-awesome.min.css'

// const openNav = () => {
//     // document.getElementById("mySidenav").style.width = "100%
// }

// const closeNav = () => {
//     // document.getElementById("mySidenav").style.width = "0";
// }

class NavTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navWidth: '0%'
        };

        // Fix the 'this' keyword for these functions
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    openNav() {
        this.setState({
            navWidth: '320px',
            navAlpha: 1.0
        })
    }

    closeNav() {
        this.setState({
            navWidth: '0px',
            navAlpha: 0.0
        })
    }

    render() {
        return (
            <div style={{ background: '#f6f6f6' }}>
                <div id="mySidenav" className="sidenav" style={{ width: this.state.navWidth, opacity: this.state.navAlpha }}>
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <Link to='/' onClick={this.closeNav}>Home</Link>
                    <Link to='healthy-kitchen' onClick={this.closeNav}>Healthy Kitchen</Link>
                    <Link to='healthy-facts' onClick={this.closeNav}>Healthy Facts</Link>
                    <Link to='bmi-calculator' onClick={this.closeNav}>Calculator</Link>
                    <Link to='about' onClick={this.closeNav}>About</Link>
                </div>
            
                {/* <h2>Animated Sidenav Example Full Width</h2>
                <p>Click on the element below to open the navigation menu.</p> */}
                
                {/* <p>NavBar is {this.state.text}</p> */}

                <div className='titleBar'>
                    {/* <span style={{ fontSize: '24px', cursor: 'pointer', marginLeft: '24px', color: '#ffffff' }} onClick={this.openNav} >&#9776;</span> */}
                    <i className='fa fa-bars' aria-hidden='true' style={{ fontSize: '24px', cursor: 'pointer', marginTop: '4px', color: '#ffffff' }} onClick={this.openNav} />
                    <img src={HeaderLogo} alt='' height='32px'/>
                </div>

                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/healthy-kitchen' component={HealthyKitchen}/>
                </Switch>
            </div>
        );
    }
}

export default NavTop;
