import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer'
import Chili from '../../static/img/พริก.jpg'


const chilli = () => (
    <div>
        <div className="container">
            <div className="center">
                <p className="head"> พริก เล็กแต่ประโยชน์ไม่เล็ก</p>
                <img className="mc-auto" src= {Chili} width="375px" />
                <br /> <br />
            </div>
            <div>
                <p className="p1"> ประโยชน์ดีๆ ของพริก</p>
                <p className="p2">พริกไม่ว่าสายพันธ์ไหนๆ ก็มีประโยชน์ มีคุณค่าทางอาหาร วิตามิน และแร่ธาตุอยู่มากมาย โดยเฉพาะวิตามินซี (ต้องเป็นพริกสด) เป็นแหล่งของกรด ascorbic ที่ช่วยขยายหลอดเลือด นอกจากนี้ สารสำคัญที่ทำให้เราเผ็ดร้อนเมื่อทานพริกเข้าไปก็คือ แคปไซซิน (capsaicin) แคปไซซินเป็นสารกลุ่มอัลคาลอยด์ ไม่มีสี ไม่มีกลิ่น สามารถทนต่อความร้อน และเย็นได้ พริกจึงไม่สูญเสียความเผ็ดเมื่อนำไปต้ม และแช่แข็ง <br/> สารแคปไซซิน ละลายได้ดีในไขมัน และแอลกอฮอล์ ดังนั้นเมื่อทานอาหารเผ็ดๆ น้ำเปล่า น้ำเย็น จึงไม่ได้ช่วยลดความเผ็ด เพียงแต่ลดอาการแสบร้อน ระคายเคืองในช่องปากเท่านั้น ถ้าพลาดทานพริกเข้าไป ลองหานมสดมารับประทานดู จะช่วยลดความเผ็ดร้อนของพริกลงได้ นอกจากนี้ยังพบ สารต้านอนุมูลอิสระอย่างเบต้าแคโรทีน และ วิตามินเอ มีธาตุเหล็ก ฟอสฟอรัส และ ไนอาซินในพริกอีกด้วย </p>
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

export default chilli