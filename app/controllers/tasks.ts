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

import { ITasksPayload, TasksResponse } from "../interface/tasks";

@Tags("Tasks")
@Route("/tasks")
export default class TasksController extends Controller {
  @Get("/")
  @SuccessResponse("200", "Created") // Custom success response
  public async getMessage(): Promise<TasksResponse> {
    return {
      message: "TasksResponse",
      status: 1,
    };
  }

  @Post("/")
  @SuccessResponse("201", "Created") // Custom success response
  public async createMessage(
    @Body() body: ITasksPayload
  ): Promise<TasksResponse> {
    console.log("body", body);
    return {
      message: "TasksResponse",
      status: 1,
    };
  }

  @Put("{id}")
  @SuccessResponse("201", "Created") // Custom success response
  public async updateMessage(
    @Path() id: any,
    @Body() body: ITasksPayload
  ): Promise<TasksResponse> {
    console.log("Path", id);
    return {
      message: "TasksResponse",
      status: 1,
    };
  }

  @Delete("{id}")
  @SuccessResponse("201", "Created") // Custom success response
  public async deleteMessage(@Path() id: any): Promise<TasksResponse> {
    return {
      message: "TasksResponse",
      status: 1,
    };
  }
}
