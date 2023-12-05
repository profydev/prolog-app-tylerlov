import React, { useState } from "react";
import ReactSelect, { components, OptionProps } from "react-select";
import styles from "./select.module.scss";

const Option = (
  props: OptionProps<{ value: string; label: string }, false>,
) => {
  const { isSelected, label } = props;
  return (
    <components.Option {...props}>
      <div className={styles.checkmark}>{isSelected && <span>✔️</span>}</div>
      {label}
    </components.Option>
  );
};

interface SelectProps {
  options: { value: string; label: string }[];
  icon?: JSX.Element;
  label?: string;
  hint?: string;
  errorMessage?: string;
  className?: string;
  isDisabled?: boolean;
  isHintVisible?: boolean;
  isErrorMessageVisible?: boolean;
}

export function Select({
  options,
  icon,
  label,
  hint,
  errorMessage,
  className,
  isDisabled = false,
  isHintVisible = true,
  isErrorMessageVisible = true,
}: SelectProps) {
  const [value, setValue] = useState<{ value: string; label: string } | null>(
    null,
  );

  return (
    <div className={className}>
      <div className={styles.selectContainer}>
        {label && <label className={styles.selectLabel}>{label}</label>}
        <div className={styles.selectWrapper}>
          <ReactSelect
            options={options}
            classNamePrefix="select"
            isDisabled={isDisabled}
            value={value}
            onChange={setValue}
            styles={{
              control: (base) => ({
                ...base,
                width: 320,
                height: 44,
              }),
            }}
            components={{
              Option,
              IndicatorSeparator: () => null, // remove default separator
              SingleValue: ({ children }) => (
                <div className={styles.icon}>
                  {icon && <div className={styles.icon}>{icon}</div>}
                  {children}
                </div>
              ),
            }}
          />
          {(hint || errorMessage) && (
            <div className={styles.selectMessages}>
              {hint && (
                <span
                  className={`${styles.hint} ${
                    !isHintVisible ? styles.hidden : ""
                  }`}
                >
                  {hint}
                </span>
              )}
              {errorMessage && (
                <span
                  className={`${styles.error} ${
                    !isErrorMessageVisible ? styles.hidden : ""
                  }`}
                >
                  {errorMessage}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
