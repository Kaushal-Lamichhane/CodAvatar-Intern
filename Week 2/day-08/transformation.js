

export function getTasksByStatus(tasks,status){
    return tasks.filter(task => task.status === status);
}

export function getTaskTitles(tasks){
    return tasks.map(task => task.title);
}

export function findTaskById(tasks,id){
    return tasks.find(task => task.id === id);
}

export function countTaskByStatus(tasks){
    return tasks.reduce((counts,task)=>{
        counts[task.status] = (counts[task.status] || 0) +1;
        return counts;
    },{});  
}

export function sortTaskByPriority(tasks){
    return [...tasks].sort((a, b)=>a.priority -b.priority);
}
