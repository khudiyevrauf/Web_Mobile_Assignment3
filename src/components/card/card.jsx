// FlashCard.jsx

import React from "react";
import styles from "./card.module.css";

const FlashCard = () => {
  const flipCard = (event) => {
    const card = event.currentTarget;
    card.classList.toggle(styles.flipped);
  };

  return (
    <div className={styles.flashcard} onClick={flipCard}>
      <div className={`${styles.side} ${styles.front}`}>
        <h3 className={styles.title}>Front Title</h3>
        <p className={styles.text}>Front Question</p>
        <div className={`${styles.actions} ${styles.frontActions}`}>
          <button className={`${styles.actionBtn} ${styles.editBtn}`}>
            Edit
          </button>
          <button className={`${styles.actionBtn} ${styles.deleteBtn}`}>
            Delete
          </button>
        </div>
      </div>
      <div className={`${styles.side} ${styles.back}`}>
        <h3 className={styles.title}>Back Title</h3>
        <p className={styles.text}>Back Answer</p>
        <div className={styles.radioContainer}>
          <span className={styles.title}>Status</span>

          <div className={styles.radio}>
            <input
              type="radio"
              name="radio"
              id="radio1"
              className={styles.radio__input}
              checked
            />
            <label htmlFor="radio1" className={styles.radio__label}>
              Learned
            </label>
          </div>
          <br />
          <div className={styles.radio}>
            <input
              type="radio"
              name="radio"
              id="radio2"
              className={styles.radio__input}
            />
            <label htmlFor="radio2" className={styles.radio__label}>
              Want to Learn
            </label>
          </div>
          <br />
          <div className={styles.radio}>
            <input
              type="radio"
              name="radio"
              id="radio3"
              className={styles.radio__input}
            />
            <label htmlFor="radio3" className={styles.radio__label}>
              Noted
            </label>
          </div>
          <br />
        </div>
        <div className={`${styles.actions} ${styles.backActions}`}>
          <button className={`${styles.actionBtn} ${styles.editBtn}`}>
            Edit
          </button>
          <button className={`${styles.actionBtn} ${styles.deleteBtn}`}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
