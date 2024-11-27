import RivalzClient from "rivalz-client";
import dotenv from "dotenv";

dotenv.config();

const rivalzClient = new RivalzClient(process.env.SECRET_TOKEN || "");

async function main() {
  const response = await rivalzClient.getKnowledgeBase(
    "6746b045dfd6786c83a6d2eb"
  );
  console.log(response);
}

main();
