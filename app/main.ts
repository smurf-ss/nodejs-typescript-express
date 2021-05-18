import express, { Application, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import dotenv from "dotenv";

import Router from "./routes";

const app: Application = express();

const PORT = process.env.PORT || 8080;

console.log("process", process.env.NODE_ENV);

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

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
