import { UnknownAction } from "@reduxjs/toolkit";
import { ActionTypes } from "@/types/actionTypes";

type AddUserType = {
  type: keyof ActionTypes;
  payload?: any;
};

type UserAction = AddUserType;

const reducer = (allUsers = [], action: UnknownAction) => {
  switch (action.type) {
    case "ADD_USER":
      console.log(action.payload);
      return [...allUsers, action.payload];
    default:
      return allUsers;
  }
};

export default reducer;
