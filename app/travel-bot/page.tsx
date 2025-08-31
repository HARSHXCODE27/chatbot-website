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
          src="https://console.dialogflow.com/api-client/demo/embedded/d7e879fc-691d-4c62-9d83-993b94e21f9b"
          allow="microphone;"
          width="100%"
          height="100%"
          style={{ border: "none", minHeight: "600px" }}
        />
      </div>
    </div>
  );
}
