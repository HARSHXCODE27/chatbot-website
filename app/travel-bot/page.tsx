export default function TravelBot() {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col">
      {/* Chat header */}
      <div className="bg-gray-900 p-4 text-lg font-bold border-b border-gray-700">
        Travel Bot
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto">
        <iframe
          src="https://bot.dialogflow.com/e9c4e90e-c5c8-4263-8588-9ee76b992cd2s"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
}
