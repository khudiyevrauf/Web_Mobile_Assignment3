import React from 'react'
import style from "./contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';  

const contact = () => {
  return (
    <section className={style.section}>
      <div className={`${style.container} ${style.row}`}>
        
        <div className={style.contactInfo}>
          <div className={style.contactInfoItem}>
            <div className={style.contactInfoIcon}>
              <FontAwesomeIcon icon={faHome} />
            </div>
            
            <div className={style.contactInfoContent}>
              <h4>Address</h4>
              <p>Azerbaijan<br/> Baku <br/>ADA University</p>
            </div>
          </div>
          
          <div className={style.contactInfoItem}>
            <div className={style.contactInfoIcon}>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            
            <div className={style.contactInfoContent}>
              <h4>Phone</h4>
              <p>+994-50-707-92-44</p>
            </div>
          </div>
          
          <div className={style.contactInfoItem}>
            <div className={style.contactInfoIcon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            
            <div className={style.contactInfoContent}>
              <h4>Email</h4>
             <p>rkhudiyev14126@ada.edu.az</p>
            </div>
          </div>
        </div>
        
        <div className={style.contactForm}>
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div className={style.inputBox}>
              <input type="text" required="true" name="" />
              <span>Full Name</span>
            </div>
            
            <div className={style.inputBox}>
              <input type="email" required="true" name="" />
              <span>Email</span>
            </div>
            
            <div className={style.inputBox}>
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div className={style.inputBox}>
              <input type="submit" value="Send" name="" />
            </div>
          </form>
        </div>
        
      </div>
    </section>
  )
}

export default contact