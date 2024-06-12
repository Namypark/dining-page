import Menu from "./Menu";
import styles from "./SpecialMenu.module.css";
import { SubHeading, Button } from "../../components";
import images from "../../constants/images";
import data from "../../constants/data";
const SpecialMenu = () => {
  return (
    <div
      className={`${styles.app__specialmenu} flex__center section__padding`}
      id="menu"
    >
      <div className={styles.app__specialmenu__header}>
        <SubHeading title="Menu that fits you palatte" />
        <h2 className="headtext__cormorant">Today's Special</h2>
      </div>
      <div className={`${styles.app__specialmenu_content} `}>
        <div className={styles.app__specialmenu_content_wine}>
          <p className={styles.app__specialmenu_content_wine_title}>
            Wine & Beer
          </p>
          <div className={styles.app__specialmenu_menu_container}>
            {data.wines.map((wine, index) => (
              <Menu
                id={wine.title}
                title={wine.title}
                tags={wine.tags}
                amount={wine.price}
                key={wine.title + index + 1}
              />
            ))}
          </div>
        </div>
        <div className={styles.app__specialmenu_content_img}>
          <img src={images.menu} alt="menu-image" />
        </div>
        <div className={styles.app__specialmenu_content_cocktail}>
          <p className={styles.app__specialmenu_content_cocktail_title}>
            Cocktails
          </p>
          <div className={styles.app__specialmenu_menu_container}>
            {data.cocktails.map((cocktail, index) => (
              <Menu
                id={cocktail.title}
                title={cocktail.title}
                tags={cocktail.tags}
                amount={cocktail.price}
                key={cocktail.title + index + 1}
              />
            ))}
          </div>
        </div>
      </div>
      <Button text="View More" />
    </div>
  );
};

export default SpecialMenu;
