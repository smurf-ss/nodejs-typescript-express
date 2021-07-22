import express from "express";

import TasksRouter from "./tasks";
import CategoriesRouter from "./categories";

const router = express.Router();

router.use("/tasks", TasksRouter);
router.use("/categories", CategoriesRouter);

export default router;
