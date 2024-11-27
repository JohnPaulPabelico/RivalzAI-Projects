import RivalzClient from "rivalz-client";
import dotenv from "dotenv";

dotenv.config();

const rivalzClient = new RivalzClient(process.env.SECRET_TOKEN || "");

async function main() {
  const response = await rivalzClient.createChatSession(
    "6746bd27dfd6786c83a6d2f6", //Change this to your knowledge base id
    "Can you show me which booths have the most foot traffic?"
  );
  console.log(response);
}

main();
