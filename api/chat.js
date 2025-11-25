import Groq from "groq-sdk";

export default async function handler(req, res) {
  const { messages } = req.body;

  if (!process.env.GROQ_API_KEY) {
    return res.status(500).json({ error: "Missing GROQ_API_KEY" });
  }

  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  try {
    const completion = await groq.chat.completions.create({
      model: "llama3-70b-8192",
      messages: messages,
      temperature: 0.2,
      stream: false,
    });

    const answer = completion.choices[0].message.content;
    return res.status(200).json({ answer });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Chat error" });
  }
}