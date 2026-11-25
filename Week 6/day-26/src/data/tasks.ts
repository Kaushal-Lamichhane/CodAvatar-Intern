import type { Task } from '../types/task'

// Generate a large dataset for our performance experiment.
export const tasks: Task[] = Array.from({ length: 10000 }, (_, index) => ({
  id: index + 1,

  // Give tasks different titles to make searching realistic.
  title: `Task ${index + 1} - ${['Learn React', 'Practice TypeScript', 'Build Dashboard', 'Fix Bugs', 'Review Code'][index % 5]}`,

  // Cycle through task statuses.
  status: (['OPEN', 'IN_PROGRESS', 'DONE'] as const)[index % 3],

  // Cycle through priorities.
  priority: (['LOW', 'NORMAL', 'HIGH'] as const)[index % 3],
}))