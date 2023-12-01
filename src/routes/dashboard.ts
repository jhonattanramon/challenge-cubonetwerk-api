import { Request, Response, Router } from "express";
import { AppMySQL } from "../db/mysql/conn";
import { ParticipationEntity } from "../models/participation.entity";
import { PariticipationRepository } from "../db/mysql/repositorys";
const route = Router();

route.post("/add-participation", async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    participation: part,
  } = req.body as ParticipationEntity;
  const participation = new ParticipationEntity();
  participation.firstName = firstName;
  participation.lastName = lastName;
  participation.participation = part;

  return await PariticipationRepository.save(participation)
    .then((resSave) => res.send(resSave))
    .catch((err) => console.log(err));
});

route.get("/get-all-participants", async (req: Request, res: Response) => {
  return await PariticipationRepository.find()
    .then((participants) => res.send(participants))
    .catch((err) => console.log(err));
});

export default route;
