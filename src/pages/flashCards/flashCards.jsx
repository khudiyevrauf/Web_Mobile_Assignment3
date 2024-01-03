import React from "react";
import style from "./flashCards.module.css";
import FlashCard from "../../components/card/card";
import Modal from "../../components/modal/modal";

const flashCard = () => {
  return (
    <div className={style.cardPage}>
      <div className={style.allCards}>
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
      </div>
      {/* <Modal /> */}
    </div>
  );
};

export default flashCard;
