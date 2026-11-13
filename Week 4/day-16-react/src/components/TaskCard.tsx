

interface TaskCardProps {
    title: string;
    completed: boolean;
    isSelected: boolean;
    onSelect:  ()=>void;
};


function TaskCard({ title, completed, isSelected, onSelect }: TaskCardProps) {
    return(
        <article>
            <h3>{title}</h3>
            <p> {completed ? "Completed" : "Pending"} </p>
            <button onClick={onSelect}>Select</button>
            {isSelected && <p>Selected!</p>}
        </article>
    );
};

export default TaskCard;