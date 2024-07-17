import task, { addTask, markCompleted, removeTask } from "./store/task";
import { store } from "./store/store";
import { addEmployee, removeEmployee } from "./store/employee";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addEmployee({ name: "mihir" }));

store.dispatch(removeEmployee({ id: 1 }));

store.dispatch(addTask({ task: "TASK 1" }));

store.dispatch(removeTask({ id: 1 }));
