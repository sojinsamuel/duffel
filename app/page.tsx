"use client";
import { title, subtitle } from "@/components/primitives";
import SearchInput from "@/components/search";
import SquigglyLines from "@/components/markers/squiggly-lines";
import Auto from "@/components/autocomp";

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
          <h2 className={subtitle({ class: "mt-4" })}>
            One Simple Search
            {/* <SquigglyLines /> */}
          </h2>
          {/* <div>
            
          </div> */}
        </div>
        {/* <div className="flex justify-center items-center w-full"> */}
        <Auto />
        {/* <SearchInput label="Depart" /> */}
        {/* </div> */}
      </section>
    </div>
  );
}
