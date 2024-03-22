import React from "react";
import Link from "next/link";

type Props = {};

function ProjectInfo({}: Props) {
  return (
    <div className="flex flex-col mt-4 px-4 py-4 gap-8 shadow border border-gray-200 rounded-lg">
      <div>
        <h1 className="text-4xl mb-2">About this project</h1>
        <p>
          <strong>Gimme Cats</strong> is an app that uses{" "}
          <Link
            href="https://thecatapi.com/"
            rel="noopener noreferrer"
            target="_blank"
            className=" text-blue-500 hover:text-blue-700"
          >
            The Cat API
          </Link>{" "}
          to serve detailed information on cat breeds from around the world.
          Users can search for a specific breed on the home page, and then
          navigate to its info page, where they can review an in-depth listing
          of its characteristics to help them find the breed that`&apos;`s right for
          them.
        </p>
      </div>
      <div>
        <h1 className="text-4xl mb-2">Technologies used</h1>
        <p>
          Project built using{" "}
          <Link
            href="https://react.dev/"
            rel="noopener noreferrer"
            target="_blank"
            className=" text-blue-500 hover:text-blue-700"
          >
            React
          </Link>{" "}
          framework{" "}
          <Link
            href="https://nextjs.org/"
            rel="noopener noreferrer"
            target="_blank"
            className=" text-blue-500 hover:text-blue-700"
          >
            NextJS
          </Link>
          , with{" "}
          <Link
            href="https://tailwindcss.com/"
            rel="noopener noreferrer"
            target="_blank"
            className=" text-blue-500 hover:text-blue-700"
          >
            TailwindCSS
          </Link>{" "}
          for styling. Hosted on{" "}
          <Link
            href="https://vercel.com/"
            rel="noopener noreferrer"
            target="_blank"
            className=" text-blue-500 hover:text-blue-700"
          >
            Vercel
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default ProjectInfo;
