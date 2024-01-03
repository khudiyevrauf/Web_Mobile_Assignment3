/* eslint-disable react/prop-types */

import styles from "./modal.module.css";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCard, editCard } from "../../store/actions/cardThunk";
import moment from "moment";

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  header,
  setUpdatedCard,
  handleSort,
  id,
  text,
  question,
  answer,
  description,
}) => {
  const titleRef = useRef();
  const questionRef = useRef();
  const answerRef = useRef();
  const answerTextRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (header == "Create") {
      dispatch(
        addCard({
          text: titleRef.current.value,
          question: questionRef.current.value,
          answer: answerRef.current.value,
          description: answerTextRef.current.value,
          dateTime: moment().format("DD-MM-YYYY hh:mm:ss"),
          status: "Want to Learn",
        })
      );
    } else if (header == "Edit") {
      dispatch(
        editCard({
          id: id,
          text: titleRef.current.value,
          question: questionRef.current.value,
          answer: answerRef.current.value,
          description: answerTextRef.current.value,
          dateTime: moment().format("DD-MM-YYYY hh:mm:ss"),
        })
      );
      setUpdatedCard();
    }
    setIsModalOpen(false);
    setTimeout(() => {
      handleSort();
    }, 1000);
  };

  useEffect(() => {
    if (header == "Edit") {
      titleRef.current.value = text;
      questionRef.current.value = question;
      answerRef.current.value = answer;
      answerTextRef.current.value = description;
    } else if (header == "Create") {
      titleRef.current.value = "";
      questionRef.current.value = "";
      answerRef.current.value = "";
      answerTextRef.current.value = "";
    }
  }, [id, header]);

  return (
    <div className={`${styles.overlay} ${isModalOpen && styles.open}`}>
      <form className={styles.modal} onSubmit={handleSubmit}>
        <div className={styles.header}>
          <h2>Create Flashcard</h2>
          <button
            className={styles.closeButton}
            onClick={() => setIsModalOpen(false)}
          >
            &times;
          </button>
        </div>
        <div className={styles.content}>
          <label>
            Front Title:
            <input type="text" placeholder="Enter Front Title" ref={titleRef} />
          </label>
          <label>
            Back Title:
            <input type="text" placeholder="Enter Back Title" ref={answerRef} />
          </label>
          <label>
            Question:
            <input type="text" placeholder="Enter Question" ref={questionRef} />
          </label>
          <label>
            Answer:
            <input type="text" placeholder="Enter Answer" ref={answerTextRef} />
          </label>
        </div>
        <div className={styles.footer}>
          <button
            className={styles.closeButton}
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
          <button className={styles.createButton} type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
