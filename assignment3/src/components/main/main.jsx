import React from "react";
import style from "./main.module.css";

const main = () => {
  return (
    <div className={style.main}>
      <section className={style.intro}>
        <div>
        <h1>General Introduction</h1>
        <p>
          I'm a {" "}<span className={`${style.bold} ${style.blue}`}>Rauf Khudiyev</span>{" "} who is student at {" "}
          <span className={style.bold}>ADA University(IT)</span>{" "} and {" "}
          <span className={style.bold}>FrontEnd Developer</span>.
        </p>
        <p>
          In this website, you will see works and porjects of mine. Also FlashCards page which is main theme of the page.
        </p>
        </div>
        <img src="Profile Image" alt="" />
      </section>
    </div>
  );
};

export default main;
