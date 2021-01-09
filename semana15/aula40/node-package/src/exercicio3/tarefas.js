const allTasks = []

const addTask = () => {
    const task = process.argv [2]
    allTasks.push (task)
}

addTask ()

console.log(`Tarefa adicionada com sucesso! \n\ 
Tarefas:
: ${allTasks}`)