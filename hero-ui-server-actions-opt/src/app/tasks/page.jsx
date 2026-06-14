import AddTask from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { AddATask } from "@/lib/actions";
import { getTasks } from "@/lib/tasks";


const TasksPage = async() => {
    const {tasks} = await getTasks();

    return (
        <div>
            <h2>Tasks page</h2>
  <AddTask AddATask={AddATask}></AddTask>
            <div className="grid grid-cols-3 gap-3 pt-8">
            {
                tasks.map((task)=><TaskCard key={task.id} task={task}></TaskCard>)
            }
            </div>
        </div>
    );
};

export default TasksPage;