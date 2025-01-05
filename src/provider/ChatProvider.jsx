import { useState } from "react";
import { chatContext } from "../context";
export default function ChatProvider({ children }) {
  const [data, setData] = useState([]);

  return (
    <chatContext.Provider value={{ data, setData }}>
      {children}
    </chatContext.Provider>
  );
}
