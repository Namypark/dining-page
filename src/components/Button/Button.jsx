import styles from "./Button.module.css";

// Your component code here

const Button = ({ text }) => {
  return (
    <button type="button" className={`custom__button`}>
      {text || " Explore Now"}
    </button>
  );
};

export default Button;
