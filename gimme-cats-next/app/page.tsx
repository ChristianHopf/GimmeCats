"use client";

import InfoCard from "./components/home/InfoCard";
import RandomCatBreed from "./components/home/RandomCatBreed";

export default function Home() {
  // const breeds = await fs.readFile(process.cwd() + "/app/breeds.json", "utf8");
  return (
    <>
      {/* <Header /> */}
      <section className="flex flex-row container w-full mb-16 gap-8">
        <InfoCard />
        <RandomCatBreed />
      </section>
      {/* footer perhaps */}
    </>
  );
}
