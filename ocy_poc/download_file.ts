import RivalzClient from "rivalz-client";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const rivalzClient = new RivalzClient(process.env.SECRET_TOKEN || "");

async function main() {
  const ipfsHash =
    "a31f25bea581ab5f22f1e210736cc5d1451661512dd88e89e4c761f00c2a090b";

  const downloadedFile = await rivalzClient.downloadFile(ipfsHash, "../");
  console.log(downloadedFile);
}

main();
