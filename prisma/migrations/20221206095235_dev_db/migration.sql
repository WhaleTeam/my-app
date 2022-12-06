/*
  Warnings:

  - You are about to drop the column `Title` on the `Task` table. All the data in the column will be lost.
  - Added the required column `title` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyId` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "App" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "appName" TEXT NOT NULL,
    "appDescription" TEXT NOT NULL,
    "appPlatform" TEXT NOT NULL,
    "appVersion" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyName" TEXT NOT NULL,
    "companyAddress" TEXT NOT NULL,
    "companyPhone" TEXT NOT NULL,
    "companyDescription" TEXT NOT NULL,
    "companyRegisterDate" DATETIME NOT NULL,
    "appId" TEXT NOT NULL,
    CONSTRAINT "Company_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ScheduleTask" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "timelapse" INTEGER NOT NULL,
    "timelapseMeasurement" TEXT NOT NULL,
    "timelapseRetry" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "ScheduleTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Contact" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ScheduleLogs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    CONSTRAINT "ScheduleLogs_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "ScheduleTask" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Contact" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Task" ("endDate", "id", "startDate", "userId") SELECT "endDate", "id", "startDate", "userId" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
CREATE TABLE "new_Contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "avatar" TEXT NOT NULL DEFAULT '',
    "companyId" TEXT NOT NULL,
    CONSTRAINT "Contact_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Contact" ("avatar", "email", "firstName", "id", "lastName", "phone") SELECT "avatar", "email", "firstName", "id", "lastName", "phone" FROM "Contact";
DROP TABLE "Contact";
ALTER TABLE "new_Contact" RENAME TO "Contact";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
