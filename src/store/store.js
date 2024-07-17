import employeeReducer from "./employee";
import taskReducer from "./task";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
});
