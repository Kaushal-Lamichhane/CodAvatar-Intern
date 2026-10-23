
function App() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl">
        {/* Dashboard header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            TaskFlow
          </h1>
          <p className="mt-2 text-slate-600">
            Manage your tasks and track your progress.
          </p>
        </header>

        {/* Summary cards */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-slate-800">
            Overview
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Total Tasks
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                24
              </p>
            </article>

            <article className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                In Progress
              </p>
              <p className="mt-2 text-3xl font-bold text-blue-600">
                8
              </p>
            </article>

            <article className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Completed
              </p>
              <p className="mt-2 text-3xl font-bold text-green-600">
                16
              </p>
            </article>
          </div>
        </section>
        
        {/* Recent tasks */}
        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-800">
            Recent Tasks
          </h2>

          <div className="space-y-3">
            <article className="flex flex-col gap-3 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Build dashboard layout
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Create the main TaskFlow dashboard.
                </p>
              </div>

              <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                In Progress
              </span>
            </article>

            <article className="flex flex-col gap-3 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Review HTML and CSS
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Revise semantic HTML and responsive layouts.
                </p>
              </div>

              <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                Completed
              </span>
            </article>

            <article className="flex flex-col gap-3 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Learn React components
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Understand reusable UI components.
                </p>
              </div>

              <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
                Pending
              </span>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
