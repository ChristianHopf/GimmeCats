import Image from "next/image";
import { promises as fs } from "fs";
import Header from "./components/ui/Header";
import InfoCard from "./components/home/InfoCard";
import RandomCatBreed from "./components/home/RandomCatBreed";

export default async function Home() {
  const breeds = await fs.readFile(process.cwd() + "/app/breeds.json", "utf8");
  return (
    <>
      {/* <Header /> */}
      <section className="flex flex-row w-full container mb-16">
        <InfoCard breeds={breeds} />
        <RandomCatBreed />
      </section>
      {/* footer perhaps */}
    </>
  );
}
