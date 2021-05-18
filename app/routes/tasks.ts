import { validator } from "../util/validator";
import express, {
  Application,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import { body, validationResult } from "express-validator";

import TasksController from "../controllers/tasks";

const router: Router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req: Request, res: Response, next: NextFunction) {
  console.log("Time:", Date.now());
  next();
});

router.get("/", async (req: Request, res: Response) => {
  const controller = new TasksController();
  const response = await controller.getMessage();
  return res.status(200).send(response);
});

router.post(
  "/",
  validator([
    body("status").isNumeric(),
    body("message").isLength({ min: 100 }),
  ]),
  async (req: Request, res: Response) => {
    const controller = new TasksController();
    const response = await controller.createMessage(req.body);
    return res.status(201).send(response);
  }
);

router.put("/:id", async (req: Request, res: Response) => {
  const controller = new TasksController();
  const response = await controller.updateMessage(req.params.id, req.body);

  return res.status(201).send(response);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const controller = new TasksController();
  const response = await controller.deleteMessage(req.params.id);
  return res.status(201).send(response);
});

export default router;
