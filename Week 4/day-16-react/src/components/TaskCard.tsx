import {useState} from "react";

interface TaskCardProps {
    title: string;
    completed: boolean;
    isSelected: boolean;
    onSelect:  ()=>void;
};


function TaskCard({ title, completed, isSelected, onSelect }: TaskCardProps) {
    const [clickCount, setClickCount] = useState(0);
    return(
        <article>
            <h3>{title}</h3>
            <p> {completed ? "Completed" : "Pending"} </p>
            <button onClick={onSelect}>Select</button>
            <p>Clicks:{clickCount}</p>

            <button onClick={()=> setClickCount(clickCount + 1)}> Add  Click</button>
            {isSelected && <p>Selected!</p>}
        </article>
    );
};

export default TaskCard;