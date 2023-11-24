import React, {
  ButtonHTMLAttributes,
  useEffect,
  useRef,
  CSSProperties,
} from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";

export enum CheckboxSize {
  small = "small",
  medium = "medium",
}

export enum CheckboxState {
  default = "default",
  disabled = "disabled",
  indeterminate = "indeterminate",
}

export interface CustomCSS extends CSSProperties {
  "--url-img": string;
  "--url-img-indeterminate": string;
}

type CheckboxProps = {
  label?: string;
  size?: CheckboxSize;
  state?: CheckboxState;
  name?: string;
  checked?: boolean;
};

export function Checkbox({
  label,
  size = CheckboxSize.small,
  state = CheckboxState.default,
  name = "checkbox",
  checked,
  ...props
}: CheckboxProps & ButtonHTMLAttributes<HTMLInputElement>) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const checkboxImgUrl = {
    "--url-img-indeterminate":
      size === CheckboxSize.small
        ? state !== CheckboxState.disabled
          ? "url('/icons/check-partial-small.svg')"
          : "url('/icons/check-partial-small-disabled.svg')"
        : state !== CheckboxState.disabled
        ? "url('/icons/check-partial-medium.svg')"
        : "url('/icons/check-partial-medium-disabled.svg')",

    "--url-img":
      size === CheckboxSize.small
        ? state !== CheckboxState.disabled
          ? "url('/icons/check-small.svg')"
          : "url('/icons/check-small-disabled.svg')"
        : state !== CheckboxState.disabled
        ? "url('/icons/check-medium.svg')"
        : "url('/icons/check-medium-disabled.svg')",
  } as CustomCSS;

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = state === CheckboxState.indeterminate;
    }
  }, [state]);

  return (
    <label
      className={classNames(styles.customLabel, styles[size], styles[state])}
    >
      <input
        {...props}
        type="checkbox"
        className={classNames(styles.customInput, styles[size], styles[state])}
        name={name}
        style={checkboxImgUrl}
        disabled={state === CheckboxState.disabled}
        ref={checkboxRef}
        checked={checked}
      />
      {label}
    </label>
  );
}
