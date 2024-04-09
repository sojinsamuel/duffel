import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import {
  HeartIcon,
  PauseCircleIcon,
  NextIcon,
  PreviousIcon,
  RepeatOneIcon,
  ShuffleIcon,
} from "@/components/Icons/symbol";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Slider } from "@nextui-org/slider";
import { Select, SelectItem } from "@nextui-org/select";

export const choices = [
  {
    label: "Best",
    value: "best",
    description: "Option prioritizing the best overall experience",
  },
  {
    label: "Cheapest first",
    value: "cheapest",
    description: "Option prioritizing the lowest cost",
  },
  {
    label: "Fastest first",
    value: "fastest",
    description: "Option prioritizing the shortest travel time",
  },
  {
    label: "Outbound departure time",
    value: "outbound",
    description: "Option prioritizing departure time for outbound flights",
  },
  {
    label: "Return departure time",
    value: "return",
    description: "Option prioritizing departure time for return flights",
  },
];

export default function OfferCard() {
  const [liked, setLiked] = React.useState(false);

  return (
    <div className="max-w-4xl mx-auto  shadow-lg rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">2 results</h2>
        <Select label="Sort by" size="sm" className="w-[200px]">
          {choices.map((choice) => (
            <SelectItem key={choice.value} value={choice.value}>
              {choice.label}
            </SelectItem>
          ))}
        </Select>

        <div className="flex items-center">{/* select */}</div>
      </div>
      <div className="grid grid-cols-1 gap-4 w-[36vw]">
        <Card
          className="rounded-lg border text-card-foreground shadow-sm "
          data-v0-t="card"
        >
          <CardBody className="flex flex-col space-y-1.5 p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">Air India + Ethiopian Airlines</p>
                <p className="text-sm">Partly operated by ASKY Airlines</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-gray-400"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
          </CardBody>
          <div className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-lg">20:40 - 16:10+</p>
                <p className="text-sm">25h</p>
                <p className="text-sm">TRV - DSS</p>
                <p className="text-sm">3 stops BOM, ADD, LFW</p>
              </div>
              <div>
                <p className="font-bold text-lg">₹134,955</p>
                <p className="text-sm">₹269,910 total</p>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Select →
                </button>
              </div>
            </div>
          </div>
        </Card>
        <Card
          className="rounded-lg border text-card-foreground shadow-sm "
          data-v0-t="card"
        >
          <CardBody className="flex flex-col space-y-1.5 p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">Ethiopian Airlines + IndiGo</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-gray-400"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
          </CardBody>
          <div className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-lg">08:00 - 12:25+</p>
                <p className="text-sm">22h 55</p>
                <p className="text-sm">DSS - TRV</p>
                <p className="text-sm">3 stops BKO, ADD, BLR</p>
              </div>
              <div>
                <p className="font-bold text-lg">₹134,955</p>
                <p className="text-sm">₹269,910 total</p>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Select →
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center p-6">
            <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              Self-transfer
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
