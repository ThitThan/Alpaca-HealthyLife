import React from 'react'
import Footer from '../../components/footer'
import { Link } from 'react-router-dom'
import Chicken from "../../static/img/วิธีทำไก่อบผลไม้.jpg"

const steakchicken = () => (

<div>
<div className = "container">
    <div className = "center">
        <p className = "Nithan fontsize-45px"> ไก่อบผลไม้ </p>
        <img src = {Chicken} width = "450px"/>
    </div>
    <div>
        <br/>
        <p className = "Nithan fontsize-30px">ส่วนผสม</p>
        <p className = "Nithan fontsize-25px">
        1.อกไก่ 1 ชื้น<br/>
        2.มะเขือเทศสับทั้งเม็ด 1/4 ถ้วย<br/>
        3.สับปะรดห่ามๆกำลังเปรี้ยวสับละเอียด 1/4 ถ้วย (ถ้าไม่มีใช้แบบสุกก็ได้)<br/>
        4.ออริกาโน่ 1 ช้อนชา<br/>
        5.พริกไทยดำป่น 1 ช้อนชา<br/>
        6.โรสแมรี่สด 1 กิ่งเล็ก<br/>
        7.เกลือป่น 1/2 ช้อนชา<br/>
        **นำส่วนผสมนวดคลุกเคล้าหมักไว้ 20 นาที<br/>
        </p>
        <p className = "Nithan fontsize-30px">วิธีทำ</p>
        <p className = "Nithan fontsize-25px">
        1.ตั้งกระทะเทฟลอนไฟกลาง นำไก่หมักซอสลงไปกริล #เมนูนี้ไม่ใช้น้ำมัน เพราะจะมีน้ำของมะเขือเทศและสับปะรดออกมาอยู่แล้ว<br/>
        2.กริลจนมะเขือและสับประรดเทศสุกนุ่ม เป็นสีน้ำตาลนิดๆ เนื้อไก่สุก จากนั้นปิดฝากระทะอบให้ระอุหอม เนื้อไก่แห้ง สัก 1-2 นาทีด้วยไฟอ่อน<br/>
        3.เปิดฝาออกมาจะหอมโรสแมรี่ชัดเจน เนื้อไก่จะสุกนุ่มตัวมะเขือเทศและสับปะรดจะให้ความหวานอร่อยแบบธรรมชาติ หอมเครื่องเทศออริกาโน่และเด่นที่โรสแมรี่<br/>
        ทานคู่กับข้าวกล้อง และผักสลัด หรือหาผลไม้ไทยๆเช่นกล้วยน้ำว้ามาทานด้วยเพื่อเพิ่มคุณค่าทางอาหาร<br/>
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

export default steakchicken