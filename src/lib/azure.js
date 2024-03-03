import createClient from "@azure-rest/ai-vision-image-analysis";
import { AzureKeyCredential } from "@azure/core-auth";

const endpoint = import.meta.env["VITE_AZURE_URL"];
const key = import.meta.env["VITE_AZURE_KEY"];

const credential = new AzureKeyCredential(key);
const client = createClient(endpoint, credential);

const features = ["Caption", "Read"];

const imageUrl = "https://pbs.twimg.com/media/CgGl0zdUEAAGsnf.jpg";

export async function analyzeImageFromUrl() {
  const result = await client.path("/imageanalysis:analyze").post({
    body: {
      url: imageUrl,
    },
    queryParameters: { features },
    contentType: "application/json",
  });

  const iaResult = result.body;

  if (iaResult.captionResult) {
    console.log(`Caption: ${iaResult.captionResult.text} (confidence: ${iaResult.captionResult.confidence})`);
  }
  // if (iaResult.readResult) {
  //   iaResult.readResult.blocks.forEach((block) => console.log(`Text Block: ${JSON.stringify(block)}`));
  // }
}
