"use client";
import React, { useState } from "react";
import classes from "./button.module.scss";
import cls from "classnames";
import { Loader } from "lucide-react";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  aspect?: "primary" | "secondary" | "tertiary" | "info" | "warning" | "danger";
  components: "icon" | "text";
  enabled?: boolean;
  timeout?: number;
}

const Button = (props: Props) => {
  const components = props.components ? props.components : "text";
  const enabled = props.enabled ? props.enabled : true;
  const aspect = props.aspect ? props.aspect : "secondary";
  const [loading, setLoading] = useState(false);

  const { timeout } = props;

  const deferredClickAction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (timeout) {
      setLoading(true);
      return setTimeout(() => {
        if (!props?.onClick) return;
        props?.onClick(e);
        setLoading(false);
      }, timeout);
    }

    if (!props?.onClick) return;
    return props?.onClick(e);
  };
  return (
    <button
      {...props}
      onClick={(e) => deferredClickAction(e)}
      className={cls(
        classes.button,
        components === "icon" ? classes.withIcon : null,
        aspect === "primary" ? classes.primary : null,
        aspect === "secondary" ? classes.secondary : null,
        aspect === "tertiary" ? classes.tertiary : null,
        aspect === "danger" ? classes.danger : null
      )}
    >
      <div
        className={cls(
          classes.loadingIconWrapper,
          loading ? classes.loadingIconWrapperOpen : null
        )}
      >
        <Loader className={classes.loadingIcon} size={16} />
      </div>
      {props.children}
    </button>
  );
};

export default Button;
