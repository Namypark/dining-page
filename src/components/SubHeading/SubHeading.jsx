import images from "../../constants/images";
import styles from "./SubHeading.module.css";
const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" />
    </div>
  );
};

export default SubHeading;
