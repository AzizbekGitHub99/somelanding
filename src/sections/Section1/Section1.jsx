import Button from "../../components/Button/Button";
import style from "./Section1.module.css";

const Section1 = () => {
  return (
    <section id="Section1">
      <div className={style.hero + " container"}>
        <div className={style["left"]}>
          <h2 className={style["h2"]}>Quality cleaning for your home</h2>
          <p className={style["p"]}>
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className={style["down"]}>
            <Button text="Get a free quote" bg="#0075FF"  />
            <div className={style["phone"]}>
              <img className={style['phone-icon']} src="/images/phone.png" alt="phone" />
              <div>
                <p className={style["p"]}>CALL US NOW</p>
                <h5 className={style["h5"]}>(414) 567 - 2109</h5>
              </div>
            </div>
          </div>
        </div>
        <img src="/images/hero.png" alt="hero" className="right" />
      </div>
    </section>
  );
};

export default Section1;
