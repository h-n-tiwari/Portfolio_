import { db } from './prisma/db';

async function main() {
  const contact = await db.orm.public.ContactMessage.create({
    name: 'Happy',
    email: 'happy@example.com',
    subject: 'First Test',
    message: 'My first row in Neon using Prisma 8!',
  });

  console.log('Inserted:', contact);

  const contacts = await db.orm.public.ContactMessage.all();

  console.log('All contacts:', contacts);
}

main()
  .catch(console.error)
  .finally(async () => {
    await db.close();
  });