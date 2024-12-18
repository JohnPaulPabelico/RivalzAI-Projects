import RivalzClient from "rivalz-client";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const rivalzClient = new RivalzClient(process.env.SECRET_TOKEN || "");

async function main() {
  const filePath = path.join(__dirname, "./sample.pdf");
  const fileBuffer = fs.readFileSync(filePath);

  const uploadedFile = await rivalzClient.uploadPassport(
    fileBuffer,
    "sample.pdf"
  );
  console.log(uploadedFile);
}

main();
