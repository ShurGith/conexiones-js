import {Router} from 'express';
const router = Router();
import {getTasks, getTask, createTask, updateTasks, deleteTasks} from '../controllers/task.controllers.js'

//? Rutas de trabajos y tareas
//** Tareas */
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTasks);
router.delete('/tasks/:id', deleteTasks);
export default router;

