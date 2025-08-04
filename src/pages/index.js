// src/pages/index.js
import React, { useState, useEffect } from "react";
import { requestToGroqAI } from "@/utilities/groq";
import ChatHeader from "@/components/ChatHeader";
import ChatForm from "@/components/ChatForm";
import ChatHistory from "@/components/ChatHistory";
import ChatFloating from "@/components/ChatFloating";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const ChatPage = () => {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasHistory, setHasHistory] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("chatHistory"));
      if (Array.isArray(saved) && saved.length) {
        setChatHistory(saved);
        setHasHistory(true);
      }
    } catch {
    }
  }, []);

  useEffect(() => {
    if (chatHistory.length) {
      localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
      setHasHistory(true);
    } else {
      localStorage.removeItem("chatHistory");
      setHasHistory(false);
    }
  }, [chatHistory]);

  const handleSend = async () => {
    if (!input.trim() || input.length > 500) return;

    const userMsg = { role: "user", content: input };
    const updatedHistory = [...chatHistory, userMsg];
    setChatHistory(updatedHistory);
    setInput("");
    setIsLoading(true);

    try {
      const aiReply = await requestToGroqAI(updatedHistory);
      const aiMsg = { role: "assistant", content: aiReply };
      setChatHistory((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error('Error sending message:', error);
      setChatHistory((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, an error occurred." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => setChatHistory([]);

  return (
    <div className="bg-[url('/assets/red.png')] bg-cover bg-center flex justify-center pt-32">
      <Head>
        <title>JawirAI</title>
      </Head>

      <div className="w-full sm:w-[720px]">
        <div className="flex flex-col min-h-screen">
          <Navbar />

          {!hasHistory ? (
            <>
              <ChatHeader />
              <ChatForm
                input={input}
                setInput={setInput}
                handleSend={handleSend}
                isLoading={isLoading}
              />
            </>
          ) : (
            <ChatFloating
              input={input}
              setInput={setInput}
              handleSend={handleSend}
              isLoading={isLoading}
            />
          )}

          <ChatHistory
            chatHistory={chatHistory}
            isLoading={isLoading}
            handleClearHistory={handleClearHistory}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;