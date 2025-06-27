// src/utilities/groq.js
const SYSTEM_PROMPT = process.env.NEXT_PUBLIC_SYSTEM_PROMPT
const URL_API = process.env.NEXT_PUBLIC_URL_API

/**
 * @param {Array} history - chatHistory lengkap dengan system prompt
 * @returns {Promise<string>} - balasan AI
 */
export const requestToGroqAI = async (history) => {
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...history,
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
  
  const data = await res.json();
  return data.reply;
};