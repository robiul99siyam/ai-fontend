import { useChat } from "./hooks/useChat";

export default function ChatResponse() {
  const { data } = useChat();
  console.log(data);

  return (
    <>
      <div className="flex flex-col h-[80%] w-full  overflow-y-auto scrollbar-hide">
        {data.map((item, index) => (
          <div key={item.id} className="p-4">
            <div className="flex justify-between">
              <h1 className="font-bold text-xl"> {item.title}</h1>
            </div>
            <div className="flex mt-2">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
