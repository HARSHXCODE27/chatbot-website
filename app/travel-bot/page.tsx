"use client";
import { useEffect } from "react";

export default function TravelBot() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    const style = document.createElement("style");
    style.innerHTML = `
      df-messenger {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }
      df-messenger::part(chat-wrapper) {
        width: 100% !important;
        height: 100% !important;
      }
      df-messenger::part(chat) {
        width: 100% !important;
        height: 100% !important;
      }
      df-messenger-toggle {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="w-full h-screen bg-black text-white">
      <df-messenger
        intent="WELCOME"
        chat-title="Mysh"
        agent-id="d7e879fc-691d-4c62-9d83-993b94e21f9b"
        language-code="en"
        chat-width="100%"
        chat-height="100%"
        allow="microphone;"
      ></df-messenger>
    </div>
  );
}
