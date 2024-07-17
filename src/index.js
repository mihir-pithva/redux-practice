import { store } from "./store/store";
import { addTask, fetchTodo, markCompleted, removeTask } from "./store/actions";

store.subscribe(() => {
  console.log(store.getState());
});
console.log(store.getState());

store.dispatch(addTask("task 1"));

console.log(store.getState());

store.dispatch(markCompleted(1));

console.log(store.getState());

store.dispatch(fetchTodo());

console.log(store.getState());

