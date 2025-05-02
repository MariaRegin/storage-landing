import styles from "./StartProjectButton.module.css";

const StartProjectButton = ({ children, classname = "" }) => {
  const handleClick = () => {
    alert("Start your project!");
  };

  return (
    <button className={`${styles.button} ${classname}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default StartProjectButton;
