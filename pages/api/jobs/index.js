// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/index.js
import prisma from "../../../lib/prisma";

export default async (req, res) => {
  const result = await prisma.job.findMany();
  console.log(result);
  res.status(200).json({ data: result });
};

// https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#atomic-number-operations
