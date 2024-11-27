import RivalzClient from "rivalz-client";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const rivalzClient = new RivalzClient(process.env.SECRET_TOKEN || "");

async function main() {
  const readableStream = fs.createReadStream("sample.pdf", {
    encoding: "utf8",
  });
  const uploadedFile = await rivalzClient.uploadFile(readableStream);
  console.log(uploadedFile);
}

main();
