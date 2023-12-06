import React from "react";
import classNames from "classnames";
import styles from "./input.module.scss";
import Image from "next/image";

type InputProps = {
  disabled?: boolean;
  label?: string;
  hint?: string;
  errorMessage?: string;
  showHint?: boolean;
  showError?: boolean;
  showLabel?: boolean;
  iconSrc?: string;
  showIcon?: boolean;
  alertIconSrc?: string;
  showAlertIcon?: boolean;
};

export function Input({
  label,
  hint,
  errorMessage,
  disabled,
  showHint,
  showError,
  showLabel,
  iconSrc,
  showIcon,
  alertIconSrc,
  showAlertIcon,
}: InputProps) {
  return (
    <div className={classNames(styles.inputContainer)}>
      {showLabel && label && (
        <div className={classNames(styles.labelText)}>{label}</div>
      )}
      <div className={classNames(styles.inputBox)}>
        <input
          className={classNames(
            styles.inputField,
            errorMessage || showAlertIcon ? styles.inputFieldAlert : "",
            errorMessage ? styles.inputFieldError : "",
            disabled ? styles.inputFieldDisabled : "",
          )}
          disabled={disabled}
        />
        {showIcon && iconSrc && (
          <div className={classNames(styles.iconContainer)}>
            <Image
              className={classNames(styles.iconImage)}
              height={20}
              width={20}
              src={iconSrc}
              alt="icon"
            />
          </div>
        )}
        {showAlertIcon && (
          <div className={classNames(styles.alertIconContainer)}>
            <Image
              className={classNames(styles.alertIconImage)}
              height={20}
              width={20}
              src={alertIconSrc || "/alert-circle.svg"}
              alt="alert icon"
            />
          </div>
        )}
      </div>
      {showError && errorMessage && (
        <p className={classNames(styles.errorText)}>{errorMessage}</p>
      )}
      {showHint && hint && !errorMessage && (
        <p className={classNames(styles.hintText)}>{hint}</p>
      )}
    </div>
  );
}
