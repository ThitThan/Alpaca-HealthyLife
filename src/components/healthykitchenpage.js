import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'

import './dist/bootstrap-4.0.0-beta.2/dist/css/bootstrap.min.css'
import Timsom from '../static/img/ซาลาเปาไส้กุ้งสับ.jpg'
import Kaiob from '../static/img/ไก่อบผลไม้.jpg'
import Rice from "../static/img/ข้าวไรท์เบอรี่มูน+มะม่วงน้ำดอกไม้.jpg" 
import Muffin from "../static/img/bananamuffin.png"
import Bnnt from "../static/img/กล้วยหอมท็อปปิ้ง.jpg"
import Dolly from "../static/img/ดอลลี่อบไส้ผลไม้.jpg"

const healthykitchenpage = () => (

<div>
<div className = "container">
<br/>
<p className = "fontcolorgrey fontsize-45px Akrobat">Healthy Kitchen</p>
<br className = "color-blue"/>
    <div className="row">
        <div className="col-xs-12 col-lg-4" style={{ marginTop: '20px' }}>
            <img className = "fit2" src={Timsom} width = "320px" height = "280px"/>
            <br/><br/>
            <p className = "Nithan text-left fontsize-30px">ซาลาเปากุ้งสับ
            <Link prefetch to="/kitchen/steambuns">
            <button type="button" className="btn float-right Nithan color-button">view more</button>
            </Link>
            </p>
        </div>

        <div className="col-xs-12 col-lg-4" style={{ marginTop: '20px' }}>
            <img className = "fit2" src={Kaiob} width = "320px" height = "280px"/>
            <br/><br/>
            <p className = "Nithan text-left fontsize-30px">ไก่อบผลไม้
            <Link prefetch to="/kitchen/steakchicken.js">
            <button type="button" className="btn pull-right Nithan color-button">view more</button>
            </Link>
            </p>

        </div>
        <br/><br/>
        <div className="col-xs-12 col-lg-4" style={{ marginTop: '20px' }}>
            <img className = "fit2" src = {Rice} width = "320px" height = "280px"/>
            <br/><br/>
            <p className = "Nithan text-left fontsize-30px">ข้าวเหนียวมะม่วง
            <Link prefetch to="/kitchen/riceberry+mango.js">
            <button type="button" className="btn pull-right Nithan color-button">view more</button>
            </Link>
            </p>

        </div>
    </div>
    <br/><br/>
    <div className="row">
        <div className="col-xs-12 col-lg-4" style={{ marginTop: '20px' }}>
            <img className = "fit2" src = {Muffin}  width = "320px" height = "280px"/>
            <br/><br/>
            <p className = "Nithan text-left fontsize-30px">เค้กกล้วยหอม
            <Link prefetch to="/kitchen/bananamuffin">
            <button type="button" className="btn pull-right Nithan color-button">view more</button>
            </Link>
            </p>
        </div>
        <div className="col-xs-12 col-lg-4" style={{ marginTop: '20px' }}>
            <img className = "fit2" src = {Bnnt} width = "320px" height = "280px"/>
            <br/><br/>
            <p className = "Nithan text-left fontsize-30px">กล้วยหอมท็อปปิ้งธัญพืช
            <Link prefetch to="/kitchen/bananatopping.js">
            <button type="button" className="btn pull-right Nithan color-button">view more</button>
            </Link>
            </p>
        </div>
        <div className="col-xs-12 col-lg-4"style={{ marginTop: '20px' }}>
            <img className = "fit2" src = {Dolly} width = "320px" height = "280px"/>
            <br/><br/>
            <p className = "Nithan text-left fontsize-30px">ดอลลี่อบไส้ผลไม้
            <Link prefetch to="/kitchen/dolly.js">
            <button type="button" className="btn pull-right Nithan color-button">view more</button>
            </Link>
            </p>
        </div>
    </div>
</div>
<br/>   
<br />
<Footer/>
</div>
)

export default healthykitchenpage