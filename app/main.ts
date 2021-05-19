import express, { Application, NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import cors from "cors";

import dotenv from "dotenv";

import Router from "./routes";

const app: Application = express();

const PORT = process.env.PORT || 8000;

// console.log("process", process.env.NODE_ENV);

app.use(cors());

app.use(express.json());

app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(Router);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  res.status(404).send({
    message: "Not Found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/docs`);
});
