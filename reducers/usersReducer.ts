import { UserActionTypes } from "@/types/userActionTypes";

interface IAction{
  type: keyof UserActionTypes;
  payload:any
}

const reducer = (allUsers = [], action: IAction) => {
  switch (action.type) {
    case "ADD_USER":
      console.log(action.payload);
      return [...allUsers, action.payload];
    default:
      return allUsers;
  }
};

export default reducer;
