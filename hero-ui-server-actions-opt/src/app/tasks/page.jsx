import AddTask from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { AddATask } from "@/lib/actions";
import { getTasks } from "@/lib/tasks";
import { Button } from "@heroui/react";
import Link from "next/link";


const TasksPage = async() => {
    const {tasks} = await getTasks();

    return (
        <div>
            <h2>Tasks page</h2>
  <AddTask AddATask={AddATask}></AddTask>
  <Link href={"/tasks/new"}>
 <Button>Add Task In a New Page</Button> 
  </Link>
            <div className="grid grid-cols-3 gap-3 pt-8">
            {
                tasks.map((task,index)=><TaskCard key={index} task={task}></TaskCard>)
            }
            </div>
        </div>
    );
};

export default TasksPage;