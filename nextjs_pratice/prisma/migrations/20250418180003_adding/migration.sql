-- AlterTable
ALTER TABLE "User" ALTER COLUMN "forgotPasswordToken" DROP NOT NULL,
ALTER COLUMN "forgotPasswordTokenExpiry" DROP NOT NULL,
ALTER COLUMN "verifiyToken" DROP NOT NULL,
ALTER COLUMN "verifyTokenExpiry" DROP NOT NULL;
