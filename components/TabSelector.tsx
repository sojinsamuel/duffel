import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Auto from "@/components/autocomp";
import { DatePicker } from "@/components/date/picker";
import PopoverDetails from "@/components/PopoverDetails";
import SelectClass from "./SelectClass";
import { Button } from "@nextui-org/button";
import { Pagination } from "@nextui-org/pagination";
import { PlusIcon } from "lucide-react";

export default function TabSelector() {
  const [selected, setSelected] = React.useState("photos") as any;

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
        radius="full"
        color="secondary"
        size="lg"
      >
        <Tab key="photos" title="Return">
          <div className=" ">
            <Auto />
            <div className=" w-[50%] flex  gap-5  items-baseline justify-around mx-auto">
              <DatePicker placeholder="Departure" />
              <PopoverDetails />
              <DatePicker placeholder="Return" />
            </div>
            <SelectClass />
          </div>
        </Tab>
        <Tab key="music" title="One Way">
          <div className=" ">
            <Auto />
            <div className=" w-[50%] flex  gap-5  items-baseline justify-around mx-auto">
              <DatePicker placeholder="Departure" />
              <PopoverDetails />
              {/* <DatePicker placeholder="Return" /> */}
            </div>
            <SelectClass />
          </div>
        </Tab>
        <Tab key="videos" title="Multi city">
          <div className=" ">
            <Auto />
            <div className=" w-[50%] flex  gap-5  items-baseline justify-around mx-auto">
              <DatePicker placeholder="Departure" />
              <PopoverDetails />
              {/* <DatePicker placeholder="Return" /> */}
            </div>
            <SelectClass />
            <div className="w-full  flex flex-col items-center justify-center">
              <Button
                className="mt-5"
                disabled={true}
                color="primary"
                size="lg"
                startContent={<PlusIcon />}
              >
                Add destination
              </Button>
              <Pagination
                className="mt-5"
                showShadow
                color="warning"
                total={9}
                initialPage={1}
              />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
