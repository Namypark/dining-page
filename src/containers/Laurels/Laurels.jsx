import images from "../../constants/images";
import styles from "./Laurels.module.css";
import { Awards } from "../../components/";
import { SubHeading } from "../../components";

const Laurels = () => {
  return (
    <div
      className={`app__bg app__wrapper section__padding ${styles.app__laurels}`}
    >
      <div className={styles.logo}>
        <img src={images.logo} alt="logo" />
      </div>
      <div
        className={`flex__center section__padding ${styles.app__laurels_container}`}
      >
        <div className={styles.app__laurel_awards}>
          <SubHeading title="Awards & Recognition" />
          <h1 className="headtext__cormorant">Our Laurels </h1>
          <div className={styles.app__laurel_awards_top}>
            <Awards
              src={images.award01}
              title="Rising Star"
              text="lorem ipsum dolor sit amet, consecteur"
            />
            <Awards
              src={images.award02}
              text="lorem ipsum dolor sit amet, consecteur"
              title="Bib Gourmond"
            />
          </div>
          <div className={styles.app__laurel_awards_top}>
            <Awards
              src={images.award03}
              title="Rising Star"
              text="lorem ipsum dolor sit amet, consecteur"
            />
            <Awards
              src={images.award05}
              text="lorem ipsum dolor sit amet, consecteur"
              title="AA Hospitality"
            />
          </div>
        </div>
        <div className={`app__wrapper_img app__wrapper_img`}>
          <img src={images.laurels} alt="laurel-photo" />
        </div>
      </div>
    </div>
  );
};

export default Laurels;
