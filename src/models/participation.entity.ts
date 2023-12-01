import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("participations")
export class ParticipationEntity  {
    @PrimaryGeneratedColumn()
    id!: number; 

    @Column({
        length: 100
    })
    firstName!: string

    @Column({
        length: 100
    })
    lastName!: string

    @Column()
    participation!: number;

}