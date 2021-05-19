import express, {
  Application,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import { validationResult, ValidationChain } from "express-validator";

// can be reused by many routes

// parallel processing
export const validator = (validations: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(
      validations.map((validation: any) => validation.run(req))
    );

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};
