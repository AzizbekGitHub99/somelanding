import Button from "../Button/Button";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div id={style["Footer"]}>
      <div className={style["hero"] + " container"}>
        <div className={style["col"]}>
          <h3 className={style["h3"]}>Quality cleaning for your home</h3>
          <p className={style["p"]}>
            Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.
          </p>
        </div>
        <div className={style["col"]}>
          <h4 className={style["h4"]}>Contact us</h4>
          <p className={style["p"]}>
            1827 Nickel Road, Los Angeles, CA, 90017, United States
          </p>
          <p className={style["p"]}>(414) 567 - 2109</p>
          <p className={style["p"]}>contact@cleaning.com</p>
        </div>
        <div className={style["col"]}>
          <h4 className={style["h4"]}>Hours</h4>
          <h5 className={style["h5"]}>Monday to Friday</h5>
          <p className={style["p"]}>6:00 AM - 9:00 PM</p>
          <h5 className={style["h5"]}>Saturday & Sunday</h5>
          <p className={style["p"]}>8:00 AM - 8:00 PM</p>
        </div>
        <div className={style["col"]}>
          <h4 className={style["h4"]}>Get a free estimate</h4>
          <h2 className={style["h2"]}>(414) 567 - 2109</h2>
          <p className={style["p"]}>
            Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.
          </p>
          <Button text="Request a free quote" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
