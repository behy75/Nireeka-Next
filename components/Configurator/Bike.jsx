import Image from "next/image";
import React from "react";
import HomieBike from "../../public/images/homie.jpg";

export default function Bike() {
  return (
    <div className="mt-5 md:my-2 xl:my-20 mx-2">
      <Image
        alt="bike"
        className="w-auto"
        width={700}
        height={400}
        src={HomieBike}
      />
    </div>
  );
}
