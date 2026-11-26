
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import TaskDetails from './pages/TaskDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Shared layout for dashboard and task pages. */}
        <Route path="/" element={<DashboardLayout />}>
          {/* Redirect the root URL to the dashboard. */}
          <Route index element={<Navigate to="/dashboard" replace />} />

          {/* Dashboard page. */}
          <Route path="dashboard" element={<Dashboard />} />

          {/* Dynamic task detail page. */}
          <Route path="tasks/:taskId" element={<TaskDetails />} />
        </Route>

        {/* Handle unknown URLs. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
