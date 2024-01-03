import style from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../store/actions/messageThunk";
import { useRef } from "react";

const Contact = () => {
  const dispatch = useDispatch();

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const textRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      sendMessage({
        name: nameRef.current.value,
        email: emailRef.current.value,
        subject: subjectRef.current.value,
        text: textRef.current.value,
      })
    );
  };

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
              <p>
                Azerbaijan
                <br /> Baku <br />
                ADA University
              </p>
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
          <form action="" id="contact-form" onSubmit={handleSubmit}>
            <h2>Send Message</h2>
            <div className={style.inputBox}>
              <input type="text" required name="" ref={nameRef} placeholder="Full Name"/>
            </div>

            <div className={style.inputBox}>
              <input type="email" required name="" ref={emailRef} placeholder="Email" />
            </div>

            <div className={style.inputBox}>
              <input type="text" required name="" ref={subjectRef} placeholder="Subject"/>
            </div>

            <div className={style.inputBox}>
              <textarea required name="" ref={textRef} placeholder="Type your message..."></textarea>
            </div>

            <div className={style.inputBox}>
              <input type="submit" value="Send" name="" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
