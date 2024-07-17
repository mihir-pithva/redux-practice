import { createReducer } from "@reduxjs/toolkit";
import { addTask, markCompleted, removeTask } from "./actions";

let id = 0;
export const reducer = createReducer([], (builder) => {
  builder.addCase(addTask.type, (state, action) => {
    state.push({
      id: ++id,
      task: action.payload.task,
      completed: false,
    });
  }),
    builder.addCase(removeTask.type, (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state.splice(index, 1);
    }),
    builder.addCase(markCompleted.type, (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = true;
    });
});
