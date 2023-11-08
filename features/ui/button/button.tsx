import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptygray = "emptygray",
  error = "error",
}

export enum ButtonState {
  default = "default",
  hover = "hover",
  focused = "focused",
  disabled = "disabled",
}

export enum ButtonIcon {
  leading = "leading",
  trailing = "trailing",
  only = "only",
  none = "none",
}

type ButtonProps = {
  children: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: ButtonIcon;
  state?: ButtonState;
};

export function Button({
  children,
  size = ButtonSize.md,
  color = ButtonColor.primary,
  icon = ButtonIcon.leading,
  state = ButtonState.default,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={classNames(
        styles.button,
        styles[size],
        styles[color],
        styles[state],
        styles[icon],
        props.className,
      )}
    >
      {children}
    </button>
  );
}
