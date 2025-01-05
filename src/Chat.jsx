// ChatSearch Component

// Chat Component
import ChatHistory from "./ChatHistory";
import ChatSearch from "./ChatSearch";

export default function Chat() {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-200">
        <ChatHistory />
      </div>
      <div className="w-2/3  flex items-center justify-center bg-white">
        <ChatSearch />
      </div>
    </div>
  );
}
