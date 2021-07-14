// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/index.js
import prisma from "../../../lib/prisma";

export default async (req, res) => {
  const { username } = req.query;
  console.log(username);

  const result = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  delete result.password;
  res.status(200).json({ user: result });
};
