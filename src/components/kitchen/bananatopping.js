import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer'
import Topping from '../../static/img/กล้วยหอมท็อปปิ้ง.jpg'

const bananatopping = () => (

<div>
<div className = "container">
    <div className = "center">
        <p className = "Nithan fontsize-45px"> กล้วยหอมท็อปปิ้งธัญพืช </p>
        <img src = {Topping} width = "450px"/>
    </div>
    <div>
        <br/>
        <p className = "Nithan fontsize-30px">ส่วนผสม</p>
        <p className = "Nithan fontsize-25px">
        1.กล้วยหอม 3 ผล<br/>
        2.เนยถั่วแบบหยาบหรือละเอียดตามชอบ<br/>
        3.เมล็ด Buck wheat คั่วสุก <br/>
        4.งาดำงาขาวคั่วสุก<br/>
        5.อัลมอนด์อบสุก<br/>
        </p>
        <p className = "Nithan fontsize-30px">วิธีทำ</p>
        <p className = "Nithan fontsize-25px">
        ทาเนยถั่วที่กล้วยหอมและโรยธัญพืชที่ชอบ หั่นเสริฟเป็นชิ้นๆ น่ารักน่ารับประทาน แถมสุขภาพดีด้วย<br/>
        รสชาติหวานหอมจากกล้วยหอมกรอบมันจากธัญพืช เป็นอีกเมนูที่ทุกๆคนจะต้องชื่นชอบ <br/>
        </p>
        <Link prefetch to="/kitchen">
        <a>
        <button type="button" className="btn ml-auto Nithan color-button">Back</button>
        </a>
        </Link>
        <br/>
        <br/>
    </div>
</div>
<Footer/>
</div>

)

export default bananatopping