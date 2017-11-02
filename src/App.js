import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';
import './components/dist/css/css-style.css';

import Home from './components/Home';
import HealthyKitchen from './components/healthykitchenpage';
import HealthyFacts from './components/factpage';
import Bmi from './components/Bmi';
import About from './components/About';

// kitchen page
import Kitchenpage from './components/healthykitchenpage'
import Dolly from './components/kitchen/dolly'
import Muffin from './components/kitchen/bananamuffin'
import BananaTopping from './components/kitchen/bananatopping'
import Riceberrymango from './components/kitchen/riceberry+mango'
import Steakchicken from './components/kitchen/steakchicken'
import Steambun from './components/kitchen/steambuns'

// bootstrap 4.0
import './components/dist/bootstrap-4.0.0-beta.2/dist/css/bootstrap.min.css'

// jewStyle
import './static/css/jewStyle.css'


import HeaderLogo from './components/img/header-logo.png'

import SteamBun from './components/healthylife/pages/kitchen/steambuns'

import './components/font-awesome-4.7.0/css/font-awesome.min.css'
// import Bg from './components/img/bgweb.png'
 
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
        this.navLoseFocus = this.navLoseFocus.bind(this);
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

    navLoseFocus() {
        if (this.state.navAlpha === 1.0) {
            this.closeNav();
        }
    }

    render() {
        return (
            <div>
            
                
                <div id="mySidenav" className="sidenav" style={{ width: this.state.navWidth, opacity: this.state.navAlpha }}>
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <Link to='/' onClick={this.closeNav}>Home</Link>
                    <Link to='kitchen' onClick={this.closeNav}>Healthy Kitchen</Link>
                    <Link to='healthy-facts' onClick={this.closeNav}>Healthy Facts</Link>
                    <Link to='bmi-calculator' onClick={this.closeNav}>Calculator</Link>
                    <Link to='about' onClick={this.closeNav}>About</Link>
                </div>
            <div onClick={this.navLoseFocus}>
                {/* <h2>Animated Sidenav Example Full Width</h2>
                <p>Click on the element below to open the navigation menu.</p> */}
                
                {/* <p>NavBar is {this.state.text}</p> */}

                <div className='titleBar'>
                    {/* <span style={{ fontSize: '24px', cursor: 'pointer', marginLeft: '24px', color: '#ffffff' }} onClick={this.openNav} >&#9776;</span> */}
                    <i className='fa fa-bars' aria-hidden='true' style={{ fontSize: '24px', cursor: 'pointer', marginTop: '4px', color: '#ffffff' }} onClick={this.openNav} />
                    <Link to='/'>
                        <img src={HeaderLogo} alt='' height='32px'/>
                    </Link>
                    <div style={{ width: '24px'}}/>
                </div>

                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/kitchen' component={Kitchenpage}/>
                    <Route path='/healthy-facts' component={HealthyFacts}/>
                    <Route path='/bmi-calculator' component={Bmi}/>
                    <Route path='/about' component={About}/>

                    <Route exact path='/kitchen' component={HealthyKitchen} />                    
                    <Route path='/kitchen/steambuns' component={Steambun} />
                    <Route path='/kitchen/dolly' component={Dolly} />
                    <Route path='/kitchen/muffin' component={Muffin} />
                    <Route path='/kitchen/bananaTopping' component={BananaTopping} />
                    <Route path='/kitchen/riceberrymango' component={Riceberrymango} />
                    <Route path='/kitchen/steakchicken' component={Steakchicken} />
                    
                    

                    <Route exact path='/kitchen' component={Kitchenpage} />
                    
                    {/* <Route path='/healthy-kitchen/bananamuffin' component={BananaMuffin} /> */}
                    <Route path='/kitchen/steambun' component={SteamBun} />
                    {/* <Route path='/healthy-kitchen/bananatopping' component={BananaTopping} /> */}

                    
                </Switch>
            </div>
            </div>
            
        );
    }
}

export default NavTop;
