import {Entity} from "typeorm";
import {Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class TraceableTaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task: string;

  @Column()
  state: string;
}
