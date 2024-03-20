"use client";

import { useSearchParams } from "next/navigation";
import BasicInfo from "@/app/components/breed/BasicInfo";
import ExtendedInfo from "@/app/components/breed/ExtendedInfo";
import breed from "../../mock/breedData.json";
import { Oval } from "react-loader-spinner";
import { useEffect, useState, useMemo } from "react";
import { Breed } from "@/app/models/Breed";
import { useAppContext } from "@/context";

export default function BreedPage() {
  const { selectedBreed } = useAppContext();
  //   const searchParams = useSearchParams();
  //   const [breed, setBreed] = useState<Breed | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [selectedBreed]);

  // Some words returned by the API are not capitalized
  console.log(selectedBreed);

  return (
    <>
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
      {!loading && breed && (
        <section className="flex flex-row w-full container mb-16 gap-8">
          <BasicInfo
            name={selectedBreed.breeds[0].name}
            origin={selectedBreed.breeds[0].origin}
            url={selectedBreed.url}
            alt_names={selectedBreed.breeds[0].alt_names}
            description={selectedBreed.breeds[0].description}
          />
          <ExtendedInfo breed={selectedBreed} />
        </section>
      )}
    </>
  );
}
