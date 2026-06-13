import TaskCard from "@/components/TaskCard";
import { getTasks } from "@/lib/tasks";

const TasksPage = async() => {
    const {tasks} = await getTasks();

    return (
        <div>
            <h2>Tasks page</h2>
            <p>Total Tasks : {tasks.length}</p>
            <div className="grid grid-cols-3 gap-3">
            {
                tasks.map((task)=><TaskCard key={task.id} task={task}></TaskCard>)
            }
            </div>
        </div>
    );
};

export default TasksPage;