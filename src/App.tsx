function App() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <header className="mb-8">
        <h1 className="text-5xl font-semibold tracking-tight">Task Manager</h1>
        <p className="mt-2 text-text/70">Stay focused. Ship the work.</p>
      </header>

      <section className="rounded-2xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-2xl">Today</h2>

        <ul className="space-y-2">
          <li className="flex items-center justify-between rounded-lg bg-background px-4 py-3">
            <span>Set up the design system</span>
            <span className="rounded-full bg-accent px-3 py-1 text-sm text-background">
              In progress
            </span>
          </li>
          <li className="flex items-center justify-between rounded-lg bg-background px-4 py-3">
            <span>Add the first task</span>
            <button className="rounded-md bg-primary px-3 py-1 text-sm text-background hover:bg-primary/90">
              Add
            </button>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App
