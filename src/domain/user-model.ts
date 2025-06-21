import { Entity, CreateDateColumn, Column, PrimaryGeneratedColumn  } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id?: number;

  @Column({type: "varchar"})
  name?: string;

  @Column({type: "varchar"})
  email?: string;

  @Column({type: "varchar"})
  password?: string;

  @CreateDateColumn({type: "timestamptz"})
  createdAt?: Date;
}