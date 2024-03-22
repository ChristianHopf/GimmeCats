"use client";
import { Breed } from "@/app/models/Breed";
import { createContext, useState, useContext } from "react";

// type Context = {
//   breeds: { id: string; name: string }[];
//   selectedBreed: Breed | undefined;
// };

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [selectedBreed, setSelectedBreed] = useState<Breed | undefined>(
    getLocalStorage("selectedBreed", "")
  );
  let [searchedBreeds, setSearchedBreeds] = useState<Breed[] | undefined>(
    getLocalStorage("searchedBreeds", "")
  );
  let breeds = [
    {
      id: "abys",
      name: "abyssinian",
    },
    {
      id: "aege",
      name: "aegean",
    },
    {
      id: "abob",
      name: "americanbobtail",
    },
    {
      id: "acur",
      name: "americancurl",
    },
    {
      id: "asho",
      name: "americanshorthair",
    },
    {
      id: "awir",
      name: "americanwirehair",
    },
    {
      id: "amau",
      name: "arabianmau",
    },
    {
      id: "amis",
      name: "australianmist",
    },
    {
      id: "bali",
      name: "balinese",
    },
    {
      id: "bamb",
      name: "bambino",
    },
    {
      id: "beng",
      name: "bengal",
    },
    {
      id: "birm",
      name: "birman",
    },
    {
      id: "bomb",
      name: "bombay",
    },
    {
      id: "bslo",
      name: "britishlonghair",
    },
    {
      id: "bsho",
      name: "britishshorthair",
    },
    {
      id: "bure",
      name: "burmese",
    },
    {
      id: "buri",
      name: "burmilla",
    },
    {
      id: "cspa",
      name: "californiaspangled",
    },
    {
      id: "ctif",
      name: "chantilly-tiffany",
    },
    {
      id: "char",
      name: "chartreux",
    },
    {
      id: "chau",
      name: "chausie",
    },
    {
      id: "chee",
      name: "cheetoh",
    },
    {
      id: "csho",
      name: "colorpointshorthair",
    },
    {
      id: "crex",
      name: "cornishrex",
    },
    {
      id: "cymr",
      name: "cymric",
    },
    {
      id: "cypr",
      name: "cyprus",
    },
    {
      id: "drex",
      name: "devonrex",
    },
    {
      id: "dons",
      name: "donskoy",
    },
    {
      id: "lihu",
      name: "dragonli",
    },
    {
      id: "emau",
      name: "egyptianmau",
    },
    {
      id: "ebur",
      name: "europeanburmese",
    },
    {
      id: "esho",
      name: "exoticshorthair",
    },
    {
      id: "hbro",
      name: "havanabrown",
    },
    {
      id: "hima",
      name: "himalayan",
    },
    {
      id: "jbob",
      name: "japanesebobtail",
    },
    {
      id: "java",
      name: "javanese",
    },
    {
      id: "khao",
      name: "khaomanee",
    },
    {
      id: "kora",
      name: "korat",
    },
    {
      id: "kuri",
      name: "kurilian",
    },
    {
      id: "lape",
      name: "laperm",
    },
    {
      id: "mcoo",
      name: "mainecoon",
    },
    {
      id: "mala",
      name: "malayan",
    },
    {
      id: "manx",
      name: "manx",
    },
    {
      id: "munc",
      name: "munchkin",
    },
    {
      id: "nebe",
      name: "nebelung",
    },
    {
      id: "norw",
      name: "norwegianforestcat",
    },
    {
      id: "ocic",
      name: "ocicat",
    },
    {
      id: "orie",
      name: "oriental",
    },
    {
      id: "pers",
      name: "persian",
    },
    {
      id: "pixi",
      name: "pixie-bob",
    },
    {
      id: "raga",
      name: "ragamuffin",
    },
    {
      id: "ragd",
      name: "ragdoll",
    },
    {
      id: "rblu",
      name: "russianblue",
    },
    {
      id: "sava",
      name: "savannah",
    },
    {
      id: "sfol",
      name: "scottishfold",
    },
    {
      id: "srex",
      name: "selkirkrex",
    },
    {
      id: "siam",
      name: "siamese",
    },
    {
      id: "sibe",
      name: "siberian",
    },
    {
      id: "sing",
      name: "singapura",
    },
    {
      id: "snow",
      name: "snowshoe",
    },
    {
      id: "soma",
      name: "somali",
    },
    {
      id: "sphy",
      name: "sphynx",
    },
    {
      id: "tonk",
      name: "tonkinese",
    },
    {
      id: "toyg",
      name: "toyger",
    },
    {
      id: "tang",
      name: "turkishangora",
    },
    {
      id: "tvan",
      name: "turkishvan",
    },
    {
      id: "ycho",
      name: "yorkchocolate",
    },
  ];

  return (
    <AppContext.Provider
      value={{
        breeds,
        selectedBreed,
        setSelectedBreed,
        searchedBreeds,
        setSearchedBreeds,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

function getLocalStorage(key: string, initialValue: any) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}
