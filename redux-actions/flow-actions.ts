"use client";
import { FlowActionTypes } from "@/types/flowActionTypes";

interface IInitializeFlow {
  type: FlowActionTypes["INITIATE_FLOW"];
  payload: any;
}

type DInitialFlow = (arg0: IInitializeFlow) => IInitializeFlow;

export const initiateFlow = () => async (dispatch: DInitialFlow) => {
  try {
    dispatch({ type: "INITIATE_FLOW", payload: "" });
  } catch (error) {
    console.log(error);
  }
};

interface IUploadDocument {
  type: FlowActionTypes["UPLOAD_DOCUMENT"];
  payload: IUploadDocumentArguments;
}

interface IUploadDocumentArguments {
  id: string;
  status: "complete" | "current";
  fileName?: string;
}

type DUploadDocument = (arg0: IUploadDocument) => IUploadDocument;
export const changeDocumentStatus =
  ({ id, status, fileName }: IUploadDocumentArguments) =>
  async (dispatch: DUploadDocument) => {
    try {
      dispatch({
        type: "UPLOAD_DOCUMENT",
        payload: { id: id, status: status, fileName },
      });
    } catch (error) {
      console.log(error);
    }
  };
