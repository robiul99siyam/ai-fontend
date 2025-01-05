import { useChat } from "./hooks/useChat";

export default function ChatResponse() {
  const { data } = useChat();
  console.log(data);

  return (
    <>
      <div className="flex flex-col h-60 overflow-y-auto">
        {data.map((item, index) => (
          <div key={index} className="p-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">category:</span>
              <span className="text-sm text-gray-400">{item.category}</span>
            </div>
            <div className="flex mt-2">
              <img
                src={item.image}
                alt="User"
                className="rounded-full w-10 h-10"
              />
              <div className="ml-4">
                <p className="text-sm text-gray-700">
                  {item.title ||
                    "Hi there! How are you feeling today? I'm feeling great too!"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
