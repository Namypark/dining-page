import React from "react";
import images from "../../constants/images";
import styles from "./Chef.module.css";
import { SubHeading } from "../../components";

const Chef = () => {
  return (
    <div
      className={`${styles.app__chef} app__wrapper app__bg section__padding `}
    >
      <div
        className={`${styles.app__chef_img} app__wrapper_img app__wrapper_img-reverse`}
      >
        <img src={images.chef} alt="chef" />
      </div>
      <div className={styles.app__chef_info}>
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <div className={styles.app__chef_info_head}>
          <div className={styles.app__chef_info_head_text}>
            <img src={images.quote} alt="quotes" />
            <p className="p__opensans">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <p className="p__opensans">
            Modi at, eum unde odio consequatur id quasi omnis assumenda a totam
            quaerat corporis, velit porro, obcaecati quod iure? Voluptas,
            ducimus adipisci?
          </p>
        </div>
        <div className={styles.app__chef_info_head_name}>
          <h4>Kevin Luo</h4>
          <p>Chef & Founder</p>
          <img src={images.sign} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
