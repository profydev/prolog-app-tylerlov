import { useRef, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";

export enum CheckboxSize {
  small = "small",
  medium = "medium",
}

type CheckboxProps = {
  label?: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  size?: CheckboxSize;
  className?: string;
};

export function Checkbox({
  label = "",
  checked = false,
  indeterminate = false,
  disabled = true,
  size = CheckboxSize.small,
  ...props
}: CheckboxProps) {
  const classes = classNames(
    styles.checkbox,
    props.className,
    styles[size],
    disabled ? styles.disabled : "",
  );

  const checkboxRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    const isCheckedAndIndeterminate = isChecked && indeterminate;
    const checkbox = checkboxRef.current;

    if (isCheckedAndIndeterminate) {
      setIsChecked(false);
      checkbox.checked = isChecked;
    } else {
      checkbox.checked = isChecked;
    }

    checkbox.indeterminate = indeterminate;
  }, [indeterminate, isChecked]);

  return (
    <label className={classes}>
      <input
        type="checkbox"
        defaultChecked={isChecked}
        disabled={disabled}
        ref={checkboxRef}
        aria-checked={indeterminate ? "mixed" : isChecked}
        {...props}
      />
      {label}
    </label>
  );
}
