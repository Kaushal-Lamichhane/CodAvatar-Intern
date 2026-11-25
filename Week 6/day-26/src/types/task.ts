
// Defines the structure of one task.

export type Task = {
    id: number
    title: string
    status: 'OPEN' | 'IN_PROGRESS' | 'DONE'
    priority: 'LOW' | 'NORMAL' | 'HIGH'
}