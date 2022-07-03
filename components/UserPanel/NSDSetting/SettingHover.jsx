import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import MetricImperial from "../../../public/images/metric-imperial.png";
import ChartMetricImperial from "../../../public/images/chart-of-length-conversion-rates.jpg";

export default function SettingHover() {
  const state = useSelector((state) => state);
  let { hoverSelected } = state.userPanel;

  return (
    <div className="mt-5">
      {hoverSelected === 1 && (
        <div>
          <div className="my-10 text-semibold text-2xl">UNIT:</div>
          <div className="flex justify-center inems-center">
            <Image src={MetricImperial} alt="metric-imperial" />
          </div>
          <div className="my-5 flex justify-center inems-center">
            <Image src={ChartMetricImperial} alt="chart-of-metric-imperial" />
          </div>
        </div>
      )}
      {hoverSelected === 3 && (
        <div>
          <div className="my-10 text-semibold text-2xl">AUTO OFF:</div>
          <div className="my-5 ml-5">
            This feature turns off the bike if its unused for a specific time.
          </div>
          <div className="my-5 ml-5">
            On: Select this option to turn your bike off after your selected
            time period.
          </div>
          <div className="my-5 ml-5">
            Off: Select this option, if you like to keep your bike on, no matter
            how long you keep the bike unused.
          </div>
        </div>
      )}
      {hoverSelected === 5 && (
        <div>
          <div className="my-10 text-semibold text-2xl">WHEEL SIZE:</div>
          <div className="my-5 ml-5">{` Homie: 27.5"`}</div>
          <div className="my-5 ml-5">{` Nyx: 29"`}</div>
          <div className="my-5 ml-5">{`Prime: 30"`}</div>
        </div>
      )}
    </div>
  );
}
