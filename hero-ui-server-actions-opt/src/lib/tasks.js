import tasks from "../data/tasks.json";

export const getTasks = async () => {
  return tasks;
}; //for gretting the task

export const postTasks = async (newTask) => {
  newTask.id = tasks.length + 1;
  tasks.tasks.push(newTask);
  return {ok : true, message : 'Task Added Successfully'}
}; //for posting(showing) the task on the UI
