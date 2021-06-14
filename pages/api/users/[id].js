// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/index.js
import prisma from "../../../lib/prisma";

export default async (req, res) => {
  const { id } = req.query;

  const result = await prisma.user.findUnique({
    where: {
      id: +id,
    },
  });
  res.status(200).json(result);
};
