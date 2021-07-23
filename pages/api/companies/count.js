// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/api/companies/count.js
import prisma from "../../../lib/prisma";

export default async (req, res) => {
  let totalCompanies;
  totalCompanies = await prisma.company.count();

  res.status(200).json({ totalCompanies });
};
