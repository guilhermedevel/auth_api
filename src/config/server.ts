import Fastify from "fastify";
import { env } from "./env";
import { AppDataSource } from "./data-source";

export async function startServer() {
  const app = Fastify();

  app.get("/health", async () => {
    return { ok: true };
  });

  try {
    app.listen({port: env.PORT}).then(() => {
      console.log(`🚀 Server running at http://localhost:${env.PORT}`);
    });
    
    AppDataSource.initialize()
      .then(() => {
        console.log("Successful database connection")
      })
      .catch(console.error);

  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}
