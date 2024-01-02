import React from "react";
import style from "./header.module.css"

const header = () => {
  return (
    <header className={style.headerFixed}>
      <div className={style.headerLimiter}>
        <h1>
          <a href="#">
            Company<span>logo</span>
          </a>
        </h1>

        <nav>
          <a href="./header.jsx" className={style.selected}>Home</a>
          <a href="#">Cards</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default header;
