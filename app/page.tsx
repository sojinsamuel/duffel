"use client";
import { title, subtitle } from "@/components/primitives";
// import SearchInput from "@/components/search";
import SquigglyLines from "@/components/markers/squiggly-lines";
// import SelectorPath from "@/components/select-path";
import Auto from "@/components/autocomp";
import { DatePicker } from "@/components/date/picker";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import TabSelector from "@/components/TabSelector";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl grow px-6 pt-16">
      <section className="flex flex-col items-center justify-center gap-4 ">
        <div className="inline-block max-w-lg justify-center text-center">
          <h1 className={title()}>Millions of&nbsp;</h1>
          <br />
          <h1 className={title({ color: "violet" })}>&nbsp;Cheap Flights</h1>
          {/* <br /> */}
          <h1 className={title()}>
            <span className="relative whitespace-nowrap ">
              <span className="relative">&nbsp;with</span>
            </span>
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>One Simple Search</h2>
          <SquigglyLines />
          {/* <div>
            
          </div> */}
        </div>
        {/* <div className="flex gap-14 mt-5 ">
          <SelectorPath
          btnName="Journey type"
          items={["one way", "return", "multicity"]}
          />
          
          <SelectorPath
          btnName="Class"
          items={["economy", "business", "first class"]}
          />
        </div> */}
        <TabSelector />
        {/* <Auto /> */}
        {/* <div className=" w-[50%] flex justify-around items-center">
          <DatePicker placeholder="Departure" />
          <DatePicker placeholder="Return" />
        </div> */}
      </section>
    </div>
  );
}
