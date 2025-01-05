import { useContext } from "react";
import { chatContext } from "../context";

const useChat = () => {
  return useContext(chatContext);
};
export { useChat };
