/*
  Warnings:

  - You are about to drop the column `appId` on the `Company` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_App" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "appName" TEXT NOT NULL,
    "appDescription" TEXT NOT NULL,
    "appPlatform" TEXT NOT NULL,
    "appVersion" TEXT NOT NULL,
    "companyId" TEXT,
    CONSTRAINT "App_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_App" ("appDescription", "appName", "appPlatform", "appVersion", "id") SELECT "appDescription", "appName", "appPlatform", "appVersion", "id" FROM "App";
DROP TABLE "App";
ALTER TABLE "new_App" RENAME TO "App";
CREATE TABLE "new_Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyName" TEXT NOT NULL,
    "companyAddress" TEXT NOT NULL,
    "companyPhone" TEXT NOT NULL,
    "companyDescription" TEXT NOT NULL,
    "companyRegisterDate" DATETIME NOT NULL
);
INSERT INTO "new_Company" ("companyAddress", "companyDescription", "companyName", "companyPhone", "companyRegisterDate", "id") SELECT "companyAddress", "companyDescription", "companyName", "companyPhone", "companyRegisterDate", "id" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
