"use client";
import React from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";

function Header() {
  return (
    <header className="flex justify-between items-center border-b-2 mt-5 w-full px-10 pb-2">
      <Link href="/">
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          LOGO
        </h1>
      </Link>
      <a
        href="https://github.com/poul0315/Emoji-GPT"
        target="_blank"
        className="flex w-auto items-center text-xl justify-between"
      >
        <span className="mr-2">Check our GitHub</span>
        <GitHubIcon fontSize="inherit"></GitHubIcon>
      </a>
    </header>
  );
}

export default Header;
