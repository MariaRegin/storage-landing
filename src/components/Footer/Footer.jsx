import styles from "./Footer.module.css";
import icon from "../../assets/icons/icon.png";
import sun from "../../assets/icons/sun.png";
import moon from "../../assets/icons/moon.png";
import { useTheme } from "../../providers/ThemeProvider/useTheme";

const Footer = () => {
  const { toggleTheme } = useTheme();

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <img className={styles.icon} src={icon} alt="Icon" />
        <p className={styles.text}>© Supabase Inc</p>
      </div>
      <div className={styles.themeContainer}>
        <img src={sun} alt="Light" />
        <button onClick={toggleTheme}>theme</button>
        <img src={moon} alt="Dark" />
      </div>
    </footer>
  );
};

export default Footer;
