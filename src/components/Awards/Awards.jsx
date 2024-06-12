import styles from "./Awards.module.css";

const Awards = ({ src, title, text }) => {
  return (
    <div className={styles.app__awards}>
      <div className={styles.app__awards_logo_award}>
        <img src={src} alt="award" />
      </div>
      <div className={styles.app__awards_text}>
        <h5 className="p__cormorant">{title}</h5>
        <p className="p__opensans">{text}</p>
      </div>
    </div>
  );
};

export default Awards;
