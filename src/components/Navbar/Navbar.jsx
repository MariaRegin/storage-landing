import styles from "./Navbar.module.css";
import icon from "../../assets/icons/icon.png";
import StartProjectButton from "../StartProjectButton/StartProjectButton";
import { toast } from "react-toastify";

const Navbar = () => {
  const handleSignIn = () => {
    toast.success("Sign in is coming soon!");
  };

  return (
    <nav className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logoWrapper}>
          <img className={styles.icon} src={icon} alt="Icon" />
        </div>
        <ul className={styles.ul}>
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#api">API</a>
          </li>
          <li>
            <a href="#security">Security</a>
          </li>
          <li>
            <a href="#get-started">Get started</a>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <StartProjectButton classname={styles.greenButton}>
          Start your project
        </StartProjectButton>
        <button className={styles.transparentButton} onClick={handleSignIn}>
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
