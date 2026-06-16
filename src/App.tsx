import { useState } from "react";
import { TaskItem } from "./components/TaskItem";
import type { Task } from "./types/task";
import TaskForm from "./components/TaskForm";

export  function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const addTask = (title: string) => {
   if (!title.trim()) return
    setTaskList((prev) => [...prev, { id: crypto.randomUUID(), title, completed: false }]);
  }

  return (
    <main className="mx-auto max-w-3xl p-8">
      <header className="mb-8">
        <h1 className="text-5xl font-semibold tracking-tight">Task Manager</h1>
        <p className="mt-2 text-text/70">Stay focused. Ship the work.</p>
      </header>

      <section className="rounded-2xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-2xl">Today</h2>

        <TaskForm onAddTask={addTask} />
      </section>
      <section>
        <ul className="space-y-2 mt-6">
          {taskList.map((task) => (
            <li key={task.id} className="flex items-center gap-2  bg-surface rounded-lg p-4">
              <TaskItem title={task.title} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
export default App;
