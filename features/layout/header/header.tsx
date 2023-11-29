import { useState } from "react";
import styles from "./header.module.scss";

export function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.burgerIcon} onClick={toggleBurger}>
            ☰
          </div>
          <div className={styles.headerLinks}>
            <div className={styles.headerLink}>
              <a href="" className={styles.link}>
                Home
              </a>
            </div>
            <div className={styles.headerLink}>
              <a href="" className={styles.link}>
                Products
              </a>
            </div>
            <div className={styles.headerLink}>
              <a href="" className={styles.link}>
                Documentation
              </a>
            </div>
            <div className={styles.headerLink}>
              <a href="" className={styles.link}>
                Pricing
              </a>
            </div>
            <div
              className={`${styles.burgerMenu} ${
                isBurgerOpen ? styles.open : ""
              }`}
            >
              {/* Burger menu items go here */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
