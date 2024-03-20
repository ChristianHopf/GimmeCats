import { Breed } from "@/app/models/Breed";
import { link } from "fs";

interface Props {
  breed: Breed;
}

interface InfoLineProps {
  title: string;
  value: number;
  binary?: boolean;
  scale?: boolean;
  high?: boolean;
}

// Level: number on a scale of 1 to 5
// High: boolean value that represents whether a high value is desirable
// high => green text for values 4 and 5, red text for values 1 and 2
// !high => red text for values 4 and 5, green text for values 1 and 2
function getOneToFiveColor(level: number, high: boolean = true) {
  switch (level) {
    case 1:
      return high ? "text-red-500" : "text-green-500";
    case 2:
      return high ? "text-red-500" : "text-green-500";
    case 3:
      return "text-yellow-400";
    case 4:
      return high ? "text-green-500" : "text-red-500";
    default:
      return high ? "text-green-500" : "text-red-500";
  }
}
function getBinaryColor(level: number) {
  return level === 1 ? "text-green-500" : "text-red-500";
}

export default function ExtendedInfo({ breed }: Props) {
  const temperament = breed?.breeds[0].temperament.split(", ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return (
    <div className="w-1/2 flex flex-col mt-4">
      <h1 className="text-4xl px-2 mb-2">Extended information:</h1>
      <div className="flex flex-col px-4 py-4 shadow border border-gray-200 rounded-lg max-h-[900px] overflow-auto">
        <div className="mb-2">
          <h1 className="text-3xl mb-2">General</h1>
          <div className="px-1">
            <span>
              <h3 className="text-xl mb-2 text-gray-800">Temperament:</h3>
              <ul className="flex flex-row flex-wrap gap-4 mb-2">
                {temperament.map((attr) => (
                  <li
                    key={attr}
                    className="px-4 py-2 bg-white border border-gray-200 shadow rounded-lg"
                  >
                    <p className="text-lg">{attr}</p>
                  </li>
                ))}
              </ul>
            </span>
            <span className="flex flex-row items-baseline gap-2 mb-2">
              <h3 className="text-xl text-gray-800">Life span:</h3>
              <p className="text-lg">{breed.breeds[0].life_span} years</p>
            </span>
            <InfoLine
              title="Indoor cat"
              value={breed.breeds[0].indoor}
              binary={true}
            />
            <InfoLine
              title="Lap cat"
              value={breed.breeds[0].lap}
              binary={true}
            />
            <InfoLine
              title="Child friendly"
              value={breed.breeds[0].child_friendly}
            />
            <InfoLine
              title="Dog friendly"
              value={breed.breeds[0].dog_friendly}
            />
            <InfoLine
              title="Stranger friendly"
              value={breed.breeds[0].stranger_friendly}
            />
            <InfoLine
              title="Affection level"
              value={breed.breeds[0].affection_level}
            />
            <InfoLine
              title="Energy level"
              value={breed.breeds[0].energy_level}
            />
            <InfoLine
              title="Intelligence"
              value={breed.breeds[0].intelligence}
            />
            <InfoLine
              title="Adaptability"
              value={breed.breeds[0].adaptability}
            />
          </div>
        </div>
        <div className="mb-2">
          <h1 className="text-3xl mb-2">Maintenance</h1>
          <div className="">
            <InfoLine
              title="Grooming"
              value={breed.breeds[0].grooming}
              high={false}
            />
            <InfoLine
              title="Shedding level"
              value={breed.breeds[0].shedding_level}
              high={false}
            />
            <InfoLine
              title="Social needs"
              value={breed.breeds[0].social_needs}
              high={false}
            />
            <InfoLine
              title="Health issues"
              value={breed.breeds[0].health_issues}
              high={false}
            />
            <InfoLine
              title="Hypoallergenic"
              value={breed.breeds[0].hypoallergenic}
              binary={true}
            />
          </div>
        </div>
        <div className="mb-2">
          <h1 className="text-3xl mb-2">Miscellaneous</h1>
          <div className="px-1">
            <InfoLine
              title="Vocalization"
              value={breed.breeds[0].vocalisation}
              binary={true}
            />
            <InfoLine
              title="Experimental"
              value={breed.breeds[0].experimental}
              binary={true}
            />
            <InfoLine
              title="Hairless"
              value={breed.breeds[0].hairless}
              binary={true}
            />
            <InfoLine
              title="Natural"
              value={breed.breeds[0].natural}
              binary={true}
            />
            <InfoLine title="Rare" value={breed.breeds[0].rare} binary={true} />
            <InfoLine title="Rex" value={breed.breeds[0].rex} binary={true} />
            <InfoLine
              title="Suppressed tail"
              value={breed.breeds[0].suppressed_tail}
              binary={true}
            />
            <InfoLine
              title="Short legs"
              value={breed.breeds[0].short_legs}
              binary={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Default behavior: Style the p tag by treating the value as a number between 1 and 5
function InfoLine({
  title,
  value,
  binary = false,
  scale = true,
  high = true,
}: InfoLineProps) {
  return (
    <span className="flex flex-row items-baseline gap-2 mb-2">
      <h3 className="text-xl text-gray-800">{title}: </h3>
      <p
        className={`text-xl ${
          binary ? getBinaryColor(value) : getOneToFiveColor(value, high)
        }`}
      >
        {binary ? (value === 1 ? "Yes" : "No") : value + "/5"}
      </p>
    </span>
  );
}
