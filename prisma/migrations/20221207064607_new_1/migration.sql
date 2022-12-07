-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyName" TEXT NOT NULL,
    "companyAddress" TEXT NOT NULL,
    "companyPhone" TEXT NOT NULL,
    "companyDescription" TEXT NOT NULL,
    "companyRegisterDate" DATETIME NOT NULL,
    "appId" TEXT,
    CONSTRAINT "Company_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Company" ("appId", "companyAddress", "companyDescription", "companyName", "companyPhone", "companyRegisterDate", "id") SELECT "appId", "companyAddress", "companyDescription", "companyName", "companyPhone", "companyRegisterDate", "id" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
