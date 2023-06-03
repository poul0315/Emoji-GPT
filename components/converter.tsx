"use client";
import React from "react";
import { useState } from "react";

function Converter() {
  const [caption, setCaption] = useState("");
  const [emoji, setEmoji] = useState("🥲");

  const captionToEmoji = (caption: string) => {
    // send api request with caption
    // get emoji result
    // update variable emoji
  };

  return (
    <div className="max-w-xl w-full">
      <textarea
        className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2"
        rows={4}
        placeholder="Type your caption here"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full">
        Convert to Emoji
      </button>
      <text className="bg-slate-500">{emoji}</text>
    </div>
  );
}
// test 1
export default Converter;
