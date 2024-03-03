"use client";

import { useEffect, useState } from "react";
import BreedCard from "./BreedCard";
import type { Breed } from "../../models/Breed";
import { Oval } from "react-loader-spinner";

export default function BreedSearch({ breeds }: any) {
  const [breedInput, setBreedInput] = useState("");
  const [breedResults, setBreedResults] = useState<[] | undefined>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // When breed results load, set loading to false
    setLoading(false);
  }, [breedResults])

  const handleChange = (event: any) => {
    setBreedInput(event.target.value);
  };

  const searchBreeds = async () => {
    // put breedInput in the proper form
    const searchInput = breedInput.split(" ").join("").trim().toLowerCase();
    // Initialize list of matches
    let matches = [];
    // For every breed, check if the name contains the text input
    // If it does, add its id to the list of matches
    for (const breed of JSON.parse(breeds)) {
      if (breed.name.includes(searchInput)) {
        matches.push(breed.id);
      }
    }
    // For every match, get its breed data
    let results: any = [];
    for (const match of matches) {
      const res = await fetch(`api/breed/${match}`);
      const result = await res.json();
      results.push(result[0]);
    }
    setBreedResults(results);
    console.log(results);
  };

  return (
    <div className="w-full mt-4 rounded-md drop-shadow bg-white">
      <header className="flex flex-row justify-between px-4 py-2 items-center">
        <div className="flex flex-row gap-4">
          <h3 className="text-xl">Search breeds:</h3>
          <input
            type="text"
            value={breedInput}
            onChange={handleChange}
            className="bg-stone-100 rounded drop-shadow border-2 border-black"
          />
          <button onClick={searchBreeds}>Search</button>
        </div>
        <button className=" bg-stone-200 rounded px-4 py-2 text-xl">
          Filter
        </button>
      </header>
      {loading && (
        <div>
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#000000"
            secondaryColor="#282828"
            ariaLabel="oval-loading"
            //   wrapperStyle
            //   wrapperClass
          />
        </div>
      )}
      <div className="flex flex-col items-start">
        {breedResults?.map((breed: any) => {
          return <BreedCard key={breed.breeds[0].id} breed={breed} />;
        })}
      </div>
    </div>
  );
}
