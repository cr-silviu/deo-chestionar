import React from "react";
import classes from "./button.module.scss";
import cls from "classnames";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  aspect?: "primary" | "secondary" | "tertiary" | "info" | "warning" | "danger";
  hasIcon?: boolean;
  enabled?: boolean;
}

const Button = (props: Props) => {
  const hasIcon = props.hasIcon ? props.hasIcon : false;
  const enabled = props.enabled ? props.enabled : true;
  const aspect = props.aspect ? props.aspect : "secondary";
  return (
    <button
      {...props}
      className={cls(
        classes.button,
        hasIcon ? classes.withIcon : null,
        aspect === "primary" ? classes.primary : null,
        aspect === "secondary" ? classes.secondary : null,
        aspect === "tertiary" ? classes.tertiary : null,
        aspect === "danger" ? classes.danger : null
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
