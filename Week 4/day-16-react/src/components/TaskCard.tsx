

interface TaskCardProps {
    title: string;
    completed: boolean;
};


function TaskCard({ title, completed }: TaskCardProps) {
    return(
        <article>
            <h3>{title}</h3>
            <p> {completed ? "Completed" : "Pending"} </p>
        </article>
    );
};

export default TaskCard;