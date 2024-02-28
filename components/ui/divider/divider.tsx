"use client";
import React from "react";
import classes from "./divider.module.scss";
import cls from "classnames";

type Props = React.ComponentPropsWithoutRef<"div"> & {
  orientation?: "vertical" | "horizontal";
  aspect?: "slim" | "thick";
};

const divider = (props: Props) => {
  const { orientation: orientationProp } = props;
  const orientation = orientationProp ?? "horizontal";
  const aspect = props.aspect ?? "thick";
  return (
    <>
      {aspect === "thick" ? (
        <div
          className={cls(
            orientation === "vertical" ? classes.verticalThickDivider : null,
            orientation === "horizontal" ? classes.horizontalThickDivider : null
          )}
        />
      ) : (
        <div
          className={cls(
            orientation === "vertical" ? classes.verticalSlimDivider : null,
            orientation === "horizontal" ? classes.horizontalSlimDivider : null
          )}
        />
      )}
    </>
  );
};

export default divider;
