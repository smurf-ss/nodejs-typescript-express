import {
  Controller,
  Get,
  Route,
  SuccessResponse,
  Tags,
  Post,
  Body,
  ExtendedSpecConfig,
  Put,
  Path,
  Delete,
} from "tsoa";

import { ITasksPayload, TasksResponse } from "../models/tasks";

import categories from "../data/categories.json";

@Tags("Categories")
@Route("/categories")
export default class CategoriesController extends Controller {
  @Get("/")
  @SuccessResponse("200", "Created") // Custom success response
  public async getData(): Promise<string[]> {
    return categories;
  }
}
