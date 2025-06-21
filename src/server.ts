import Fastify from "fastify";
import { env } from "./config/env";
import { AppDataSource } from "./config/database/data-source";

export async function startServer() {
  const app = Fastify();

  app.get("/health", async () => {
    return { ok: true };
  });

  try {
    await AppDataSource.initialize()
      .then(() => {
        console.log("Successful database connection")
      })
      .catch(console.error);
      
    app.listen({port: env.PORT}).then(() => {
      console.log(`🚀 Server running at http://localhost:${env.PORT}`);
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}
