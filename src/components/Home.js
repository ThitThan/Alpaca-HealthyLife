import React from 'react'
import Slider from 'react-slick'
import './shared.css'
import Fitt from './Fitt'

import In01 from './img/in01.jpg' 
import In02 from './img/in02.jpg' 
import In03 from './img/in03.jpg' 

class Home extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 1 } },
                // { breakpoint: 1024, settings: { slidesToShow: 5 } },
                { breakpoint: 100000, settings: 'unslick' }
                // { breakpoint: 100000, settings: { slidesToShow: 3, infinite: false } }
            ]
          };

        return (
            <div>
                <br/>
                <h1>HEALTHY LIFE</h1>
                {/* <p>u n d e r   c o n s t r u c t i o n</p> */}
                <br/>
    
            {/* <Fitt/> */}
            
                <Slider {...settings} className='row'>
                    <div className="col-4"> <img src={In01} className="fitt"/></div>
                    <div className="col-4"><img src={In02} className="fitt"/></div>
                    <div className="col-4"><img src={In03} className="fitt"/></div>
                </Slider>
            </div>
        );
    }
}

export default Home;
