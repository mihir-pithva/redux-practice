import { error } from "../middlewares/error";
import employeeReducer from "./employee";
import taskReducer from "./task";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), logger, error];
  },
});
