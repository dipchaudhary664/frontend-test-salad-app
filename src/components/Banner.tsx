import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="bg-[#FFEA75] w-full grid grid-cols-[253px,1fr] items-center relative h-32 md:h-52 px-0 md:px-4 rounded-md">
      <div className="space-y-1 pl-4 py-2">
        <h1 className="text-lg md:text-3xl font-bold mb-2 text-[#012738]">
          Fresh & <br /> Tasty Salads
        </h1>
        <p className="text-md text-[#012738]">
          Relax, we've got you covered every day of the week
        </p>
      </div>
      <div className="">
        <Image
          src={"/banner01.png"}
          alt={"banner image 01"}
          width={380}
          height={380}
          className="absolute object-cover top-0 right-[-4%] md:right-4 w-[200px] h-[90px] md:w-[400px] md:h-[200px]"
        />
        <Image
          src={"/banner02.png"}
          alt={"banner image 02"}
          width={600}
          height={600}
          className="absolute object-cover bottom-0 left-[26%] hidden md:flex"
        />
      </div>
    </div>
  );
}
