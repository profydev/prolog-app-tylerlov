import styles from "./header.module.scss";
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
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
          </div>
        </div>
      </div>
    </header>
  );
}
