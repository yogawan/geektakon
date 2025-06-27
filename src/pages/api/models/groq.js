// src/pages/api/models/groq.js
import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { messages } = req.body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const reply = await groq.chat.completions.create({
      model: 'llama3-8b-8192',
      messages,
    });

    const responseMessage = reply.choices[0].message.content;
    return res.status(200).json({ reply: responseMessage });
  } catch (err) {
    console.error('Groq API error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}