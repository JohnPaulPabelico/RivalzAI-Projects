import RivalzClient from "rivalz-client";
import dotenv from "dotenv";

dotenv.config();

const rivalzClient = new RivalzClient(process.env.SECRET_TOKEN || "");

async function main() {
  const response = await rivalzClient.createChatSession(
    "6746b045dfd6786c83a6d2eb", //Change this to your knowledge base id
    "From the numbers of visitors and the time they spend on the site, can you analyze it and provide insights like what is the peak time and best booths? Provide an analysis"
  );
  console.log(response);
}

main();
