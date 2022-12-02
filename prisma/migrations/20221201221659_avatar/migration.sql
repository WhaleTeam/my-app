-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "avatar" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Contact" ("email", "firstName", "id", "lastName", "phone") SELECT "email", "firstName", "id", "lastName", "phone" FROM "Contact";
DROP TABLE "Contact";
ALTER TABLE "new_Contact" RENAME TO "Contact";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
