import Button from "../../components/Button/Button";
import style from "./Section5.module.css";

const Section5 = () => {
  return (
    <section id={style['Section5']}>
      <div className={style["hero"] + " container"}>
        <div className={style["left"]}>
          <h2 className={style["title"]}>Contact Us</h2>
          <p className={style["p"]}>
            In dignissim euismod pretium amet enim a eu nam ut urna accumsan
            pellentesque lacus duis pharetra eutortor.
          </p>
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
          <hr />
          <h4 className={style["h4"]}>Not convinced yet?</h4>
          <p className={style["p"]}>
            Massa bibendum consectetur maurisid gravida purus, dolor dui amet
            morbi non nunc urna purus diam.
          </p>
          <Button text="Browse our packages" bg="#fff" color="#211F54" />
        </div>
        <div className={style['right']}>
          <form className={style["form"]} action="#">
            <div className={style["box"]}>
              <label className={style["label"]} htmlFor="">Full name</label>
              <input className={style["input"]} type="text" />
            </div>
            <div className={style["box"]}>
              <label className={style["label"]} htmlFor="">Phone number</label>
              <input className={style["input"]} type="text" />
            </div>
            <div className={style["box"]}>
              <label className={style["label"]} htmlFor="">Address</label>
              <input className={style["input"]} type="text" />
            </div>
            <div className={style["box"]}>
              <label className={style["label"]} htmlFor="">Email</label>
              <input className={style["input"]} type="text" />
            </div>
            <div className={style["box"]}>
              <label className={style["label"]} htmlFor="">Requested service</label>
              <input className={style["input"]} type="text" />
            </div>
            <div className={style["box"]}>
              <label className={style["label"]} htmlFor="">Day of service</label>
              <input className={style["input"]} type="text" />
            </div>
            <Button text="Submit message"/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section5;
