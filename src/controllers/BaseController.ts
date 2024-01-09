import { Request, Response } from "express";
import { AppDataSource } from "../data-source";

export abstract class BaseController {
  protected request: Request;
  protected response: Response;
  protected dataSource: typeof AppDataSource;

  constructor(req: Request, res: Response) {
    this.request = req;
    this.response = res;
    this.dataSource = AppDataSource;
  }
}
