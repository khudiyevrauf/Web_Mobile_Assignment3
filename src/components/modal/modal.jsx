// Modal.jsx

import React from 'react';
import styles from './Modal.module.css';

const Modal = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Create Flashcard</h2>
          <button className={styles.closeButton}>&times;</button>
        </div>
        <div className={styles.content}>
          <label>
            Front Title:
            <input type="text" placeholder="Enter Front Title" />
          </label>
          <label>
            Back Title:
            <input type="text" placeholder="Enter Back Title" />
          </label>
          <label>
            Question:
            <input type="text" placeholder="Enter Question" />
          </label>
          <label>
            Answer:
            <input type="text" placeholder="Enter Answer" />
          </label>
        </div>
        <div className={styles.footer}>
          <button className={styles.closeButton}>Close</button>
          <button className={styles.createButton}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
