import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", async (req, res) => {
  try {
    // lean() -> return a plain javascript object
    // retorne objetos de js tipicos para recorrerlos facilmente
    const tasks = await Task.find().lean();
    res.render("index", { tasks: tasks });
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

router.get("/edit/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error);
  }
});

router.post("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

router.get("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

router.get("/toggleDone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

export default router;
