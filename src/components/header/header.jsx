import style from "./header.module.css";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <header className={style.headerFixed}>
      <div className={style.headerLimiter}>
        <h1>
          <Link to="/Web_Mobile_Assignment3/">
            Assignment<span>3</span>
          </Link>
        </h1>

        <nav>
          <Link to="/Web_Mobile_Assignment3/">Home</Link>
          <Link to="/Web_Mobile_Assignment3/cards">Cards</Link>
          <Link to="/Web_Mobile_Assignment3/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default header;
