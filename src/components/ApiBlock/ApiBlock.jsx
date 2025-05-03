import styles from "./ApiBlock.module.css";
import api from "../../assets/images/api.png";
import cdn from "../../assets/icons/cdn.png";
import optimization from "../../assets/icons/optimization.png";
import soon from "../../assets/icons/soon.png";

const ApiBlock = () => {
  return (
    <section className={styles.container} id="api">
      <div div className={styles.content}>
        <h2 className={styles.title}>Simple and convenient APIs</h2>
        <p className={styles.additionalText}>
          Built from the ground-up for interoperable authentication.
        </p>
        <p className={styles.additionalText}>
          Fast and easy to implement using our powerful library clients. Asset
          optimization and image transformation coming soon!
        </p>
        <div className={styles.benefitsContainer}>
          <div>
            <img src={cdn} alt="CDN" />
            <p className={styles.benefit}>
              <strong>CDN integration</strong>
            </p>
            <p className={styles.benefit}>
              Serve from the edge to reduce latency.
            </p>
            <img className={styles.imageSoon} src={soon} alt="Coming soon" />
          </div>
          <div>
            <img src={optimization} alt="Optimization" />
            <p className={styles.benefit}>
              <strong>Auto transformation & optimisation</strong>
            </p>
            <p className={styles.benefit}>
              Resize and compress your media before you serve it.
            </p>
            <img className={styles.imageSoon} src={soon} alt="Coming soon" />
          </div>
        </div>
      </div>
      <img className={styles.image} src={api} alt="API" />
    </section>
  );
};

export default ApiBlock;
