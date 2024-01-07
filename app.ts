import Fastify from "fastify";

const main = async () => {
  const fastify = Fastify();
  await fastify.register(import("@fastify/rate-limit"), {
    max: 100,
    timeWindow: "1 minute",
  });

  fastify.setNotFoundHandler(
    {
      preHandler: fastify.rateLimit(),
    },
    function (request, reply) {
      reply.code(404).send({ hello: "world" });
    },
  );
};

main().then(() => {});
