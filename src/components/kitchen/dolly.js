import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer'
import Dolly from '../../static/img/วิธีทำดอลลี่อบไส้ผลไม้.jpg'

const dolly = () => (

<div>
<div className = "container">
    <div className = "center">
        <p className = "Nithan fontsize-45px"> ดอลลี่อบไส้ผลไม้ </p>
        <img src = {Dolly} width = "450px"/>
    </div>
    <div>
        <br/>
        <p className = "Nithan fontsize-30px">ส่วนผสม</p>
        <p className = "Nithan fontsize-25px">
        1.ปลาดอลลี่ 1 ชิ้น<br/>
        2.สับประรดห่ามๆหั่นชิ้นบางๆ 1/2 ถ้วย<br/>
        3.แอปเปิ้ลแดงหั่นชิ้นบางๆ 1/2 ถ้วย<br/>
        4.ด้ายสำหรับพันปลา<br/>
        5.ผักลวกตามชอบ<br/>
        </p>
        <p className = "Nithan fontsize-30px">วิธีทำ</p>
        <p className = "Nithan fontsize-25px">
        1.นำสับปะรดกับแอปเปิ้ลกริลในกระทะเทฟลอนจนแห้ง หรืออบอุณหภูมิ 160 องศานาน 5  นาที<br/>
        2.นำใส้ผลไม้ไปวางบนชิ้นปลาดอลลี่แล้วค่อยๆม้วน ใช้ด้ายเย็บผ้าผูกให้ไม่หลุดแยกออก <br/>
        3.นำชิ้นปลาที่ม้วนแล้วใส่ถ้วยเล็กๆ นำเข้าอบ อุณหภูมิ 190 องศานาน 12-15  นาที หรือจนเนื้อปลาสุก<br/>
        4.ตัดด้านออก และหั่นเป็นสองชิ้น เสริฟพร้อมผักลวก <br/>
        #เนื้อปลาจะเค็มนิดๆใส้ผลไม้จะเกรียมหอมรสชาติหวานเปรี้ยวเข้ากับเนื้อปลาที่เค็มอ่อนๆตามธรรมชาติทานแล้วเข้ากันแบบที่สุด<br/>
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

export default dolly