import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.string().transform(Number).default("3333"),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.log("❌ Invalid environment variables!", _env.error.format());
  process.exit(1);
}

export const env = {
  PORT: _env.data.PORT,
};
