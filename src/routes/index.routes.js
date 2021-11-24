import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", async (req, res) => {
  try {
    // lean() -> return a plain javascript object
    // retorne objetos de js tipicos para recorrerlos facilmente
    const tasks = await Task.find().lean();
    res.render("index", {tasks: tasks});
  } catch (error) {
    res.status(500).send(error);
  }
  res.render("index");
});

// ruta para crear una tarea
router.post("/task/add", async (req, res) => {
  try {
    await Task.create(req.body);
    res.redirect("/");
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
