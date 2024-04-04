import React from 'react'
import styles from  './ContactForm.module.css'
import Button from '../Button/Button'
import {MdOutlineMessage} from  "react-icons/md";
import { MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {

  const onSubmit = (event) => {
    event.preventDefault();
    
    console.log("name",event.target[0].value);
    console.log("email",event.target[1].value);
    console.log("text",event.target[2].value);
  }
    
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
              {/* <button onClick={onViaCallSubmit}>Hello</button> */}
            <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="26px"/>}/> 
            <Button text="VIA CALL" icon={<MdCall fontSize="26px"/>} />
            </div>
           <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<HiMail fontSize="26px" />}
            />
            <form onSubmit={onSubmit}>
              <div className={styles.form_controller}>
              <label htmlFor ="name">Name</label>
              <input type="text" name="name" />
              </div>
              <div className={styles.form_controller}>
              <label htmlFor ="email">E-Mail</label>
              <input type="email" name="email" />
              </div>
              <div className={styles.form_controller}>
              <label htmlFor ="text">TEXT</label>
              <textarea name="name" rows="8" />
              </div>
              <div style={{
                display: "flex",
                justifyContent:"end"
              }}>
              <Button text="SUBMIT"/>
              </div>
            </form>
        </div>
<div className={styles.contact_image}>
  <img src="contactimages.svg" alt="Girl Holding Telephone" />
</div>
    </section>
  )
}

export default ContactForm