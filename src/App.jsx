import Chat from "./Chat";
import ChatProvider from "./provider/ChatProvider";
export default function App() {
  return (
    <>
      <ChatProvider>
        <Chat />
      </ChatProvider>
    </>
  );
}
