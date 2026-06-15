import { useState } from "react";
import { TaskItem } from "./components/TaskItem";

export  function App() {
  const [taskTitle, setTaskTitle] = useState("");
  const handleSubmitTask = (task: string) => {
    setTaskTitle(task);
  }
  return (
    <main className="mx-auto max-w-3xl p-8">
      <header className="mb-8">
        <h1 className="text-5xl font-semibold tracking-tight">Task Manager</h1>
        <p className="mt-2 text-text/70">Stay focused. Ship the work.</p>
      </header>

      <section className="rounded-2xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-2xl">Today</h2>

    
      </section>
      <section>
        <TaskItem taskTitle={taskTitle} submitTask={handleSubmitTask} />
      </section>
    </main>
  )
}
export default App;
