import styles from "./Dashboard.module.css";
import dashboard from "../../assets/images/dashboard.png";
import logo from "../../assets/icons/logo.png";
import button from "../../assets/icons/button.png";

const Dashboard = () => {
  return (
    <section className={styles.container}>
      <div className={styles.mainText}>
        <h2 className={styles.title}>
          Sleek dashboard for managing your media
        </h2>
        <p className={styles.introText}>
          A complete Object Explorer so that any of your team can use.
        </p>
        <p className={styles.additionalText}>
          Drag and drop uploading, moving objects, and multiple object
          selection. As easy as working on your desktop.
        </p>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={dashboard} alt="Dashboard" />
          <div className={styles.content}>
            <div>
              <h3 className={styles.subtitleOne}>File previews</h3>
              <p className={styles.text}>
                Preview any media type, including video and audio.
              </p>
            </div>
            <div>
              <h3 className={styles.subtitleTwo}>Check out our example app</h3>
              <div className={styles.profileText}>
                <p className={styles.text}>
                  <strong>Profile management example</strong>
                  <p className={styles.innerText}>
                    Update a user account with public profile information,
                    including uploading a profile image.
                  </p>
                  <div className={styles.createdText}>
                    Created by: <img src={logo} alt="Logo" /> supabase
                  </div>
                </p>
              </div>
              <p className={styles.nextjsText}>nextjs-ts-user-management</p>
              <img className={styles.button} src={button} alt="Button" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
