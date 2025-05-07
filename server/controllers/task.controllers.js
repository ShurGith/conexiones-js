import { pool } from "../db.js";


export const getTasks = (req, res) => {
    res.send("💫 Conseguimos todas las areas 🏦")
}
export const getTask = (req, res) => {
    res.send("Conseguimos una tarea especifica 👀 💫 ")
}
export const createTask = async (req, res) => {
    const {title, description} = req.body
   const result = await pool.query('INSERT INTO tasks (title, description) VALUES (?, ?)', 
    [title, description]
)
    console.log(result);
    res.send("🏦 💫  Creamos una tarea NUEVA 💫 ")
}
export const updateTasks = (req, res) => {
    res.send("💫 Actualizamos una tarea")
}
export const deleteTasks = (req, res) => {
    res.send("🏦 Eliminamos una tarea")
}