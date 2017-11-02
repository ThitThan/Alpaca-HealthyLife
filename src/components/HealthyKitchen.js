import React from 'react'
import './shared.css'

// import Hungry from './healthylife/pages/fact/facthungry'
import ImgBananaMuffin from './healthylife/static/img/bananamuffin.png'
import ImgBananaTopping from './healthylife/static/img/กล้วยหอมท็อปปิ้ง.jpg'
import ImgDolly from './healthylife/static/img/วิธีทำดอลลี่อบไส้ผลไม้.jpg'
import ImgRiceberryMango from './healthylife/static/img/ข้าวไรท์เบอรี่มูน+มะม่วงน้ำดอกไม้.jpg'
import ImgSteakChicken from './healthylife/static/img/ไก่อบผลไม้.jpg'
import ImgSteamBuns from './healthylife/static/img/วิธีทำซาลาเปา.jpg'

import Card from './healthylife/pages/components/KitchenCard.js'

class HealthyKitchen extends React.Component {
    render() {
        return (
            <div className = "container">
                <h1>HEALTHY KITCHEN</h1>
                <div class="row center">
                    <Card src={ImgBananaMuffin} detail='Banana Muffin'/>
                    {/* <div class="col-xs-12 col-lg-4">
                        <img className = "fit" src={ImgBananaMuffin} width = "320px"/>
                        <p className = "font-detail">พริกเล็ก แต่ประโยชน์ไม่เล็ก</p>
                    </div> */}
                    {/* <div class="col-xs-12 col-lg-4"><img className = "fit" src={Img2} width = "320px"/><p className = "font-detail">ผลิตภัณฑ์ออแกนิกคืออะไร ?</p></div> */}
                    {/* <div class="col-xs-12 col-lg-4"><img className = "fit" src={Img3} width = "320px"/><p className = "font-detail">หิวบ่อยมาจากสาเหตุอะไร ?</p></div> */}
                </div>
            </div>
        );
    }
}

export default HealthyKitchen;
