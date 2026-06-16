
import { XIcon } from "lucide-react";
import { useState } from "react";


export function TaskItem( {  title, id, onDeleteTask }: { title: string, id: string, onDeleteTask: (id: string) => void } ) {
    const [completed, setCompleted] = useState(false);
    const handleCompleteTask = () => {
        setCompleted(!completed);
    }
    return (
        <>
        <input type="checkbox"  className="w-4 h-4 rounded-full border border-border bg-surface checked:bg-primary checked:border-primary" checked={completed} onChange={handleCompleteTask}/>
        <p className={`text-sm font-medium text-text ${completed ? "line-through text-text/50" : ""}`}>{title}</p>
        <button type="button" className="rounded-full h-10 w-10 bg-surface px-3 py-1 text-sm text-text hover:bg-surface/80 cursor-pointer" onClick={() => onDeleteTask(id)}><XIcon className="w-4 h-4" /></button>
        </>
    )
}

export default TaskItem;