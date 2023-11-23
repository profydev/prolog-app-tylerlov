import styles from "./footer.module.scss";
import packageJson from "package.json";
import Image from "next/image"; // Import the Image component

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.versionNumber}>
            <p> Version: {packageJson.version}</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerLink}>
              <a href="" className={styles.link}>
                Docs
              </a>
            </div>
            <div className={styles.footerLink}>
              <a href="" className={styles.link}>
                API
              </a>
            </div>
            <div className={styles.footerLink}>
              <a href="" className={styles.link}>
                Help
              </a>
            </div>
            <div className={styles.footerLink}>
              <a href="" className={styles.link}>
                Community
              </a>
            </div>
          </div>
          <div className={styles.logoWrap}>
            <Image
              src={"/icons/logo-small.svg"}
              alt="logo"
              className={styles.logo}
              width={23}
              height={33}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
