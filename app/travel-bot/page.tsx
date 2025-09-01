"use client";
import { useEffect } from "react";

export default function TravelBot() {
  useEffect(() => {
    // Load Dialogflow Messenger script
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    // Inject custom CSS for fullscreen
    const style = document.createElement("style");
    style.innerHTML = `
      df-messenger {
        --df-messenger-bot-message: #1976d2;
        --df-messenger-user-message: #333;
        --df-messenger-font-color: white;
        --df-messenger-chat-background-color: #111;
        --df-messenger-send-icon: #1976d2;

        position: fixed !important;
        bottom: 0 !important;
        right: 0 !important;
        width: 100% !important;
        height: 100% !important;
        max-height: 100% !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }
      df-messenger-toggle {
        display: none !important; /* Hide floating toggle */
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col">
      <df-messenger
        intent="WELCOME"
        chat-title="Mysh"
        agent-id="d7e879fc-691d-4c62-9d83-993b94e21f9b"
        language-code="en"
        minimized="false"   // 👈 Forces chat to open
      ></df-messenger>
    </div>
  );
}
