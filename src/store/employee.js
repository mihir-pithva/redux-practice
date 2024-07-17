import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const employeSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push({
        id: ++id,
        name: action.payload.name,
      });
    },
    removeEmployee: (state, action) => {
      const index = state.findIndex((emp) => emp.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { addEmployee, removeEmployee } = employeSlice.actions;
export default employeSlice.reducer;
