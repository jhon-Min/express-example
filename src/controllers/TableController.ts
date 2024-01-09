import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Table } from "../entity/Table";

export class TableController {
  static async getAllTable(req: Request, res: Response) {
    try {
      const tableRepository = AppDataSource.getRepository(Table);
      const tables = await tableRepository.find();
      res.json(tables);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
