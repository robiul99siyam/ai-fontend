import React from "react";

function TextInputPlaceholder() {
  return (
    <div className="flex flex-col h-10 overflow-y-auto">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between animate-pulse">
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
        </div>
        <div className="flex mt-2 animate-pulse">
          <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
          <div className="ml-4">
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
          </div>
        </div>
        {/* Add more skeleton loader elements as needed */}
      </div>
    </div>
  );
}

export default TextInputPlaceholder;
