"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Oval } from "react-loader-spinner";
import RandomCatCard from "./RandomCatCard";

export default function RandomCatBreed() {
  const [breed, setBreed] = useState({
    id: "",
    url: "",
    width: 0,
    height: 0,
    breeds: [{ name: "", origin: "", alt_names: "", description: "" }],
  });
  const [loading, setLoading] = useState(true);

  const getAnotherBreed = () => {
    setLoading(true);
    getBreed();
  };

  const getBreed = async () => {
    const res = await fetch("api/random");
    const data = await res.json();
    setBreed(data[0]);
    setLoading(false);
  };

  useEffect(() => {
    getBreed();
  }, []);

  return (
    <>
      {loading && (
        <div className="w-1/3 flex flex-col items-center mx-auto">
          <div className="flex mt-64">
            <Oval
              visible={true}
              height="80"
              width="80"
              color="#000000"
              secondaryColor="#e5e7eb"
              ariaLabel="oval-loading"
              //   wrapperStyle
              //   wrapperClass
            />
          </div>
        </div>
      )}
      {!loading && breed && (
        // <div className="w-1/3 flex flex-col">
        //   <button
        //     onClick={getAnotherBreed}
        //     className="bg-white border border-gray-200 rounded-lg shadow w-2/3 mx-auto px-8 py-8 mt-4"
        //   >
        //     <p className="text-4xl">Click for a random cat!</p>
        //   </button>
        //   <div className="flex flex-col mt-4">
        //     <header className="flex flex-row px-2 mb-2 gap-6 items-baseline">
        //       <h1 className="text-4xl">{breed.breeds[0].name}</h1>
        //       <p className="text-xl text-stone-600">{breed.breeds[0].origin}</p>
        //     </header>
        //     <div className="bg-white border border-gray-200 rounded-lg shadow px-4 py-4">
        //       <Image
        //         src={breed.url}
        //         width={275}
        //         height={275}
        //         alt="bruh"
        //         className="object-cover mx-auto w-full"
        //         unoptimized={true}
        //       />
        //       <p className="text-stone-600 mb-4">
        //         {breed.breeds[0].alt_names !== ""
        //           ? `Alternative names: ${breed.breeds[0].alt_names}`
        //           : ""}
        //       </p>
        //       <p className="text-lg">{breed.breeds[0].description}</p>
        //     </div>
        //   </div>
        // </div>
        <RandomCatCard breed={breed} getAnotherBreed={getAnotherBreed} />
      )}
    </>
  );
}
