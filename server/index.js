import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/genai";

const app = express();
app.use(cors());
app.use(express.json());

const client = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

app.post("/api/chat", async (req, res) => {
  try {
    const text = req.body.message;
    const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(text);

    res.json({ reply: result.response.text() });

  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
