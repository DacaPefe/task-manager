import { useState } from "react";

type Task = {
    id: string;
    title: string;
    completed: boolean;
}

export function TaskItem( { taskTitle, submitTask }: { taskTitle: string, submitTask: (task: string) => void } ) {
    const [task, setTask] = useState(taskTitle);
  const [taskList, setTaskList] = useState<Task[]>([]);

 
 
    return (
        <div className="flex items-center justify-between">
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className="w-full border border-border rounded-lg p-2" />
        
        </div>
    )
}

export default TaskItem;