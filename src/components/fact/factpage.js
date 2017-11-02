import React from 'react'
import Footer from '../../components/footer'
import { Link } from 'react-router-dom'
import Chili from "../../static/img/พริก(topic).jpg"
import Oganic from "../../static/img/ออร์แกนิก(topic).jpg"
import Protein from "../../static/img/โปรตีน(topic).jpg"
import Hungry from "../../static/img/หิวบ่อย(topic).jpg"
import Kamin from "../../static/img/ขมิ้น(topic).jpg"
import Deas from "../../static/img/สองโรค(topic).jpg"

const factpage = () => (

<div>
<div className = "container">
<p className = "fontcolorgrey fontsize-45px Akrobat">Healthy Fact</p>
<br className = "color-blue"/>
    <div className="row">
        <div className="col-xs-12 col-lg-4">
        <Link prefetch to="/fact/factchilli">
            <img className = "fit2" src = {Chili} width = "320px" height = "250px"/>
            </Link>
            <br/><br/>
            <Link prefetch to="/fact/factchilli">
            <a className = "Nithan  fontsize-25px">พริกเล็ก แต่ประโยชน์ไม่เล็ก</a>
            </Link>
        </div>
        <div className="col-xs-12 col-lg-4">
        <Link prefetch to="/fact/Organic">
            <img className = "fit2" src = {Oganic} width = "320px" height = "250px"/>
            </Link>
            <br/><br/>
            <Link prefetch to="/fact/Organic">
            <a className = "Nithan fontsize-25px">ผลิตภัณฑ์ออแกนิกคืออะไร ?</a>
            </Link>
        </div>
        <br/><br/>
        <div className="col-xs-12 col-lg-4">
        <Link prefetch to="/">
            <img className = "fit2" src = {Protein} width = "320px" height = "250px"/>
            </Link>
            <br/><br/>
            <Link prefetch to="/">
            <a className = "Nithan fontsize-25px">อยากหุ่นสวยและเฟิร์ม ต้องทานโปรตีน</a>
            </Link>
        </div>
    </div>
    <br/>
    <div className="row">
        <div className="col-xs-12 col-lg-4">
        <Link prefetch to="/fact/Hungry">
            <img className = "fit2" src = {Hungry} width = "320px" height = "250px"/>
            </Link>
            <br/><br/>
            <Link prefetch to="/fact/Hungry">
            <a className = "Nithan fontsize-25px">หิวบ่อยสาเหตุมาจากอะไร</a>
            </Link>
        </div>
        <div className="col-xs-12 col-lg-4">
        <Link prefetch to="/fact/Kamin">
            <img className = "fit2" src = {Kamin} width = "320px" height = "250px"/>
            </Link>
            <br/><br/>
            <Link prefetch to="/fact/Kamin">
            <a className = "Nithan fontsize-25px">ขมิ้นชัน อาหารเพื่อสุขภาพ</a>
            </Link>
        </div>
        <div className="col-xs-12 col-lg-4">
            <Link prefetch to="/fact/factdisease">
            <img className = "fit2" src = {Deas} width = "320px" height = "250px"/>
            </Link>
            <br/><br/>
            <Link prefetch to="/fact/factdisease">
            <a className = "Nithan fontsize-25px">ความเหมือนที่แตกต่างของสองโรคนี้</a>
            </Link>
            <br/><br/>
        </div>
    </div>
</div>
<br/>
<Footer/>
</div>




)

export default factpage