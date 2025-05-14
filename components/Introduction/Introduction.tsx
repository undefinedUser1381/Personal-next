import React from "react";
import LeftIntroduction from "./LeftIntroduction/LeftIntroduction";
import RightIntroduction from "./RightIntroduction/RightIntroduction";

export default function Introduction() {
  return (
    <section className="flex flex-col lg:flex-row gap-14 md:gap-6 md:flex items-center justify-evenly mt-10 lg:mt-[5rem] h-auto w-full">
      <LeftIntroduction />
      <RightIntroduction />
    </section>
  );
}
