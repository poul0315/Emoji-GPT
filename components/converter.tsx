"use client";
import React from "react";
import { useState } from "react";
import EmojiBox from "./EmojiBox";

function Converter() {
  const [caption, setCaption] = useState("");
  const [emoji, setEmoji] = useState("💛");

  const captionToEmoji = async (caption: string) => {
    try {
      const response = await fetch("api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ caption }),
      });

      if (!response.ok) {
        throw new Error("API request failed.");
      }
      const data = await response.json();
      const emojiResult = data.response;

      setEmoji(emojiResult);
    } catch (error) {
      console.error("Error converting caption to emoji: ", error);
    }
    // send api request with caption
    // get emoji result
    // const data = getEmoji(caption);
    // setEmoji(data);
    // update variable emoji
  };

  const handleConvertClick = () => {
    captionToEmoji(caption);
  };

  return (
    <div className="max-w-xl w-full">
      <textarea
        className="w-full rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2"
        rows={4}
        placeholder="Type your caption here"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full">
        Convert to Emoji
      </button>
      {emoji && <EmojiBox emoji={emoji} />}
    </div>
  );
}

// git test
export default Converter;
