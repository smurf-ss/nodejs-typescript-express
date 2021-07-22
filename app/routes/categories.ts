import { validator } from "../utils/validator";
import express, {
  Application,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import { body, validationResult } from "express-validator";

import CategoriesController from "../controllers/categories";

const router: Router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req: Request, res: Response, next: NextFunction) {
  console.log("Time:", Date.now());
  next();
});

router.get("/", async (req: Request, res: Response) => {
  const controller = new CategoriesController();
  const response = await controller.getData();
  return res.status(200).send(response);
});

export default router;
