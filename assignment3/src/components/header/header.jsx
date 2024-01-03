import React from "react";
import style from "./header.module.css"
import {Link} from 'react-router-dom'

const header = () => {
  return (
    <header className={style.headerFixed}>
      <div className={style.headerLimiter}>
        <h1>
          <a href="#">
            Assignment<span>3</span>
          </a>
        </h1>

        <nav>
          <a href="/" className={style.selected}>Home</a>
          <a href="#">Cards</a>
          <a href="../../pages/contact/contact.jsx" target="_blank">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default header;
