import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.string().transform(Number).default("3333"),
  DATABASE_HOST: z.string().transform(String).default('localhost'),
  DATABASE_PORT: z.string().transform(Number),
  DATABASE_USERNAME: z.string().transform(String),
  DATABASE_PASSWORD: z.string().transform(String),
  DATABASE_NAME: z.string().transform(String),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.log("❌ Invalid environment variables!", _env.error.format());
  process.exit(1);
}

export const env = {
  PORT: _env.data.PORT,
  DATABASE_HOST: _env.data.DATABASE_HOST,
  DATABASE_PORT: _env.data.DATABASE_PORT,
  DATABASE_USERNAME: _env.data.DATABASE_USERNAME,
  DATABASE_PASSWORD: _env.data.DATABASE_PASSWORD,
  DATABASE_NAME: _env.data.DATABASE_NAME,
};
