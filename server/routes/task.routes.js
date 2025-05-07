import {Router} from 'express';
const router = Router();
import {getTasks, getTask, createTask, updateTasks, deleteTasks} from '../controllers/task.controllers.js'

//? Rutas de trabajos y tareas
//** Tareas */
router.get('/tasks', getTasks);
router.get('/task/:id', getTask);
router.post('/task', createTask);
router.put('/task/:id', updateTasks);
router.delete('/task/:id', deleteTasks);
export default router;

