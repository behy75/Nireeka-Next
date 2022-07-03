import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Image from "next/image";

function Slider() {
  const [index, setIndex] = useState(0);
  const [scale, setScalse] = useState(0.9);
  const ImagesSlider = [
    {
      id: 1,
      srcImg:
        "https://nireeka.com/storage/product/0zqMPO2BfXlwEKcelkXPpFjN3z8Rs5wUMy4uJPwv.jpg",
    },
    {
      id: 2,
      srcImg:
        "https://nireeka.com/storage/product/K7SUIyLlO36RROL9oygUxaMfKtnPrntOvTCTVJOB.jpg",
    },
    {
      id: 3,
      srcImg:
        "https://nireeka.com/storage/product/s8DlsSvtXW9xtg0F7U0AqKibMLbFlblonW0Ev3UT.jpg",
    },
  ];
  const ImagesSliderLength = ImagesSlider.length;

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index < ImagesSliderLength - 1 ? index + 1 : 0);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  useEffect(() => {
    let scaleItem = setInterval(() => {
      if (scale < 1.1) {
        setScalse(scale + 0.001);
      }
      if (scale > 1.1) {
        setScalse(0.9);
      }
    }, 70);
    return () => clearInterval(scaleItem);
  }, [scale]);

  useEffect(() => {
    setScalse(0.9);
  }, [index]);

  return (
    <div className="relative w-full h-full flex justify-center items-center bg-white">
      <div
        style={{ transform: `scale(${scale})` }}
        className="flex justify-center items-center hover:"
      >
        <Image
          src={ImagesSlider[index].srcImg}
          alt="df"
          width={720}
          height={720}
        />
      </div>
      <div
        className="absolute left-0 cursor-pointer bg-blue-300 p-1 rounded-md"
        onClick={() => setIndex(index > 0 ? index - 1 : ImagesSliderLength - 1)}
      >
        <FiChevronLeft className="text-white" />
      </div>
      <div
        className="absolute right-0 cursor-pointer bg-blue-300 p-1 rounded-md"
        onClick={() => setIndex(index < ImagesSliderLength - 1 ? index + 1 : 0)}
      >
        <FiChevronRight className="text-white" />
      </div>
    </div>
  );
}

export default Slider;
