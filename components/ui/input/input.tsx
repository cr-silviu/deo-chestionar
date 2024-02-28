"use client";
import React from "react";
import classes from "./input.module.scss";

type Props = React.ComponentPropsWithoutRef<"input"> & {};

const Input = (props: Props) => {
  return <input {...props} className={classes.input} />;
};

export default Input;
