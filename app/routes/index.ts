import express from "express";

import TasksRouter from "./tasks";

const router = express.Router();

router.use("/tasks", TasksRouter);

export default router;
