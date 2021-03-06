// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/index.js
import prisma from "../../../lib/prisma";

export default async (req, res) => {
  const companies = await prisma.company.findMany();
  res.status(200).json({ companies });
};
