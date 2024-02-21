import { FlowActionTypes } from "@/types/flowActionTypes";

interface IInitializeFlow {
  type: FlowActionTypes["INITIATE_FLOW"];
  payload: any;
}

type Dispatch = (arg0: IInitializeFlow) => IInitializeFlow;

export const addUser = (data: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: "INITIATE_FLOW", payload: data });
  } catch (error) {
    console.log(error);
  }
};