import { Entity, PrimaryColumn, Column, BaseEntity, EntitySchema } from "typeorm";

@Entity("todoitems")
export class TodoItem extends BaseEntity  {

    @PrimaryColumn()
    id: number;

    @Column()
    text: string;

}
