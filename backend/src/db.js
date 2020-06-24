//Файл подсоединяется к удаленной базе prisma и дает нам возможность запрашивать её в JS
const { Prisma } = require('prisma-binding');
const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.SECRET,
  debug: false,
});

module.exports = db;
