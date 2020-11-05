# Migration `20201105115834-init`

This migration has been generated at 11/5/2020, 8:58:34 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `Post` (
`id` int  NOT NULL  AUTO_INCREMENT,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`title` varchar(191)  NOT NULL ,
`content` varchar(191)  ,
`published` boolean  NOT NULL DEFAULT false,
`authorId` int  NOT NULL ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `Profile` (
`id` int  NOT NULL  AUTO_INCREMENT,
`bio` varchar(191)  ,
`userId` int  NOT NULL ,
UNIQUE INDEX `Profile.userId_unique`(`userId`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `User` (
`id` int  NOT NULL  AUTO_INCREMENT,
`email` varchar(191)  NOT NULL ,
`name` varchar(191)  ,
UNIQUE INDEX `User.email_unique`(`email`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

ALTER TABLE `Post` ADD FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `Profile` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201105115834-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,36 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "mysql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Post {
+  id        Int       @default(autoincrement()) @id
+  createdAt DateTime  @default(now())
+  title     String
+  content   String?
+  published Boolean   @default(false)
+  author    User      @relation(fields: [authorId], references: [id])
+  authorId  Int
+}
+
+model Profile {
+  id      Int   @default(autoincrement()) @id
+  bio     String?
+  user    User  @relation(fields: [userId], references: [id])
+  userId  Int   @unique
+}
+
+model User {
+  id      Int     @default(autoincrement()) @id
+  email   String  @unique
+  name    String?
+  posts   Post[]
+  profile Profile?
+}
```


