import OpenAI from "openai";

const openai = new OpenAI({ apiKey: import.meta.env["VITE_OPENAI_KEY"], dangerouslyAllowBrowser: true });

export async function test() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `"a hand holding a bag of groceries"
Rate the above description on the scale of 1 to 10, (with 10 being the most sustainable). Provide a number response only.

`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}
