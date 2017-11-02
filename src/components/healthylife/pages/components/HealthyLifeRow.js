import React from 'react'

// import bootstap from '../../static/css/bootstrap.min.css'
// import '../../static/css/factchilli.css'
// import '../../static/css/Style.css'

import Img1 from "../../static/img/พริก(topic).jpg";
import Img2 from "../../static/img/ออร์แกนิก(topic).jpg";
import Img3 from "../../static/img/หิวบ่อย(topic).jpg";

const newupdate = () => (

<div className = "container">
<h1>Healthy Life</h1>
    <div class="row center">
        <div class="col-xs-12 col-lg-4"><img className = "fit" src={Img1} width = "320px"/><p className = "font-detail">พริกเล็ก แต่ประโยชน์ไม่เล็ก</p></div>
        <div class="col-xs-12 col-lg-4"><img className = "fit" src={Img2} width = "320px"/><p className = "font-detail">ผลิตภัณฑ์ออแกนิกคืออะไร ?</p></div>
        <div class="col-xs-12 col-lg-4"><img className = "fit" src={Img3} width = "320px"/><p className = "font-detail">หิวบ่อยมาจากสาเหตุอะไร ?</p></div>
    </div>
</div>



)
 
export default newupdate