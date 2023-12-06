import React, { useState } from "react";
import classNames from "classnames";
import styles from "./select.module.scss";
import Image from "next/image";

type SelectProps = {
  options: string[];
  disabled?: boolean;
  iconSrc?: string;
  label?: string;
  hint?: string;
  errorMessage?: string;
  showIcon?: boolean;
  showHint?: boolean;
  showError?: boolean;
  showLabel?: boolean;
};

export function Select({
  options,
  iconSrc,
  label,
  hint,
  errorMessage,
  disabled,
  showIcon,
  showHint,
  showError,
  showLabel,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>();
  return (
    <div
      onClick={() => !disabled && setIsOpen(!isOpen)}
      className={classNames(styles.selectContainer)}
    >
      {showLabel && label && (
        <div className={classNames(styles.labelText)}>{label}</div>
      )}
      <div
        className={classNames(styles.selectBox, isOpen && styles.selectBoxOpen)}
      >
        <button
          className={classNames(
            styles.selectButton,
            errorMessage ? styles.selectButtonError : "",
            selectedOption === "Select" ? styles.noSelection : "",
            disabled ? styles.selectButtonDisabled : "",
          )}
        >
          <span className={classNames(styles.selectButtonContent)}>
            {showIcon
              ? iconSrc && (
                  <Image
                    className={classNames(styles.iconImage)}
                    height={20}
                    width={20}
                    src={iconSrc}
                    alt="icon"
                  />
                )
              : null}
            {selectedOption}
          </span>
          <Image
            style={{ transform: !isOpen ? "" : "rotate(180deg)" }}
            src="/icons/chevron-down.svg"
            height={20}
            width={20}
            alt="arrow"
          />
        </button>
        <div className={classNames(styles.optionList)}>
          {options.map((item: string, index: number) => (
            <span
              key={index}
              onClick={() => setSelectedOption(item)}
              className={classNames(
                styles.optionItem,
                selectedOption === item && styles.optionItemSelected,
              )}
              data-value={item}
            >
              <div className={classNames(styles.optionItemContent)}>
                {showIcon
                  ? iconSrc && (
                      <Image
                        className={classNames(styles.iconImage)}
                        height={20}
                        width={20}
                        src={iconSrc}
                        alt="icon"
                      />
                    )
                  : null}
                {item}
              </div>
              {selectedOption === item && (
                <Image
                  src="/icons/check.svg"
                  height={20}
                  width={20}
                  alt="check"
                />
              )}
            </span>
          ))}
        </div>
      </div>
      {showHint && hint && !errorMessage && (
        <p className={classNames(styles.hintText)}>{hint}</p>
      )}
      {showError && errorMessage && (
        <p className={classNames(styles.errorText)}>{errorMessage}</p>
      )}
    </div>
  );
}
