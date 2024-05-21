import styles from "./Button.module.css";

// Your component code here

const Button = ({ text, styleName }) => {
  return (
    <button type="button" className={`${styleName} custom__button`}>
      {text || " Explore Now"}
    </button>
  );
};

export default Button;
