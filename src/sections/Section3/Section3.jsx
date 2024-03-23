import Button from "../../components/Button/Button";
import style from "./Section3.module.css";

const Section3 = () => {
  return (
    <section id="Section3">
      <div className={style["hero"] + " container"}>
        <div className={style["head"]}>
          <h2 className={style["title"]}>Our Services</h2>
          <Button text="Explore services" bg="#fff" color="#211F54" />
        </div>
        <div className={style["cards"]}>
          <div className={style["card"]}>
            <img
              className={style["card-img"]}
              src="/images/services1.png"
              alt=""
            />
            <div className={style["card-title"]}>House cleaning</div>
            <div className={style["card-subtitle"]}>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </div>
          </div>
          <div className={style["card"]}>
            <img
              className={style["card-img"]}
              src="/images/services2.png"
              alt=""
            />
            <div className={style["card-title"]}>Office cleaning</div>
            <div className={style["card-subtitle"]}>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </div>
          </div>
          <div className={style["card"]}>
            <img
              className={style["card-img"]}
              src="/images/services3.png"
              alt=""
            />
            <div className={style["card-title"]}>Industrial cleaning</div>
            <div className={style["card-subtitle"]}>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </div>
          </div>
        </div>
        <div className={style["advertising"]}>
          <img
            className={style["left"]}
            src="./images/servicesmain.png"
            alt=""
          />
          <div className={style["right"]}>
            <p className={style["subtitle"]}>Covid-19 sanitization</p>
            <p className={style["title"]}>
              We follow guidelines to keep you safe from the COVID-19 virus
            </p>
            <p className={style["descript"]}>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
            <div className={style["foot"]}>
              <Button text="Get a free quote" />
              <div className={style["phone"]}>
                <img
                  className={style["phone-icon"]}
                  src="/images/phone.png"
                  alt="phone"
                />
                <div>
                  <p className={style["p"]}>CALL US NOW</p>
                  <h5 className={style["h5"]}>(414) 567 - 2109</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
