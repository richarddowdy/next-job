import register from "../pages/api/register";
import { createMocks } from "node-mocks-http";
import prisma from "../lib/prisma";
import "setImmediate";

afterAll(async (done) => {
  await prisma.$disconnect();
  done();
});

describe("/POST /api/register", () => {
  test("/register responds 400 to GET", async () => {
    // expect.assertions(1);
    const { req, res } = createMocks({
      method: "GET",
      query: {
        username: "test",
        password: "password",
      },
    });

    await register(req, res);

    expect(res._getStatusCode()).toBe(400);
  });

  test("/register responds with JWt", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        username: "makwww2ccNfecc3",
        password: "password",
      },
    });

    await register(req, res);

    expect(res._getStatusCode()).toBe(200);
    const token = JSON.parse(res._getData()).token;
    expect(token.length).toBeGreaterThanOrEqual(50);
    expect(token).toEqual(expect.any(String));
  });
});
