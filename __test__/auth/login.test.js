import login from "../../pages/api/auth/login";
import { createMocks } from "node-mocks-http";
import prisma from "../../lib/prisma";
import "setimmediate";

afterEach(async (done) => {
  await prisma.$disconnect();
  done();
});

describe("/POST /api/login", () => {
  test("/login responds 400 to GET", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        username: "test",
        password: "password",
      },
    });

    await login(req, res);

    expect(res._getStatusCode()).toBe(400);
  });

  test("/login responds with JWt", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        username: "checffeceece",
        password: "password",
      },
    });

    await login(req, res);

    expect(res._getStatusCode()).toBe(200);
    // expect(JSON.parse(res._getData());
  });
});
