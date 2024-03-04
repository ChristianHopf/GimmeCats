import Image from "next/image";
import type { Breed } from "../../models/Breed";

interface Props {
  breed: Breed;
}

export default function BreedCard({ breed }: Props) {
  return (
    <>
      <div className="flex flex-row rounded-lg shadow bg-white border border-gray-200 hover:bg-gray-100 cursor-pointer">
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
    </>
  );
}
