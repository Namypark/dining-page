import React from "react";
import { images } from "../../constants";
import styles from "./AboutUs.module.css";
import { SubHeading, Button } from "../../components";

const AboutUs = () => {
  return (
    <div
      className={`${styles.app__aboutus} app__bg flex__center section__padding`}
      id="about"
    >
      <div className={`${styles.app__aboutus_overlay} flex__center`}>
        <img src={images.G} alt="g letter" />
      </div>
      <div className={`${styles.app__aboutus_content} flex__center`}>
        <div className={styles.app__aboutus_content_about}>
          <h1 className="headtext__cormorant">About Us</h1>
          <SubHeading title="" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <Button />
        </div>
        <div className={styles.app__aboutus_img}>
          <img src={images.knife} alt="knife" />
        </div>
        <div className={styles.app__aboutus_content_history}>
          <h1 className="headtext__cormorant">Our History</h1>
          <SubHeading title="" />
          <p className="p__opensans">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <Button text="Know More" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
