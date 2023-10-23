import { PrismaClient } from "@prisma/client";
import app from "./app";

const port = process.env.PORT || 5000;

// create prisma instance
const prisma = new PrismaClient();

async function main() {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
main();
