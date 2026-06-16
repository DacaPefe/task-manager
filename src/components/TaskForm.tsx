import { PlusIcon } from "lucide-react";
import { useState } from "react";

 

export function TaskForm( {  onAddTask }: { onAddTask: (title: string) => void } ) {
    const [title, setTitle] = useState("");
    const handleSubmitTask = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title.trim()) return
            onAddTask(title);
            setTitle("");
        
    }
  
    return (
        <form onSubmit={handleSubmitTask} className="flex items-center gap-2 mt-6">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-border rounded-lg p-2" placeholder="Add a new task" />
            <button type="submit" className="rounded-full h-10 w-10 bg-primary px-3 py-1 text-sm text-background hover:bg-primary/90 cursor-pointer">
                <PlusIcon className="w-4 h-4" />
            </button>
        </form>
    )
}

export default TaskForm;