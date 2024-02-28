"use client";
import { useFlowElementBuilder } from "@/hooks/useFlowElementBuilder";
import React, { useState } from "react";
import classes from "./elements-section-component.module.scss";
import cls from "classnames";

import Divider from "@/components/ui/divider/divider";

import { CheckCircle, CircleEllipsis } from "lucide-react";

import { BuildingBlocks, FlowType } from "@/types/blockTypes";

const ElementsRenderingComponent = (props: IElement) => {
  const [cardOpen, setCardOpen] = useState<boolean>(true);
  const { metadata, status, component: Component } = props;

  return (
    <div className={classes.componentWrapper}>
      <button
        className={classes.titleWrapper}
        onClick={() => setCardOpen(!cardOpen)}
      >
        <h3>{metadata.title}</h3>
        {status === "complete" ? (
          <CheckCircle className={classes.checkIcon} />
        ) : (
          <CircleEllipsis className={classes.waitingActionIcon} />
        )}
      </button>
      {Component ? (
        <div
          className={cls(
            classes.componentCardWrapper,
            cardOpen ? classes.elementOpen : null
          )}
        >
          <div>
            <Divider />
            <Component {...props} setCardOpen={setCardOpen} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

type IElement = BuildingBlocks & {
  component?: React.ElementType;
};
const ElementsSectionComponents = () => {
  const elementsList: FlowType = useFlowElementBuilder();

  return (
    <div className={classes.elementWrapper}>
      {elementsList?.map((item: IElement) => (
        <div className={classes.element} key={item.id}>
          {item.component ? (
            <ElementsRenderingComponent {...item} component={item.component} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ElementsSectionComponents;
