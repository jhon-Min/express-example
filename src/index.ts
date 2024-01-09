import express from "express";
import { AppDataSource } from "./data-source";
import { TableController } from "./controllers/TableController";
import { CategoryController } from "./controllers/CategoryController";

AppDataSource.initialize()
  .then(() => {
    const app = express();
    const PORT = 3000;

    app.use(express.json());

    app.get("/", (req, res) => {
      return res.json("Established connection!");
    });

    app.get("/category", CategoryController.index);
    app.get("/table", TableController.getAllTable);

    app.listen(PORT, () => {
      console.log(`Running on  http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log("connection :", err));
