"use client";
import { useEffect } from "react";

export default function RestaurantBot() {
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
        --df-messenger-bot-message: #e63946; /* restaurant theme red */
        --df-messenger-user-message: #222;
        --df-messenger-font-color: white;
        --df-messenger-chat-background-color: #121212;
        --df-messenger-send-icon: #e63946;

        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100% !important;
        height: 100% !important;
        max-height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }

      df-messenger-toggle {
        display: none !important;
      }

      df-messenger::part(chat-wrapper),
      df-messenger::part(chat-container) {
        width: 100% !important;
        height: 100% !important;
      }

      df-messenger::part(header) {
        background: #e63946 !important; /* header matches theme */
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col">
      <df-messenger
        intent="WELCOME"
        chat-title="Restaurant_Bot"
        agent-id="d7e879fc-691d-4c62-9d83-993b94e21f9b"
        language-code="en"
        minimized="false"
      ></df-messenger>
    </div>
  );
}
