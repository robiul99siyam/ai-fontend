import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoSearchSharp } from "react-icons/io5";
import ChatResponse from "./ChatResponse";
import Field from "./Field";
import { useChat } from "./hooks/useChat";

export default function ChatSearch() {
  const { data, setData } = useChat();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [hide, setHide] = useState(false);
  const submitForm = async (formData) => {
    try {
      const query = formData.search.trim();
      if (query.length < 3) {
        alert("Search query should be at least 3 characters long");
        return;
      }

      setLoading(true); // Set loading to true when the request is made
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${query}`
      );

      if (response.status === 200) {
        const products = response.data;
        setData((prev) => [...prev, ...products]);
        setHide(true);
        reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      reset(); // Set loading to false after the request is completed
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        {data.length > 0 && <ChatResponse />}
        {/* Display loading text when loading is true */}
        {loading && <p>Loading...</p>}

        {/* Heading */}
        <div>
          {!hide && (
            <h1 className="text-center text-3xl font-sans font-bold mb-6">
              What can I help with?
            </h1>
          )}
        </div>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex items-center transition-all duration-1000 ease-in-out"
        >
          {/* Search Input */}
          <Field label="">
            <input
              {...register("search", { required: true })}
              type="search"
              name="search"
              className=" block w-[220px] md:w-[500px] xl:w-[650px] focus:outline-none rounded-l-full border-0 py-2 md:py-3 pl-8 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="message chatGPT"
            />
          </Field>

          {/* Search Button */}
          <button
            type="submit"
            className="bg-gray-300 p-4 rounded-r-full flex justify-center items-center"
          >
            <IoSearchSharp />
          </button>
        </form>
      </div>
    </>
  );
}
