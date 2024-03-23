import Button from "../../components/Button/Button";
import style from "./Section2.module.css";

const Section2 = () => {
  return (
    <section id="Section2">
      <div className={style["hero"] + " container"}>
        <h2 className={style["title"]}>About Us</h2>
        <p className={style["subtitle"]}>
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed{" "}
          <br /> neque nisi felis non ultrices massa id egestas quam velit
          pretium nu.
        </p>
        <div className={style["cards"]}>
          <div className={style["card"]}>
            <img
              className={style["card-img"]}
              src="/images/about1.png"
              alt=""
            />
            <div className={style["card-title"]}>1. Schedule online</div>
            <div className={style["card-subtitle"]}>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </div>
          </div>
          <div className={style["card"]}>
            <img
              className={style["card-img"]}
              src="/images/about2.png"
              alt=""
            />
            <div className={style["card-title"]}>2. Pay online easily</div>
            <div className={style["card-subtitle"]}>
              Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
              at nunc.
            </div>
          </div>
          <div className={style["card"]}>
            <img
              className={style["card-img"]}
              src="/images/about3.png"
              alt=""
            />
            <div className={style["card-title"]}>3. Get your house cleaned</div>
            <div className={style["card-subtitle"]}>
              Nunc maecenas sollicitudin metus tellus mattis sed porttitor
              cursus eleifend.
            </div>
          </div>
        </div>
        <div className={style["buttons"]}>
          <Button text="Get a free quote" />
          <Button text="Explore services" bg="#fff" color="#211F54" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
