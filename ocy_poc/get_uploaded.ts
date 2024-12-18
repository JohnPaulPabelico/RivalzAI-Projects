import RivalzClient from "rivalz-client";
import dotenv from "dotenv";

dotenv.config();

const rivalzClient = new RivalzClient(process.env.SECRET_TOKEN || "");

async function main() {
  const history = await rivalzClient.getUploadedHistory(1, 1);
  console.log(history);
}

main();
