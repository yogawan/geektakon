// utils/groq.ts
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ApiMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface GroqResponse {
  reply: string;
}

const SYSTEM_PROMPT = process.env.NEXT_PUBLIC_SYSTEM_PROMPT as string;
const URL_API = process.env.NEXT_PUBLIC_URL_API as string;

/**
 * Sends a request to Groq AI with message history
 * @param history - Array of message objects
 * @returns Promise that resolves to AI response string
 */
export const requestToGroqAI = async (history: Message[]): Promise<string> => {
  const messages: ApiMessage[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...history.map(msg => ({ ...msg, role: msg.role as 'user' | 'assistant' })),
  ];

  const res = await fetch(URL_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Network response was not ok: ${res.status} - ${errorText}`);
  }
  
  const data: GroqResponse = await res.json();
  return data.reply;
};