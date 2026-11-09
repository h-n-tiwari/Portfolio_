import { db } from '../prisma/db';

export interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function saveContactMessage(input: ContactInput) {
  return db.orm.public.ContactMessage.create({
      name: input.name.trim(),
      email: input.email.toLowerCase().trim(),
      subject: input.subject.trim(),
      message: input.message.trim(),
  });
}
