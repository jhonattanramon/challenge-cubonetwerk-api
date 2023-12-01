import { DataSource } from "typeorm";
import { ParticipationEntity } from "../../models/participation.entity";

export const AppMySQL = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "admin",
    password: "root",
    database: "challenge-cubonetwork",
    synchronize: true,
    entities: [ParticipationEntity]
})
