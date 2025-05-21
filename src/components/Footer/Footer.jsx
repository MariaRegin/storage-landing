import styles from "./Footer.module.css";
import icon from "../../assets/icons/icon.png";
import sun from "../../assets/icons/sun.png";
import moon from "../../assets/icons/moon.png";
import { useTheme } from "../../providers/ThemeProvider/useTheme";

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <img className={styles.companyIcon} src={icon} alt="Icon" />
        </div>
        <p className={styles.text}>© Supabase Inc</p>
      </div>
      <div className={styles.themeSwitcher}>
        <img src={sun} alt="Light" className={styles.icon} />
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
            aria-label="Toggle theme"
          />
          <span className={styles.slider}></span>
        </label>
        <img src={moon} alt="Dark" className={styles.icon} />
      </div>
    </footer>
  );
};

export default Footer;
