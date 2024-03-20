"use client";

import Image from "next/image";
import type { Breed } from "../../models/Breed";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context";

interface Props {
  breed: Breed;
}

export default function BreedCard({ breed }: Props) {
  const router = useRouter();
  const { selectedBreed, setSelectedBreed } = useAppContext();
  const id = breed.breeds[0].id;

  // const onSelectBreed = (event: any) => {
  //   // Set this card's breed as the context's selectedBreed
  //   event.preventDefault();
  //   setSelectedBreed(breed);
  //   // console.log(event.target);
  //   router.push(event.target.href);
  // };

  return (
    // <Link
    //   href={`/breed/${id}`}
    //   onClick={onSelectBreed}
    //   // href={{
    //   //   pathname: `/breed/${id}`,
    //   //   query: {
    //   //     data: JSON.stringify(breed),
    //   //   },
    //   // }}
    //   as={`/breed/${id}`}
    // >
    <div
      className="flex flex-row rounded-lg shadow bg-white border border-gray-200 hover:bg-gray-100 cursor-pointer"
      onClick={(e) => {
        // when card is clicked:
        // - set selectedBreed in context
        // - store selectedBreed in local storage
        // - route to breed page
        e.stopPropagation();
        setSelectedBreed(breed);
        localStorage.setItem("selectedBreed", JSON.stringify(breed));
        router.push(`/breed/${id}`);
      }}
    >
      <Image
        src={breed.url}
        width={275}
        height={275}
        alt="bruh"
        className="object-cover rounded-s-lg"
        unoptimized={true}
      />

      <div className="flex flex-col mx-4 mb-2">
        <header className="flex flex-row justify-between mb-2">
          <div className="flex flex-col items-baseline mt-2">
            <h1 className="text-4xl">{breed.breeds[0].name}</h1>
            <p className="text-xl text-stone-600">{breed.breeds[0].origin}</p>
          </div>
          {/* <div className="mt-2">
              <button className="px-4 py-2 rounded hover:bg-stone-200">
                See more
              </button>
            </div> */}
        </header>
        <p className="text-lg">{breed.breeds[0].description}</p>
      </div>
    </div>
    // </Link>
  );
}
