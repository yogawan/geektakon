// pages/api/chat/models/groq.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Groq } from 'groq-sdk';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface RequestBody {
  messages: Message[];
}

interface ResponseData {
  reply?: string;
  error?: string;
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { messages }: RequestBody = req.body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const reply = await groq.chat.completions.create({
      model: 'llama3-8b-8192',
      messages,
    });

    const responseMessage: any = reply.choices[0].message.content;
    return res.status(200).json({ reply: responseMessage });
  } catch (err) {
    console.error('Groq API error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}