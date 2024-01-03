/* eslint-disable react/prop-types */
import styles from "./card.module.css";
import { useDispatch } from "react-redux";
import { deleteCard, updateStatus } from "../../store/actions/cardThunk";

const FlashCard = ({
  handleOpenModal,
  setUpdatedCard,
  id,
  text,
  question,
  answer,
  description,
  status,
  isSelected,
  handleSelectedCard,
}) => {
  const flipCard = (event) => {
    const card = event.currentTarget;
    card.classList.toggle(styles.flipped);
  };

  const dispatch = useDispatch();

  const handleStatus = (e) => {
    dispatch(updateStatus({ id: id, status: e.target.value }));
  };

  const statuses = ["Learned", "Want to Learn", "Noted"];

  const handleEdit = () => {
    handleOpenModal("Edit");
    setUpdatedCard({
      id: id,
      text: text,
      question: question,
      answer: answer,
      description: description,
    });
  };

  const handleDelete = () => {
    if (confirm("Are you sure?")) {
      dispatch(deleteCard({ id: id }));
    }
  };

  return (
    <div className={styles.flashcard} onClick={flipCard}>
      <div className={`${styles.side} ${styles.front}`}>
        <h3 className={styles.title}>{text}</h3>
        <p className={styles.text}>{question}</p>
        <div className={`${styles.actions} ${styles.frontActions}`}>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => handleSelectedCard(id)}
          />
          <button
            className={`${styles.actionBtn} ${styles.editBtn}`}
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className={`${styles.actionBtn} ${styles.deleteBtn}`}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      <div className={`${styles.side} ${styles.back}`}>
        <h3 className={styles.title}>{answer}</h3>
        <p className={styles.text}>{description}</p>
        <div className={styles.radioContainer}>
          <span className={styles.title}>Status</span>
          {statuses.map((s) => {
            if (s == status) {
              return (
                <>
                  <div className={styles.radio}>
                    <input
                      type="radio"
                      name={`radio-${id}`}
                      className={styles.radio__input}
                      value={s}
                      defaultChecked
                      onClick={handleStatus}
                    />
                    <label htmlFor="radio" className={styles.radio__label}>
                      {s}
                    </label>
                  </div>
                  <br />
                </>
              );
            } else {
              return (
                <>
                  <div className={styles.radio}>
                    <input
                      type="radio"
                      name={`radio-${id}`}
                      className={styles.radio__input}
                      value={s}
                      onClick={handleStatus}
                    />
                    <label htmlFor="radio" className={styles.radio__label}>
                      {s}
                    </label>
                  </div>
                  <br />
                </>
              );
            }
          })}
        </div>
        <div className={`${styles.actions} ${styles.backActions}`}>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => handleSelectedCard(id)}
          />
          <button
            className={`${styles.actionBtn} ${styles.editBtn}`}
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className={`${styles.actionBtn} ${styles.deleteBtn}`}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
