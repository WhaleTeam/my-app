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
    const app: Prisma.AppCreateInput = JSON.parse(req.body);
    const savedApp = await prisma.app.create({ data: app });
    res.status(200).json(savedApp);
  } catch (err) {
    res.status(400).json({message: 'Something went wrong'})
  }
}