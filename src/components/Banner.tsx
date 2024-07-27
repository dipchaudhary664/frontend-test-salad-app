import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="bg-[#FFEA75] w-full h-52 px-4 rounded-md">
      <div className="grid grid-cols-[300px,1fr] items-center relative">
        <div className="space-y-6 px-4 py-8">
          <h1 className="text-3xl font-bold mb-2 text-[#012738]">
            Fresh & <br /> Tasty Salads
          </h1>
          <p className="text-md text-[#012738]">
            Relax, we've got you <br />
            covered every day of the week
          </p>
        </div>
        <div className="">
          <Image
            src={"/banner01.png"}
            alt={"banner image 01"}
            width={380}
            height={380}
            className="absolute object-cover top-0 right-4"
          />
          <Image
            src={"/banner02.png"}
            alt={"banner image 02"}
            width={600}
            height={600}
            className="absolute object-cover bottom-0 left-[26%]"
          />
        </div>
      </div>
    </div>
  );
}
