import React from 'react'
import Slider from 'react-slick'
import './shared.css'
import '../index.css'

import In01 from './img/in01.jpg'
import In02 from './img/in02.jpg'
import In03 from './img/in03.jpg'

import NewsUpdate from './healthylife/pages/components/newupdate.js'
import Footer from '../components/healthylife/pages/components/footer'

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
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 100000, settings: 'unslick' }
                // { breakpoint: 100000, settings: { slidesToShow: 3, infinite: false } }
            ]
          };

        return (
            <div>
                <div className = "container">
                    <br/>
                    <p className = "fontcolorgrey fontsize-45px Akrobat">Healthy Life</p>
                    {/* <p>u n d e r   c o n s t r u c t i o n</p> */}
                    <br/>
        
                {/* <Fitt/> */}
                
                    <Slider {...settings} className='row'>
                        <div className="col-4"> <img src={In01} className="fitt"/></div>
                        <div className="col-4"><img src={In02} className="fitt"/></div>
                        <div className="col-4"><img src={In03} className="fitt"/></div>
                    </Slider>

                    <NewsUpdate />

                    <br />
                    
                </div>
            <Footer />
            </div>
        );
    }
}

export default Home;
