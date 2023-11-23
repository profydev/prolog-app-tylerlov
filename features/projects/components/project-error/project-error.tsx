import React from "react";
import styles from "./project-error.module.scss";

const reloadPage = () => {
  window.location.reload();
};

export function ProjectError() {
  return (
    <div data-testid="error-fetching-project-data">
      <div className={styles.alert}>
        <img
          className={styles.icons}
          src={`/icons/alert-circle.svg`}
          alt="Error icon"
        />
        <span className={styles.message}>
          There was a problem while loading project data
        </span>
        <button className={styles.retry} onClick={reloadPage}>
          Try again{" "}
          <img
            src={`/icons/arrow-right.svg`}
            className="icon"
            alt="Error icon"
          />
        </button>
      </div>
    </div>
  );
}
