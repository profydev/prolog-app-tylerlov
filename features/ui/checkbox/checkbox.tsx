import { useRef, useEffect } from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";

export enum CheckboxSize {
  small = "small",
  medium = "medium",
}

export function Checkbox({
  label = "",
  checked = false,
  indeterminate = false,
  disabled = true,
  size = CheckboxSize.small,
  ...props
}) {
  const classes = classNames(
    styles.checkbox,
    props.className,
    styles[size],
    disabled ? styles.disabled : "",
  );

  const checkboxRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const checkedRef = useRef(checked);

  useEffect(() => {
    const isCheckedAndIndeterminate = checked && indeterminate;
    const checkbox = checkboxRef.current;

    if (isCheckedAndIndeterminate) {
      checkedRef.current = false;
      checkbox.checked = checkedRef.current;
    } else {
      checkbox.checked = checked;
    }

    checkbox.indeterminate = indeterminate;
  }, [indeterminate, checked]);

  return (
    <label className={classes}>
      <input
        type="checkbox"
        defaultChecked={checked}
        disabled={disabled}
        ref={checkboxRef}
        {...props}
      />
      {label}
    </label>
  );
}
