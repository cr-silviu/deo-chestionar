"use client";
import React from "react";
import classes from "./input.module.scss";
import { Controller } from "react-hook-form";

type Props = React.ComponentPropsWithoutRef<"input"> & {
  control: any;
  name: string;
  unit?:string
};

const Input = (props: Props) => {

  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <div className={classes.inputWrapper}>
         {props.unit ?
          <span>{props.unit}</span>
        :null 
        }
        <input {...props} className={classes.input} {...field} />
        </div>
      )}
    />
  );
};

export default Input;
