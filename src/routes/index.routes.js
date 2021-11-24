import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/task/add", async (req, res) => {
  try {
    await Task.create(req.body);
    res.redirect("/");
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
