import React from "react";
import style from "./header.module.css"
import {Link} from 'react-router-dom'

const header = () => {
  return (
    <header className={style.headerFixed}>
      <div className={style.headerLimiter}>
        <h1>
          <Link to="/">
            Assignment<span>3</span>
          </Link>
        </h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/cards">Cards</Link>
          <Link to="/contact" >Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default header;
