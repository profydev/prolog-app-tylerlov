import React from "react";
import styles from "./loading-anim.module.scss";

export function LoadingAnimation() {
  return (
    <div className={styles.parent} data-testid="loading-spinner">
      <div className={styles.loadingioSpinner}>
        <div className={styles.spinnerContainer}>
          <div className={styles.spinnerDiv}></div>
        </div>
      </div>
    </div>
  );
}
