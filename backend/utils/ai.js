const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const ACTIVE_MODEL = "gemini-1.5-flash";

const aiModel = genAI.getGenerativeModel({ model: ACTIVE_MODEL });

function extractJSON(text) {
  const s = text.indexOf("{");
  const e = text.lastIndexOf("}") + 1;
  return JSON.parse(text.substring(s, e));
}

module.exports = { aiModel, extractJSON };
