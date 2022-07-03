import React from "react";
import SettingIconButton from "../../Atoms/SettingIconButton";

export default function NetworkSettings() {
  return (
    <div className="w-full bg-white rounded-3xl my-5 border border-black">
      <div className="text-semibold text-lg pt-5 ml-6">NETWORK SETTINGS</div>
      <div className="pb-8">
        <SettingIconButton
          number={3}
          title="APN NAME"
          lastItem={false}
          // subTitle1="Enable"
          // subTitle2="Disable"
          hoverNumber={22}
        />
      </div>
    </div>
  );
}
