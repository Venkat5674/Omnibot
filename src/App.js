import React, { useState, useRef, useEffect } from "react";
import { generateContent } from "./api";
import "./App.css";
import {
  IoSend,
  IoMenu,
  IoMoon, IoSunny,
  IoImageOutline,
  IoMicOutline,
  IoCreateOutline,
} from "react-icons/io5";
import { AiOutlineQq } from "react-icons/ai";
import MessageComponent, { LoadingDots } from "./MessageComponent";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for theme
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const botResponse = await generateContent(input);
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, I couldn't process your request." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`gemini-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <aside className="sidebar">
        <div className="sidebar-header">
          <button className="menu-button">
            <IoMenu />
          </button>
          <div className="new-chat-button">
            <IoCreateOutline />
            <span>New chat</span>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="main-header">
          <div className="header-title">
            <AiOutlineQq className="gemini-icon" />
            <h1>OmniBot</h1>
          </div>
          <div className="header-actions">
          <button className="icon-button" onClick={toggleTheme}>
            {isDarkMode ? <IoMoon /> : <IoSunny />}
             <span className="theme-toggle-label">
                 {isDarkMode ? "" : ""}
              </span>
          </button>
          </div>
        </header>

        <div className="chat-container">
          {messages.length === 0 ? (
            <div className="empty-state">
              <AiOutlineQq className="large-gemini-icon" />
              <h2>How can I help you today?</h2>
            </div>
          ) : (
            <div className="messages-container">
              {messages.map((msg, index) => (
                <MessageComponent
                  key={index}
                  message={msg}
                  isBot={msg.sender === "bot"}
                  onCopy={copyToClipboard}
                />
              ))}
              {loading && (
                <div className="message-container bot">
                  <LoadingDots />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <div className="input-section">
          <div className="input-wrapper">
            <button className="icon-button">
              <IoImageOutline />
            </button>
            <button className="icon-button">
              <IoMicOutline />
            </button>
            <input
              type="text"
              placeholder="Message Gemini..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className={`send-button ${input.trim() ? "active" : ""}`}
              onClick={handleSend}
              disabled={!input.trim()}
            >
              <IoSend />
            </button>
          </div>
          <div className="input-footer">
            <p>Gemini may display inaccurate info, including about people, places, or facts.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
