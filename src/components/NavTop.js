import React from 'react'
import './dist/css/NavTop.css';

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
            navWidth: '100%'
        })
    }

    closeNav() {
        this.setState({
            navWidth: '0%'
        })
    }

    render() {
        return (
            <div>
             <div id="mySidenav" className="sidenav" style={{ width: this.state.navWidth }}>
                 <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                 <a href="#">Home</a>
                 <a href="#">Healthy Kitchen</a>
                 <a href="#">Healthy Facts</a>
                 <a href="#">Calculator</a>
                 <a href="#">About</a>
            </div>
        
            <h2>Animated Sidenav Example Full Width</h2>
            <p>Click on the element below to open the navigation menu.</p>
            
            {/* <p>NavBar is {this.state.text}</p> */}
            <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={this.openNav} >&#9776; open</span>
        
        
        
            </div>
        
        );
    }
}

export default NavTop;
