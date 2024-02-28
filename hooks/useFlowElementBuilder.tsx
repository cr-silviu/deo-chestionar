"use client";
import UploadComponent from "@/components/elements/upload/upload-component/upload-component";
import { useAppSelector } from "./redux-hooks";
import { useGetForm } from "@/hooks/useGetForm";
import { FlowType, BuildingBlocks } from "@/types/blockTypes";

export const useFlowElementBuilder = () => {
  const flow: FlowType = useAppSelector((state) => state.processFlow);

  const elements = elementsBuilder(flow);

  let elementsArray: FlowType = [];
  for (let element of elements) {
    elementsArray = [...elementsArray, populatedElement(element)];
  }

  return elementsArray;
};

const elementsBuilder = (flow: FlowType): FlowType => {
  let elementsArray: FlowType = [] as FlowType;

  for (let step of flow) {
    switch (step.type) {
      case "upload":
        if (step.status === "current") {
          if (!step.nextSteps) continue;
          return [...elementsArray, ...step.nextSteps];
        } else {
          continue;
        }

      case "process":
        if (!step.nextSteps) continue;
        return elementsBuilder(step.nextSteps);

      default:
        return [...elementsArray];
    }
  }

  return elementsArray;
};

const NoElement = () => {
  return <div>No element for this type</div>;
};

const populatedElement = (element: BuildingBlocks) => {
  switch (element?.type) {
    case "form":
      return { ...element, component: useGetForm(element?.form) };
    case "file":
      return { ...element, component: UploadComponent };

    default:
      return { ...element, component: NoElement };
  }
};
