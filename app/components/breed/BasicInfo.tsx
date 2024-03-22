import React from "react";
import Image from "next/image";
import PronounceBreed from "@/app/misc/PronounceBreed";

type Props = {
  name: string;
  origin: string;
  url: string;
  alt_names: string;
  description: string;
};

export default function BasicInfo({
  name,
  origin,
  url,
  alt_names,
  description,
}: Props) {
  console.log(name);
  return (
    <div className="w-1/2 flex flex-col mt-4">
      <header className="flex flex-row justify-between">
        <span className="flex flex-row px-2 mb-2 gap-6 items-baseline">
          <h1 className="text-4xl">{name}</h1>
          <p className="text-xl text-stone-600">{origin}</p>
        </span>
        <PronounceBreed name={name} />
      </header>
      <div className="bg-white border border-gray-200 rounded-lg shadow px-4 py-4">
        <Image
          src={url}
          width={500}
          height={500}
          alt="bruh"
          className="object-cover mx-auto w-full"
          unoptimized={true}
        />
        <p className="text-stone-600 mt-1 mb-4">
          {alt_names !== "" ? `Alternative names: ${alt_names}` : ""}
        </p>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}
