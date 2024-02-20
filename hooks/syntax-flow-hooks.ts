import { FlowTypes } from "@/types/flowTypes";

const useFlowSyntaxBuilder = (documents: any, flowType: keyof FlowTypes) => {
  switch (flowType) {
    default:
      return ["hello"];
  }
};
