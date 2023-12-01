import { ParticipationEntity } from "../../../models/participation.entity";
import { AppMySQL } from "../conn";

export const PariticipationRepository = AppMySQL.getRepository(ParticipationEntity)
