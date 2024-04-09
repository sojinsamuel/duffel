import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import SearchInput from "./search";
export const animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    value: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", value: "lion", description: "The king of the jungle" },
  { label: "Tiger", value: "tiger", description: "The largest cat species" },
  {
    label: "Giraffe",
    value: "giraffe",
    description: "The tallest land animal",
  },
  {
    label: "Dolphin",
    value: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  {
    label: "Penguin",
    value: "penguin",
    description: "A group of aquatic flightless birds",
  },
  {
    label: "Zebra",
    value: "zebra",
    description: "A several species of African equids",
  },
  {
    label: "Shark",
    value: "shark",
    description:
      "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    value: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  {
    label: "Otter",
    value: "otter",
    description: "A carnivorous mammal in the subfamily Lutrinae",
  },
  {
    label: "Crocodile",
    value: "crocodile",
    description: "A large semiaquatic reptile",
  },
];

export default function Auto() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mx-auto justify-center items-center">
      <Autocomplete
        label="From"
        placeholder="Country, city or airport"
        className="max-w-xs"
        defaultItems={animals}
        size="md"
      >
        {(item) => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
      <Autocomplete
        label="To"
        placeholder="Country, city or airport"
        className="max-w-xs"
        defaultItems={animals}
        size="md"
      >
        {(anotherItem) => (
          <AutocompleteItem key={anotherItem.value}>
            {anotherItem.label}
          </AutocompleteItem>
        )}
      </Autocomplete>
      {/* <Autocomplete
        label="Depart"
        placeholder="Country, city or airport"
        className="max-w-xs w-[220px]"
        defaultItems={[{ label: "", value: "" }]}
        size="md"
        onClick={(e) => console.log(e)}
        value=""
      >
        {(item) => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
      <Autocomplete
        label="Return"
        placeholder="Country, city or airport"
        className="max-w-xs w-[220px]"
        defaultItems={[{ label: "", value: "" }]}
        size="md"
        onClick={(e) => console.log(e)}
        value=""
      >
        {(item) => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete> */}
      {/* <SearchInput label="Depart" /> */}
    </div>
  );
}
