import Image from "next/image";
import type { Breed } from "../../models/Breed";

interface Props {
  breed: Breed;
}

export default function BreedCard({ breed }: Props) {
  return (
    <>
      <div className="flex flex-row mb-8 mt-4 mx-4">
        <Image
          src={breed.url}
          width={250}
          height={250}
          alt="bruh"
          className="h-full mx-auto mt-1.5"
          unoptimized={true}
        />
        <div className="flex flex-col mx-4">
          <header className="flex flex-row justify-between">
            <div className="flex flex-col mb-2 items-baseline">
              <h1 className="text-4xl">{breed.breeds[0].name}</h1>
              <p className="text-xl text-stone-600">{breed.breeds[0].origin}</p>
            </div>
            <button className="mb-12 px-4 py-2 rounded hover:bg-stone-200">See more</button>
          </header>
          <p className="text-xl">{breed.breeds[0].description}</p>
        </div>
      </div>
      <div className="w-full border"></div>
    </>
  );
}
