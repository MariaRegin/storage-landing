import StartProjectButton from "../StartProjectButton/StartProjectButton";
import styles from "./Offer.module.css";

const Offer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Build in a weekend, <strong>scale to millions</strong>
      </p>
      <StartProjectButton classname={styles.button}>
        Start your project
      </StartProjectButton>
    </div>
  );
};

export default Offer;
