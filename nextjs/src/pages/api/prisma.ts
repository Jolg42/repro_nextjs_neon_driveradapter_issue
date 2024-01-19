import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

const libsql = createClient({
  // @ts-expect-error
  url: '',
  authToken: ''
})
const adapter = new PrismaLibSQL(libsql)
const prisma = new PrismaClient({ adapter })

export default async function handler(req, res) {
  await prisma.article.deleteMany()
   
  await prisma.article.create({
    data: {
      id: 1,
      title: 'Test title',
      createdAt: new Date().toISOString()
    }
   });

  const articles = await prisma.article.findMany();

  console.log(articles);

  res.status(200).send('OK');
}
