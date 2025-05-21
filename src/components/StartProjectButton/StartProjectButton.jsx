import styles from "./StartProjectButton.module.css";
import { toast } from "react-toastify";

const StartProjectButton = ({ children, classname = "" }) => {
  const handleStartProject = () => {
    toast.info("This feature will be available soon!");
  };

  return (
    <button
      className={`${styles.button} ${classname}`}
      onClick={handleStartProject}
    >
      {children}
    </button>
  );
};

export default StartProjectButton;
