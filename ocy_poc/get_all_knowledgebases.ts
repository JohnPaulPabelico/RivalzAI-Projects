import RivalzClient from "rivalz-client";
import dotenv from "dotenv";

dotenv.config();

const rivalzClient = new RivalzClient(process.env.SECRET_TOKEN || "");

async function main() {
  const response = await rivalzClient.getKnowledgeBases();
  console.log(response);
}

main();
