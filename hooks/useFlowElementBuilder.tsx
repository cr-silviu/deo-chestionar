"use client";
import Element from "@/components/elements/forms/forms";
import UploadComponent from "@/components/elements/upload/upload-component/upload-component";
import { useAppSelector } from "./redux-hooks";
import { useGetForm } from "@/hooks/useGetForm";

const elementsBuilder: any = (flow: any) => {
  let elementsArray: any = [];

  for (let step of flow) {
    switch (step.type) {
      case "upload":
        if (step.status === "current") {
          return [...elementsArray, ...step.nextSteps];
        } else {
          continue;
        }

      case "process":
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

const populatedElement: any = (element: any) => {
  switch (element?.type) {
    case "form":
      return { ...element, component: useGetForm(element?.form_name) };
    case "file":
      return { ...element, component: UploadComponent };

    default:
      return { ...element, component: NoElement };
  }
};
export const useFlowElementBuilder = () => {
  const flow = useAppSelector((state) => state.processFlow);

  const elements = elementsBuilder(flow);

  let elementsArray: any = [];
  for (let element of elements) {
    elementsArray = [...elementsArray, populatedElement(element)];
  }

  return elementsArray;
};
