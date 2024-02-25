"use client";
import { useFlowElementBuilder } from "@/hooks/useFlowElementBuilder";
import React, { useState, useEffect } from "react";
import classes from "./elements-section-component.module.scss";

type Props = {};

import { useAppSelector } from "@/hooks/redux-hooks";

const ElementsSectionComponents = (props: Props) => {
  const elementsList = useFlowElementBuilder();

  return (
    <div className={classes.elementWrapper}>
      {elementsList?.map(
        (
          {
            id,
            metadata,
            status,
            component: Component,
          }: {
            id: string;
            status: string;
            metadata: any;
            component: React.ElementType;
          },
          index: number
        ) => (
          <div className={classes.element} key={index}>
            <Component metadata={metadata} status={status} id={id} />
          </div>
        )
      )}
    </div>
  );
};

export default ElementsSectionComponents;
