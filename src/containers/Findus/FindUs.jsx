import { Button, SubHeading } from "../../components";
import { images } from "../../constants";
import styles from "./Findus.module.css";
const FindUs = () => {
  return (
    <div
      className={`app__wrapper section__padding app__bg ${styles.app__findus}`}
    >
      <div className={`section__padding ${styles.app__findus_content}`}>
        <SubHeading title="contact" />
        <h1 className="headtext__cormorant">Find Us</h1>
        <p className={styles.text__cormant}>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <h5 className={styles.header__text}>Opening Hours</h5>
        <p className={styles.date__text}>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className={styles.date__text}>Sat - Sun: 10:00 am - 03:00 am</p>
        <div className={styles.app__button}>
          <Button text="View Us" />
        </div>
      </div>

      <div
        className={`app__wrapper_img app__wrapper_img-reverse ${styles.app__findus_images}`}
      >
        <img src={images.findus} alt="water-image" />
      </div>
    </div>
  );
};

export default FindUs;
