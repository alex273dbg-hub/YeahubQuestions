import imageLogo from "@/shared/assets/logo-desctop.svg";
import styles from "./Header.module.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2>
              <Link to="/">
                <img src={imageLogo} alt="Logo" />
              </Link>
            </h2>
            <ul className={styles.nav}>
              <li>
                <a>База вопросов</a>
              </li>
              <li>
                <a>Тренажёр</a>
              </li>
              <li>
                <a>Материалы</a>
              </li>
              <li>
                <a>Навыки (hh)</a>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <button className={styles.login}>Вход</button>
            <button className={styles.register}>Регистрация</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
