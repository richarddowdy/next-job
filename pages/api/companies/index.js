// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/index.js
import prisma from "../../../lib/prisma";

export default async (req, res) => {
  const { onlyHandles } = req.query;
  let companies;
  if (onlyHandles) {
    companies = await prisma.company.findMany({
      select: {
        handle: true,
      },
    });
  } else {
    companies = await prisma.company.findMany();
  }
  res.status(200).json({ companies });
};
