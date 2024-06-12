import styles from "./Menu.module.css";

// Your component code here
const Menu = ({ title, tags, amount, id }) => {
  return (
    <div className={styles.app__menu} id={id}>
      <div className={styles.app__menu_description}>
        <p className={styles.app__menu_description_title}>{title || "Coke"}</p>
        <div />
        <p className={styles.app__menu_amount}>{amount || "30"}</p>
      </div>
      <div className={styles.app__menu_sub}>
        <span>{tags}</span>
      </div>
    </div>
  );
};

export default Menu;
