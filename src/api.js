import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.REACT_APP_API_KEY;

if (!apiKey) {
  throw new Error("API key is missing. Make sure it is set in the environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function generateContent(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([prompt]);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
}
