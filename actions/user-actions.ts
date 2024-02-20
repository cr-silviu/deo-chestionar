import { ActionTypes } from "@/types/actionTypes";

interface IAddUser {
  type: ActionTypes["ADD_USER"];
  payload: any;
}

type Dispatch = (arg0: IAddUser) => IAddUser;

export const addUser = (data: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: "ADD_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};
