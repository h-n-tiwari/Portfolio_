import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function saveContactMessage(input: ContactInput) {
  return prisma.contactMessage.create({
    data: {
      name: input.name.trim(),
      email: input.email.toLowerCase().trim(),
      subject: input.subject.trim(),
      message: input.message.trim(),
    },
  });
}
