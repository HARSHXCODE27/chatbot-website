export default function TravelBot() {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col">
      {/* Chat header */}
      <div className="bg-gray-900 p-4 text-lg font-bold border-b border-gray-700">
        Travel Bot
      </div>

      {/* Chat area */}
      <div className="flex-1 flex justify-center items-center bg-white">
        <iframe
          src="https://bot.dialogflow.com/18915528-1f66-4167-8b4b-421128f1093e"
          allow="microphone;"
          height="600"
          width="400"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}
