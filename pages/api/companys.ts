import type { NextApiRequest, NextApiResponse } from 'next'
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== 'POST'){
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const company: Prisma.CompanyCreateInput = JSON.parse(req.body);
    const savedCompany = await prisma.company.create({ data: company });
    res.status(200).json(savedCompany);
  } catch (err) {
    res.status(400).json({message: err + 'Something went wrong'})
  }
}