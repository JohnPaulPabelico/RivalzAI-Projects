import RivalzClient from "rivalz-client";
import dotenv from "dotenv";

dotenv.config();

const rivalzClient = new RivalzClient(process.env.SECRET_TOKEN || "");

async function main() {
  const knowledgeBase = await rivalzClient.createRagKnowledgeBase(
    "sample_transactional_data.pdf",
    "test_knowledge_base"
  );
  console.log(knowledgeBase);

  await new Promise((resolve) => setTimeout(resolve, 5000));

  const knowledgeBaseStatus = await rivalzClient.getKnowledgeBase(
    knowledgeBase.id
  );
  console.log("Knowledgebase is ", knowledgeBaseStatus.status);

}

main();
