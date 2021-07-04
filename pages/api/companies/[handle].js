// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/index.js
import prisma from "../../../lib/prisma";

export default async (req, res) => {
  const { handle } = req.query;
  const result = await prisma.company.findUnique({
    where: {
      handle: handle,
    },
    include: {
      jobs: true,
      employees: {
        select: {
          id: true,
          username: true,
          employer_handle: true,
          email: true,
          is_admin: true,
        },
      },
    },
  });
  res.status(200).json(result);
};
