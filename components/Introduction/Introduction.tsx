import React from "react";
import LeftIntroduction from "./LeftIntroduction/LeftIntroduction";
import RightIntroduction from "./RightIntroduction/RightIntroduction";

export default function Introduction() {
  return (
    <section className="flex items-center justify-evenly mt-[5rem] h-auto w-full">
      <LeftIntroduction />
      <RightIntroduction />
    </section>
  );
}
