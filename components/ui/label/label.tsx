import React from "react";
import classes from "./label.module.scss";
import cls from "classnames";

interface ILabel extends React.ComponentPropsWithoutRef<"label"> {}
const Label = (props: ILabel) => {
  return (
    <label {...props} className={cls(classes.label, props.className)}>
      {props.children}
    </label>
  );
};

export default Label;
