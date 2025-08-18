export default function RestaurantBot() {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col">
      {/* Chat header */}
      <div className="bg-gray-900 p-4 text-lg font-bold border-b border-gray-700">
        Restaurant Bot
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto">
        <iframe
          src="https://console.dialogflow.com/api-client/demo/embedded/18915528-1f66-4167-8b4b-421128f1093e"
          allow="microphone;"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
}
