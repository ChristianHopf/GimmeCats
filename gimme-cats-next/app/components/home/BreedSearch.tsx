"use client";

import { useEffect, useState } from "react";
import BreedCard from "./BreedCard";
import type { Breed } from "../../models/Breed";
import { Oval } from "react-loader-spinner";
import { useAppContext } from "@/context";

export default function BreedSearch() {
  const { breeds } = useAppContext();

  const [breedInput, setBreedInput] = useState("");
  const [breedResults, setBreedResults] = useState<[] | undefined>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // When breed results load, set loading to false
    setLoading(false);
  }, [breedResults]);

  const handleChange = (event: any) => {
    setBreedInput(event.target.value);
  };

  const searchBreeds = async () => {
    // Set loading state to true
    setLoading(true);
    // Put breedInput in the proper form
    const searchInput = breedInput.split(" ").join("").trim().toLowerCase();
    // Initialize list of matches
    let matches = [];
    // For every breed, check if the name contains the text input
    // If it does, add its id to the list of matches
    for (const breed of breeds) {
      if (breed.name.includes(searchInput)) {
        matches.push(breed.id);
      }
    }
    // For every match, get its breed data
    let results: any = [];
    for (const match of matches) {
      // API returns an empty array on any request with id mala
      if (match === "mala") {
        continue;
      }
      const res = await fetch(`api/breed/${match}`);
      const result = await res.json();
      console.log(result[0]);
      results.push(result[0]);
    }
    setBreedResults(results);
    console.log(results);
  };

  return (
    <>
      <div className="w-full max-w-[1000px] mt-4 rounded-md shadow border border-gray-200 bg-white">
        <header className="flex flex-row justify-between px-4 py-2 items-center">
          <div className="flex flex-row gap-4 items-center">
            <h3 className="text-xl">Search breeds:</h3>
            <input
              type="text"
              value={breedInput}
              onChange={handleChange}
              className="px-2 py-1 rounded-md shadow border border-gray-200 h-full focus:outline-none focus:border-gray-400"
            />
            <button
              className=" hover:bg-gray-200 rounded px-4 py-2 text-lg"
              onClick={searchBreeds}
            >
              Search
            </button>
          </div>
          <button className=" hover:bg-gray-200 rounded px-4 py-2 text-lg">
            Filter
          </button>
        </header>
      </div>
      {loading && (
        <div className="mt-8">
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
      )}
      {!loading && breedResults?.length > 0 && (
        <div className="flex flex-col items-start mt-4 px-4 py-4 gap-4 shadow border border-gray-200 rounded-lg overflow-auto max-h-[900px]">
          {breedResults?.map((breed: any) => {
            return <BreedCard key={breed.breeds[0].id} breed={breed} />;
          })}
        </div>
      )}
    </>
  );
}
