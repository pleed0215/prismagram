# Migration `20201106021447`

This migration has been generated at 11/6/2020, 11:14:47 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201105115834-init..20201106021447
--- datamodel.dml
+++ datamodel.dml
@@ -1,36 +1,35 @@
-// This is your Prisma schema file,
-// learn more about it in the docs: https://pris.ly/d/prisma-schema
+generator client {
+  provider = "prisma-client-js"
+}
 datasource db {
   provider = "mysql"
-  url = "***"
+  url = "***"
 }
-generator client {
-  provider = "prisma-client-js"
-}
-
 model Post {
-  id        Int       @default(autoincrement()) @id
-  createdAt DateTime  @default(now())
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
   title     String
   content   String?
-  published Boolean   @default(false)
-  author    User      @relation(fields: [authorId], references: [id])
+  published Boolean  @default(false)
   authorId  Int
+  author    User     @relation(fields: [authorId], references: [id])
+
+  @@index([authorId], name: "authorId")
 }
 model Profile {
-  id      Int   @default(autoincrement()) @id
-  bio     String?
-  user    User  @relation(fields: [userId], references: [id])
-  userId  Int   @unique
+  id     Int     @id @default(autoincrement())
+  bio    String?
+  userId Int     @unique
+  user   User    @relation(fields: [userId], references: [id])
 }
 model User {
-  id      Int     @default(autoincrement()) @id
-  email   String  @unique
+  id      Int      @id @default(autoincrement())
+  email   String   @unique
   name    String?
   posts   Post[]
   profile Profile?
-}
+}
```


