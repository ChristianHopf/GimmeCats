import React from "react";
import Link from "next/link";

type Props = {};

function TechStack({}: Props) {
  return (
    <div className="mt-4 px-4 py-4 gap-4 shadow border border-gray-200 rounded-lg">
      <h1 className="text-4xl mb-4">Technologies used</h1>
      <div className="flex flex-row gap-8">
        <div>
          <Link
            href="https://thecatapi.com/"
            rel="noopener noreferrer"
            target="_blank"
            className=" text-blue-500 hover:text-blue-700"
          >
            ReactJS
          </Link>
        </div>

        <Link
          href="https://thecatapi.com/"
          rel="noopener noreferrer"
          target="_blank"
          className=" text-blue-500 hover:text-blue-700"
        >
          NextJS
        </Link>
        <Link
          href="https://thecatapi.com/"
          rel="noopener noreferrer"
          target="_blank"
          className=" text-blue-500 hover:text-blue-700"
        >
          TailwindCSS
        </Link>
      </div>
    </div>
  );
}

export default TechStack;
