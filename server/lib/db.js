import {PrismaClient} from '@prisma/client';

const globalForPrisma= global;
const prisma = new PrismaClient();

export default prisma;