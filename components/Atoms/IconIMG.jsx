import Image from "next/image";
import React from "react";

export default function IconIMG(srcIMG, altIMG) {
  return (
    <div className="w-5 flex justify-center inems-center">
      <Image src={srcIMG} alt={`${altIMG}`} />
    </div>
  );
}
