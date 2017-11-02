import React from 'react'
import '../../../shared.css'

class Card extends React.Component {
    render() {
        return (
            <div class="col-xs-12 col-lg-4">
                <img className = "fit" src={this.props.src} width = "320px"/>
                <p className = "font-detail">{this.props.detail}</p>
            </div>
        );
    }
}

export default Card