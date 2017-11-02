import React from 'react'
import Footer from '../../components/footer'
import { Link } from 'react-router-dom'
import Img from '../../static/img/ขมิ้น.jpg'

const kamin =()=> (
<div>
<div className="container">
    <div className="center">
        <p className="head">ขมิ้นชันอาหารเพื่อสุขภาพ</p>
        <img className="mc-auto" src= {Img} width="375px" />
        <br /> <br />
    </div>
    <div>
        <p className="p1">ประโยชน์ดี ๆ ของขมิ้นชัน</p>
        <p className="p2">ในขมิ้นชันนั้น อุดมไปด้วยวิตามิน เอ และ ซี มีคูเคอร์มิน (Curcumin) สารอาหารเหล่านี้จะช่วยลดการเกิดปฏิกิริยาออกซิเดชัน (oxidation)ในร่างกาย ช่วยลดการสะสมไขมันที่ตับ และช่วยลดความเสี่ยงในการเกิดโรคมะเร็ง เสริมสร้างระบบภูมิคุ้มกันให้กับร่างกาย ช่วยลดอาการอักเสบ ฆ่าเชื้อแบคทีเรีย จึงช่วยในการสมานแผล สามารถช่วยบรรเทาอาการแผลเรื้อรัง และเป็นหนองได้ (กรณีใช้ทาภายนอก)</p>
        <p className="p2">นอกจากนี้ ขมิ้นชัน ยังมีประโยชน์ที่โดดเด่นในเรื่องของการรักษาแผลในกระเพาะอาหาร ลำไส้ และระบบย่อยอาหารโดยรวม ช่วยบรรเทาอาการที่เกิดจากโรคกระเพาะอาหาร และกรดไหลย้อนได้ เช่น อาการปวด จุก เสียด แน่นท้อง และช่วยบรรเทาอาการท้องอืด ท้องเฟ้อ และอาการท้องเสียได้</p>
        <div className = "">
        <Link prefetch to="/fact">
        <button type="button" class="btn right Nithan color-button">Back</button><br/><br/>  
        </Link>
        </div>  
    </div>
</div>
<Footer/>
</div>
)

export default kamin
