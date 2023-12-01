import "reflect-metadata";
import express from "express";
import { AppMySQL } from "./db/mysql/conn";
import routes from "./routes/routes";
import cors from "cors"

const server = express();
server.use(express.json())
server.use(cors())
server.use("/api", routes);

const port = 3500;
server.listen(port, () => {
  console.log("server listening on " + port);

  AppMySQL.initialize()
    .then(() => console.log("mySQL initialized"))
    .catch((err) => console.log("error db", err));
});
