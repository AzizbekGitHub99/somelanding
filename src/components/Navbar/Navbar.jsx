import Button from "../Button/Button";
import style from "./Navbar.module.css";
import link from "../../sections/Section5/Section5.module.css";

const Navbar = () => {
  return (
    <div id={style["Navbar"]}>
      <div className={"container " + style["nav"]}>
        <img className={style["logo"]} src="/images/logo.png" alt="logo" />
        <ul className={style["menu"]}>
          <li className={style["li"]}>
            <a className={style["a"]} href="#Section1">
              Home
            </a>
          </li>
          <li className={style["li"]}>
            <a className={style["a"]} href="#Section2">
              About
            </a>
          </li>
          <li className={style["li"]}>
            <a className={style["a"]} href="#Section3">
              Services
            </a>
          </li>
          <li className={style["li"]}>
            <a className={style["a"]} href="#Section4">
              Articles
            </a>
          </li>
          <li className={style["li"]}>
            <a className={style["a"]} href={"#" + link["Section5"]}>
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
