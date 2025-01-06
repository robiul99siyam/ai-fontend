import ChatHistory from "./ChatHistory";
import ChatSearch from "./ChatSearch";
export default function Chat() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/5 bg-gray-200">
          <ChatHistory />
        </div>
        <h1 className="font-semibold ml-2">ChatGPT</h1>
        <div className="w-[50%] ml-[10%]  flex items-center justify-center bg-white">
          {/* Chat Search Component */}
          <ChatSearch />
        </div>
      </div>
    </>
  );
}
