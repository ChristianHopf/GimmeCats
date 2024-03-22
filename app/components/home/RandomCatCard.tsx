import Image from "next/image";
import PronounceBreed from "@/app/misc/PronounceBreed";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context";

interface Props {
  getAnotherBreed: () => void;
  breed: {
    id: string;
    url: string;
    width: number;
    height: number;
    breeds: {
      id: string;
      name: string;
      origin: string;
      alt_names: string;
      description: string;
    }[];
  };
}

export default function RandomCatCard({ getAnotherBreed, breed }: Props) {
  const router = useRouter();
  const { setSelectedBreed } = useAppContext();
  const id = breed.breeds[0].id;

  return (
    <div
      className="w-1/3 flex flex-col"
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
      <button
        onClick={getAnotherBreed}
        className="bg-white border border-gray-200 hover:bg-gray-100 cursor-pointer rounded-lg shadow w-2/3 mx-auto px-8 py-8 mt-4"
      >
        <p className="text-4xl">Click for a random cat!</p>
      </button>
      <div className="flex flex-col mt-4">
        <header className="flex flex-row justify-between">
          <span className="flex flex-row flex-wrap px-2 mb-2 gap-2 items-baseline">
            <h1 className="text-4xl">{breed.breeds[0].name}</h1>
            <p className="text-xl text-stone-600">{breed.breeds[0].origin}</p>
          </span>
          <PronounceBreed name={breed.breeds[0].name} />
        </header>
        <div className="bg-white border border-gray-200 hover:bg-gray-100 cursor-pointer rounded-lg shadow">
          <Image
            src={breed.url}
            width={275}
            height={275}
            alt="bruh"
            className="object-cover w-full rounded-t-lg"
            unoptimized={true}
          />
          <div className="px-2 mb-2">
            <p className="text-stone-600 mb-2">
              {breed.breeds[0].alt_names !== ""
                ? `Alternative names: ${breed.breeds[0].alt_names}`
                : ""}
            </p>
            <p className="text-lg mb-2">{breed.breeds[0].description}</p>
            <p className="text-stone-600">Click to learn more</p>
          </div>
        </div>
      </div>
    </div>
  );
}
