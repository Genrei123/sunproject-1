import express from "express";
import OpenAI from "openai";

const app = express();
const PORT = process.env.PORT || 3000;

async function openAI() {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await client.responses.create({
    model: "gpt-4o",
    instructions: "You are a coding assistant that talks like a pirate",
    input: "Are semicolons optional in JavaScript?",
  });

  console.log(response.output_text);
}

app.get("/", async (req, res) => {
    try {
        await openAI();
        res.send("OpenAI response logged to console.");
    } catch (error) {
        console.error("Error calling OpenAI:", error);
        res.status(500).send("Internal Server Error");
    }
    }
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
