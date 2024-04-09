"use client";
import Auto from "@/components/autocomp";
import { DatePicker } from "@/components/date/picker";
import SquigglyLines from "@/components/markers/squiggly-lines";
import PopoverDetails from "@/components/PopoverDetails";
import { title } from "@/components/primitives";
import SelectClass from "@/components/SelectClass";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import Link from "@nextui-org/link";
import { Pagination } from "@nextui-org/pagination";
import { Tabs, Tab } from "@nextui-org/tabs";
import { PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "react-day-picker";
import OfferCard from "@/components/cards/OfferCard";

export default function Offers() {
  const [selected, setSelected] = React.useState("photos") as any;
  return (
    <div>
      <h1 className={title()}>Offers</h1>
      <SquigglyLines />

      {/* <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
          radius="full"
          color="secondary"
          size="lg"
        >
          <Tab key="photos" title="Best">
            Best
          </Tab>
          <Tab key="music" title="Cheap">
            Cheap
          </Tab>
          <Tab key="videos" title="Fastest">
            Fastest
          </Tab>
        </Tabs>
      </div> */}

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3">
          <OfferCard />
        </div>
        {/* <div className=" ">2</div>
        <div className="">3</div>
        <div>4</div>
        <div>4</div> */}
      </div>
    </div>
  );
}
