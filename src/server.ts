import Fastify from "fastify";

const app = Fastify();

app.get("/health", async () => {
  return { ok: true };
});

try {
  app.listen({ port: 3000 }).then(() => {
    console.log("Server is running at http://localhost:3000");
  });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
