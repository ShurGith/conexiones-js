

export const getTasks = (req, res) => {
    res.send("💫 Conseguimos todas las areas 🏦")
}
export const getTask = (req, res) => {
    res.send("Conseguimos una tarea especifica 👀 💫 ")
}
export const createTask = (req, res) => {
    res.send("🏦 💫  Creamos una tarea NUEVA 💫 ")
}
export const updateTasks = (req, res) => {
    res.send("💫 Actualizamos una tarea")
}
export const deleteTasks = (req, res) => {
    res.send("🏦 Eliminamos una tarea")
}