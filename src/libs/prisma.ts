import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prismaSingleton = globalThis.prisma ?? prismaClientSingleton()

export default prismaSingleton

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismaSingleton