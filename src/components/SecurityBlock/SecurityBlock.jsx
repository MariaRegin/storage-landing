import styles from "./SecurityBlock.module.css";
import security from "../../assets/images/security.png";

const SecurityBlock = () => {
  return (
    <section className={styles.container}>
      <div div className={styles.content}>
        <h2 className={styles.title}>Integrates natively with Supabase Auth</h2>
        <p className={styles.additionalText}>
          Using Postgres Row Level Security to create Object access rules.
        </p>
        <p className={styles.additionalText}>
          Storage Authorization is built around Postgres so that you can use any
          combination of SQL, Postgres functions, and even your own metadata to
          write policies.
        </p>
      </div>
      <img className={styles.image} src={security} alt="Security" />
    </section>
  );
};

export default SecurityBlock;
