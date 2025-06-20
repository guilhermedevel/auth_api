import "reflect-metadata";
import { DataSource } from "typeorm";
import { env } from "./env";

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
})
