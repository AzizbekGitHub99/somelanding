import style from "./Navbar.module.css";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div id={style["Navbar"]}>
      <div className={"container " + style["nav"]}>
        <img className={style["logo"]} src="/images/logo.png" alt="logo" />
        <ul className={style["menu"]}>
          <li className={style["li"]}>
            <a className={style["a"]} href="#home">
              Home
            </a>
          </li>
          <li className={style["li"]}>
            <a className={style["a"]} href="#about">
              About
            </a>
          </li>
          <li className={style["li"]}>
            <a className={style["a"]} href="#services">
              Services
            </a>
          </li>
          <li className={style["li"]}>
            <a className={style["a"]} href="#articles">
              Articles
            </a>
          </li>
          <li className={style["li"]}>
            <a className={style["a"]} href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div className={style["nav-end"]}>
          <div className={style["cart"]}>Cart (0)</div>
          <Button text="Get a free quote" bg="#0075FF" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
