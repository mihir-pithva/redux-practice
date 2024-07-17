import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const markCompleted = createAction("TASK_COMPLETED");
