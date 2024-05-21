import styles from "./Header.module.css";
import images from "../../constants/images";
import { SubHeading, Button } from "../../components";
const Header = () => {
  return (
    <div
      className={`${styles.app__header} app__wrapper section__padding`}
      id="home"
    >
      <div className={styles.app__wrapper_info}>
        <SubHeading title="Chase The New Flavour" />
        <h1 className="headtext__cormorant">The Key To Fine Dining</h1>
        <p className="p__opensans">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <Button />
      </div>
      <div className={styles.app__wrapper_img}>
        <img src={images.welcome} alt="welcome" />
      </div>
    </div>
  );
};

export default Header;
