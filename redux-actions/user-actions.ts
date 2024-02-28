import { UserActionTypes } from "@/types/userActionTypes";

interface IAddUser {
  type: UserActionTypes["ADD_USER"];
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
