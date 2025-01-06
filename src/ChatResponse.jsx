import { useEffect, useState } from "react";
import { useChat } from "./hooks/useChat";

export default function ChatResponse() {
  const { data } = useChat();
  const [translations, setTranslations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const translatedDescriptions = await Promise.all(
          data.map(async (item) => {
            const response = await fetch(
              `http://127.0.0.1:8000/translate?q=${encodeURIComponent(
                item.description
              )}`
            );

            // Check for successful response
            if (!response.ok) {
              throw new Error(
                `API request failed with status ${response.status}`
              );
            }

            // Get the translated text from the API response
            const trans = await response.json();
            return trans.translation; // Assuming the translated text is under `translation` key
          })
        );

        // Store the translated descriptions
        setTranslations(translatedDescriptions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [data]);

  return (
    <>
      <div className="flex flex-col h-[80%] w-full overflow-y-auto scrollbar-hide">
        {data.map((item, index) => (
          <div key={item.id} className="p-4">
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">{item.title}</h1>
            </div>
            <div className="flex mt-2">
              <p>{item.description}</p>
            </div>
            {translations[index] && (
              <div className="flex mt-2">
                <p className="text-gray-500">{translations[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
