"use client";

import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import RandomCatCard from "./RandomCatCard";

export default function RandomCatBreed() {
  const [breed, setBreed] = useState({
    id: "",
    url: "",
    width: 0,
    height: 0,
    breeds: [{ id: "", name: "", origin: "", alt_names: "", description: "" }],
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
        <RandomCatCard breed={breed} getAnotherBreed={getAnotherBreed} />
      )}
    </>
  );
}
