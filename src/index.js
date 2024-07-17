import { addTask, markCompleted, removeTask } from "./store/reducer";
import { store } from "./store/store";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTask({ task: "TASK 1" }));

store.dispatch(markCompleted({ id: 1 }));

store.dispatch(removeTask({ id: 1 }));
