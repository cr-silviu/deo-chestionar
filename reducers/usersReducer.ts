import { UnknownAction } from "@reduxjs/toolkit";



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
