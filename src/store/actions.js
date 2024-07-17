export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: {
      task: task,
    },
  };
};

export const removeTask = (id) => {
  return {
    type: "REMOVE_TASK",
    payload: {
      id: id,
    },
  };
};

export const markCompleted = (id) => {
  return {
    type: "TASK_COMPLETED",
    payload: {
      id: id,
    },
  };
};

export const fetchTodo = () => {
  return async (dispach, getState) => {
    const resonse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const task = await resonse.json();
    dispach(addTask(task.title));
  };
};
