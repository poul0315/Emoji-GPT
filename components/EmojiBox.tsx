import React from "react";

function EmojiBox({ emoji }: { emoji: string }) {
  return (
    <div className="my-10">
      <div
        className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
        onClick={() => {
          navigator.clipboard.writeText(emoji).then(() => {
            alert("Successfully copied");
          });
        }}
      >
        <p className="text-center">{emoji}</p>
      </div>
    </div>
  );
}

export default EmojiBox;
