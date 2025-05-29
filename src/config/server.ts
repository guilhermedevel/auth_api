import Fastify from "fastify";
import { env } from "./env";

export async function startServer() {
  const app = Fastify();

  app.get("/health", async () => {
    return { ok: true };
  });

  try {
    app.listen({port: env.PORT}).then(() => {
      console.log(`🚀 Server running at http://localhost:${env.PORT}`);
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}
