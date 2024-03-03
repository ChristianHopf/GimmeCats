"use client";

import Tabs from "./Tabs";
import BreedSearch from "./BreedSearch";
import CatFacts from "./CatFacts";
import { useState } from "react";

export default function InfoCard({ breeds }: any) {
  const [selectedCard, setSelectedCard] = useState("breeds");

  const handleSelectCard = (tab: string) => {
    setSelectedCard(tab);
  };

  return (
    <div className="w-2/3 flex flex-col items-center">
      <Tabs onSelect={handleSelectCard} />
      {selectedCard === "breeds" && <BreedSearch breeds={breeds} />}
      {selectedCard === "facts" && <CatFacts />}
    </div>
  );
}
