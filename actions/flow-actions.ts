import { FlowActionTypes } from "@/types/flowActionTypes";

interface IInitializeFlow {
  type: FlowActionTypes["INITIATE_FLOW"];
  payload: any;
}

type Dispatch = (arg0: IInitializeFlow) => IInitializeFlow;

export const initiateFlow = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: "INITIATE_FLOW", payload: "" });
  } catch (error) {
    console.log(error);
  }
};