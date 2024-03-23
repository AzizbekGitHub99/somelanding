import Button from "../../components/Button/Button";
import style from "./Section4.module.css";

const Section4 = () => {
  return (
    <section id="Section4">
      <div className="container">
        <div className={style["head"]}>
          <h2 className={style["title"]}>Articles & resources</h2>
          <div className={style["buttons"]}>
            <Button text="Get a free quote" />
            <Button text="Browse articles" bg="#fff" color="#211F54" />
          </div>
        </div>
        <div className={style["cards"]}>
          <div className={style["card"]}>
            <img
              className={style["card-img"]}
              src="/images/articles1.png"
              alt=""
            />
            <div className={style["card-description"]}>
              <h4 className={style["h4"]}>
                8 best vacuum cleaners to clean any mess for your home in 2022
              </h4>
              <p className={style["p"]}>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className={style["card-end"]}>
                <span className={style["data"]}>Jan 28, 2022</span>
                <span className={style["square"]}></span>
              </div>
            </div>
          </div>
          <div className={style["card"]}>
            <img
              className={style["card-img"]}
              src="/images/articles2.png"
              alt=""
            />
            <div className={style["card-description"]}>
              <h4 className={style["h4"]}>
                How to properly disinfect your phone and other electronics
              </h4>
              <p className={style["p"]}>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className={style["card-end"]}>
                <span className={style["data"]}>Jan 28, 2022</span>
                <span className={style["square"]}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
