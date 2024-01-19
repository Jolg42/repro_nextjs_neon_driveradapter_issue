Forked from https://github.com/mmachatschek/repro_nextjs_neon_driveradapter_issue

For more context about Turso see https://www.prisma.io/blog/prisma-turso-ea-support-rXGd_Tmy3UXX

# Reproduction of Prisma Neon driver adapter issue on Next.js

### Steps

1. Install deps `cd nextjs && npm install`
1. Migrate `turso db shell my-db < migration.sql`
1. `npx prisma generate`
1. Start nextjs dev server `npm run dev`
1. Call the nextjs route `POST http://localhost:3000/api/prisma`
