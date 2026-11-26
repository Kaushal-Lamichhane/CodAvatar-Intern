export type Task = {
  id: number
  title: string
  description: string
  status: 'OPEN' | 'IN_PROGRESS' | 'DONE'
  priority: 'LOW' | 'NORMAL' | 'HIGH'
}

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Learn React Router',
    description: 'Understand routing and navigation in React.',
    status: 'OPEN',
    priority: 'HIGH',
  },
  {
    id: 2,
    title: 'Practice TypeScript',
    description: 'Improve TypeScript skills through practical exercises.',
    status: 'IN_PROGRESS',
    priority: 'NORMAL',
  },
  {
    id: 3,
    title: 'Build Dashboard',
    description: 'Create a responsive task management dashboard.',
    status: 'DONE',
    priority: 'HIGH',
  },
  {
    id: 4,
    title: 'Review React Hooks',
    description: 'Practice useState, useEffect and useMemo.',
    status: 'OPEN',
    priority: 'NORMAL',
  },
  {
    id: 5,
    title: 'Fix UI Bugs',
    description: 'Identify and resolve dashboard interface issues.',
    status: 'DONE',
    priority: 'LOW',
  },
]