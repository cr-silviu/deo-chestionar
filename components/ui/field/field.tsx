"use client";
import React from "react";
import classes from "./field.module.scss";
import Divider from "@/components/ui/divider/divider";
import Label from "@/components/ui/label/label";

import cls from "classnames";

interface IFieldSection extends React.ComponentPropsWithoutRef<"div"> {
  label: string;
}
const FieldSection = (props: IFieldSection) => {
  const { label } = props;
  return (
    <div {...props} className={classes.fieldSectionWrapper}>
      <div className={classes.dataWrapper}>
        <div className={classes.labelWrapper}>
          <Label>{label}</Label>
        </div>
        <div className={classes.fieldsSetWrapper}>{props.children}</div>
      </div>
      <Divider aspect="slim" />
    </div>
  );
};

interface IFieldSet extends React.ComponentPropsWithoutRef<"div"> {
  columnNumber?: number;
}
const FieldSet = (props: IFieldSet) => {
  const columnNumber = props.columnNumber ?? 1;
  return (
    <div
      className={classes.fieldSetWrapper}
      style={{
        //@ts-ignore
        "--template-columns": columnNumber,
      }}
    >
      {props.children}
    </div>
  );
};

interface IField extends React.ComponentPropsWithoutRef<"div"> {
  label: string;
  error?: string;
}
const Field = (props: IField) => {
  const { label, error } = props;
  return (
    <div className={classes.fieldWrapper}>
      <Label>{label}</Label>
      <div className={classes.inputWrapper}>{props.children}</div>
      {error ? <h3 className={classes.errorMessage}>{`* ${error}`}</h3> : null}
    </div>
  );
};

export { FieldSection, FieldSet, Field };
