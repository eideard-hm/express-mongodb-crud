import { Router } from "express";
import {
  createTask,
  deleteTask,
  editTask,
  renderTaskEdit,
  renderTasks,
  toggleDone,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTasks);

// ruta para crear una tarea
router.post("/task/add", createTask);

router.get("/edit/:id", renderTaskEdit);

router.post("/edit/:id", editTask);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", toggleDone);

export default router;
