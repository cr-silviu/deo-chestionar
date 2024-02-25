"use client";
import { NextStepsType } from "@/types/blockTypes";
import cls from "classnames";
import React, { useState, useEffect } from "react";
import classes from "./step-component.module.scss";

import { Check, Dot, CheckCircle2 } from "lucide-react";

import { useAppSelector } from "@/hooks/redux-hooks";
import { toast } from "react-toastify";

interface IStepComponent extends React.ComponentPropsWithoutRef<"div"> {}

function countNodes(data: any): number {
  let countedNodes = 0;

  for (let dataPoints of data) {
    countedNodes = countedNodes + 1;
    if (dataPoints.nextSteps) {
      //@ts-ignore
      countedNodes += countNodes(dataPoints.nextSteps);
    }
  }

  return countedNodes;
}

const StepComponent = () => {
  const processFlow = useAppSelector((state) => state.processFlow);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectedItem = (value: number) => {
    if (value === selectedIndex) return;
    toast.info(`Changed state opened for idx: ${value + 1}`, {
      position: "top-right",
      autoClose: 500,
      theme: "dark",
    });
    setSelectedIndex(value);
  };

  const handleStatus = (stepIndex: number) => {
    switch (true) {
      case selectedIndex === stepIndex:
        return "current";
      case stepIndex < selectedIndex:
        return "complete";
      case stepIndex > selectedIndex:
        return "upcoming";
      default:
        return "skipped";
    }
  };

  return (
    <div className={classes.componentWrapper}>
      {processFlow?.map((step: any, stepIndex: number) => {
        const isLastChild = stepIndex === processFlow?.length - 1;

        return (
          <button
            className={cls(
              classes.step,
              handleStatus(stepIndex) === "current" ? classes.stickyStep : null
            )}
            key={stepIndex}
            onClick={() => handleSelectedItem(stepIndex)}
          >
            <PrimaryComponent
              primaryStatus={step?.status}
              title={step?.metadata?.title}
              index={Number(stepIndex + 1)}
            />

            <div
              className={cls(
                classes.secondaryComponentBody,
                selectedIndex === stepIndex
                  ? classes.secondaryComponentBodyOpen
                  : null
              )}
              style={{
                //@ts-ignore
                "--max-height": `${
                  20 * countNodes([processFlow[stepIndex]])
                }px`,
              }}
            >
              <SecondaryComponent
                type={step.type}
                nextSteps={step.nextSteps}
                noPadding={true}
              />

              <div
                className={classes.secondaryComponentMarker}
                style={isLastChild ? { visibility: "hidden" } : {}}
              >
                <div className={classes.verticalLine} />
              </div>
            </div>
            <div
              className={classes.bottomDividerDiv}
              style={isLastChild ? { visibility: "hidden" } : {}}
            >
              <div className={classes.secondaryComponentMarker}>
                <div className={classes.verticalLine} />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

interface IPrimaryComponent extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  index: number;
  primaryStatus: "complete" | "current" | "skipped" | "upcoming";
}

const PrimaryComponent = (props: IPrimaryComponent) => {
  const { title, index, primaryStatus } = props;
  return (
    <div className={cls(classes.primaryComponentWrapper)}>
      <div
        className={cls(
          classes.primaryComponentTitleWrapper,
          primaryStatus === "complete" ? classes.titleComplete : null,
          primaryStatus === "current" ? classes.titleCurrent : null,
          primaryStatus === "skipped" ? classes.titleSkipped : null,
          primaryStatus === "upcoming" ? classes.titleUpcoming : null
        )}
      >{`${title}`}</div>
      <div className={classes.bubbleComponent}>
        {primaryStatus === "complete" ? (
          <div className={cls(classes.bubble, classes.bubbleComplete)}>
            <Check size={12} />
          </div>
        ) : null}
        {primaryStatus === "current" ? (
          <div className={classes.currentBubbleWrapper}>
            <div className={classes.pulsatingBubble} />
            <div className={cls(classes.bubble, classes.bubbleCurrent)}>
              {index}
            </div>
          </div>
        ) : null}
        {primaryStatus === "upcoming" ? (
          <div className={cls(classes.bubble, classes.bubbleUpcoming)}>
            {index}
          </div>
        ) : null}
      </div>
    </div>
  );
};

interface ISecondaryComponent extends React.ComponentPropsWithoutRef<"div"> {
  nextSteps?: NextStepsType;
  type: "process" | "invoice" | "upload" | "form";
  noPadding?: boolean;
  status?: "complete" | "current" | "skipped" | "upcoming";
}

const SecondaryComponent = (props: ISecondaryComponent) => {
  const nextSteps = props.nextSteps ? props.nextSteps : [];
  const noPadding = props.noPadding ? props.noPadding : false;

  return (
    <div className={classes.secondaryComponentWrapper}>
      {nextSteps?.map((step: any, index) => (
        <div
          className={cls(
            classes.secondaryComponentListWrapper,
            noPadding ? classes.noPadding : classes.padding
          )}
          key={index}
        >
          <div className={classes.secondaryComponentListItem}>
            {step?.status === "complete" ? (
              <CheckCircle2 size={16} className={classes.checkTask} />
            ) : (
              <Dot size={16} />
            )}
            <p>{step?.metadata?.title}</p>
          </div>
          <SecondaryComponent
            type={step.type}
            nextSteps={step?.nextSteps}
            status={step?.status}
          />
        </div>
      ))}
    </div>
  );
};

export default StepComponent;
