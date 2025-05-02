import styles from "./Header.module.css";
import collage from "../../assets/images/collage.png";
import storage from "../../assets/icons/storage.png";
import interoperable from "../../assets/icons/interoperable.png";
import dependable from "../../assets/icons/dependable.png";
import lightning from "../../assets/icons/lightning.png";
import StartProjectButton from "../StartProjectButton/StartProjectButton";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div>
          <div className={styles.storageContainer}>
            <img className={styles.storageIcon} src={storage} alt="Storage" />
            <p className={styles.storageText}>Storage</p>
          </div>
          <h1 className={styles.title}>
            Store and serve
            <br /> any type of digital content
          </h1>
          <p className={styles.headerText}>
            An open source Object store service with unlimited scalability, for
            <br />
            any file type.
          </p>
          <p className={styles.headerText}>
            With custom policies and permissions that are familiar and easy to
            <br />
            implement.
          </p>
          <StartProjectButton classname={styles.greenButton}>
            Start a project
          </StartProjectButton>
        </div>
        <div>
          <img className={styles.image} src={collage} alt="Collage" />
        </div>
      </div>
      <div className={styles.benefitsContainer}>
        <div>
          <img src={interoperable} alt="Interoperable" />
          <p className={styles.benefit}>
            <strong>Interoperable</strong>
          </p>
          <p className={styles.benefit}>
            Integrates well with the rest of Supabase ecosystem (Auth,
            Postgres).
          </p>
        </div>
        <div>
          <img src={lightning} alt="Lightning" />
          <p className={styles.benefit}>
            <strong>Lightning fast</strong>
          </p>
          <p className={styles.benefit}>
            Thin API server layer that leverages Postgres' permissions and
            performance.
          </p>
        </div>
        <div>
          <img src={dependable} alt="Dependable" />
          <p className={styles.benefit}>
            <strong>Dependable</strong>
          </p>
          <p className={styles.benefit}>
            Enterprise-level scalability and durability.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
