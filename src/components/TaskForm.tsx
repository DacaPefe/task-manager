import { PlusIcon } from "lucide-react";
import { useState } from "react";

 

 export function TaskForm( { submitTask }: { submitTask: (task: string) => void } ) {
    const [task, setTask] = useState("");
    return (
        <div className="flex items-center justify-between">
        <button className="rounded-full h-10 w-10 bg-primary px-3 py-1 text-sm text-background hover:bg-primary/90 cursor-pointer" onClick={() => submitTask(task)}>
            <PlusIcon className="w-4 h-4" />
        </button>
    </div>
    )
 }