import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "@/reducers/usersReducer";
import processFlowReducer from "@/reducers/processFlowReducer"
// ...

export const makeStore = () => {
  return configureStore({
    reducer: {
      //@ts-ignore
      users: usersReducer,
      //@ts-ignore
      processFlow:processFlowReducer
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
