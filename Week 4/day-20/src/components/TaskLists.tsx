

import type {Task} from "../types/task";
import TaskCard from "./TaskCard";

type TaskListProps = {
    tasks: Task[];
    filter: "all" | "pending" | "complete";
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number,newTitle: string)=> void;
};


function TaskList({tasks, filter, onToggle, onDelete, onEdit }: TaskListProps){
    return(
        <div>
            {tasks.length === 0 ? (
            <p>
            {filter === "all" 
            ? "No tasks yet. Create your first task!"
             : filter === "pending"
             ? "No pending tasks. Great job completing everything!"
             : "No completed tasks yet."}
            </p>
            ) : (
              tasks.map((task)=>(
                <TaskCard
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                 />
            ))
            )}
        </div>

    );
}

export default TaskList;