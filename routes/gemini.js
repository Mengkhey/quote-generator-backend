const express = require( "express");
const { GoogleGenerativeAI } = require("@google/generative-ai") ;

const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.get("/ai-quote", async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Write me one short, original motivational quote with author name.";

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // you can parse if needed, but for now return raw text
    res.json({ text });
  } catch (error) {
    console.error("AI Quote Error:", error);
    res.status(500).json({ error: "Failed to generate quote" });
  }
});

module.exports = router;

// const express = require("express");
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const router = express.Router();
// const genAI = new GoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });

// // cache last successful quote
// let lastAIQuote = { text: "Be yourself; everyone else is already taken. - Oscar Wilde" };

// router.get("/ai-quote", async (req, res) => {
//   try {
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const prompt = "Write me one short, original motivational quote with author name.";

//     const result = await model.generateContent(prompt);
//     const text = result.response.text();

//     // update cache
//     lastAIQuote = { text };

//     res.json({ text });
//   } catch (error) {
//     console.error("AI Quote Error:", error);

//     // fallback: return last cached quote if API fails (quota, network, etc.)
//     res.json(lastAIQuote);
//   }
// });

// module.exports = router;
