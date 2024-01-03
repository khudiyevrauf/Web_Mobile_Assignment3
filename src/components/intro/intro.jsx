import style from "./intro.module.css";
import profilePic from "../../assets/images/IMG-20221220-WA0066.jpg";

const Intro = () => {
  return (
    <div className={style.main}>
      <section className={style.intro}>
        <div>
          <h1>General Introduction</h1>
          <p>
            I&apos;m a{" "}
            <span className={`${style.bold} ${style.blue}`}>Rauf Khudiyev</span>{" "}
            who is student at{" "}
            <span className={style.bold}>ADA University(IT)</span> and{" "}
            <span className={style.bold}>FrontEnd Developer</span>.
          </p>
          <p>
            In this website, you will see works and porjects of mine. Also
            FlashCards page which is main theme of the page.
          </p>
        </div>
        <img
          alt="Profile Image"
          src={profilePic}
          className={style.profilePic}
        />
      </section>
      {/* Projects */}
      <div className={style.categoryName}>My Projects</div> <br />
      <div className={style.cardCategory}>
        <div className={`${style.basicCard} ${style.basicCardAqua}`}>
          <div className={style.cardContent}>
            <span className={style.cardTitle}>Web and Mobile Assignment 1</span>
            <p className={style.cardText}>
              This is standart webpage with html and css which is kind of my
              portfolio.
            </p>
          </div>

          <div className={style.cardLink}>
            <a
              href="https://github.com/khudiyevrauf/khudiyevrauf.github.io"
              title="Read Full"
            >
              <span>Visit Page</span>
            </a>
          </div>
        </div>

        <div className={`${style.basicCard} ${style.basicCardLips}`}>
          <div className={style.cardContent}>
            <span className={style.cardTitle}>Web and Mobile Assignment 2</span>
            <p className={style.cardText}>
              This is webpage with html, css and js, where I fetched products
              from backend and show them. In the webpage, search, filter and
              pagination is alo available.
            </p>
          </div>

          <div className={style.cardLink}>
            <a
              href="https://github.com/khudiyevrauf/Web_Mobile_Assignment2"
              title="Read Full"
            >
              <span>Visit Page</span>
            </a>
          </div>
        </div>

        <div className={`${style.basicCard} ${style.basicCardLight}`}>
          <div className={style.cardContent}>
            <span className={style.cardTitle}>Database Assignment 2</span>
            <p className={style.cardText}>
              In this assignment, you can find some skills regarding to
              database. Creating schemas, Connecting to database using a Java
              application, Implementing CRUD operations, Transaction management
              and Accessing metadata.
            </p>
          </div>

          <div className={style.cardLink}>
            <a
              href="https://github.com/khudiyevrauf/Database_Assignment2"
              title="Read Full"
            >
              <span>Visit GitHub</span>
            </a>
          </div>
        </div>

        <div className={`${style.basicCard} ${style.basicCardDark}`}>
          <div className={style.cardContent}>
            <span className={style.cardTitle}>Web and Mobile Assignment 3</span>
            <p className={style.cardText}>
              In this assignment I have created a react app where you can
              contact me and see flashcards also adding deleting and editing
              them.
            </p>
          </div>

          <div className={style.cardLink}>
            <a
              href="https://github.com/khudiyevrauf/Web_Mobile_Assignment3"
              title="Read Full"
            >
              <span>Visit Page</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
