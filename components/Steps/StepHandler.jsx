import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectCharacteristics from "../BikeChoosing/SelectCharacteristics";
// import Scrollbars from "react-custom-scrollbars";
import { setConfiguratorStep } from "../../app/configuratorSlice";
import FrameSize from "./frameSize";
import Colors from "./colors";
import Motor from "./motor";
import Battery from "./battery";
import Charger from "./charger";
import Display from "./display";
import Fork from "./fork";
import AssistSystem from "./assistSystem";
import Groupest from "./groupest";
import Handlebar from "./handlebar";
import Seatpost from "./seatpost";
import Rotor from "./rotor";
import Saddle from "./saddle";
import Price from "../BikeChoosing/Price";
import Sale from "../BikeChoosing/Sale";

function StepHandler() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let { configuratorStep } = state.configurator;
  return (
    <div>
      <div className="flex justify-around items-center mt-2 ml-4 sm:ml-0">
        <div>
          <h2 className="text-center font-abold text-gray-600 text-sm sm:text-xl lg:text-4xl sm:tracking-tight">
            NIREEKA HOMIE
            <span className="text-sm sm:text-base lg:text-xl font-light text-gray-600 ml-2">
              V23
            </span>
          </h2>
          <SelectCharacteristics />
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-gray-300 py-4 px-2 h-96 w-950 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" action="#" method="POST">
                {/* <Scrollbars
                  className=""
                  style={{ height: "calc(80vh - 300px)" }}
                >  */}

                <div
                  className="overflow-y-scroll overflow-x-hidden w-full"
                  style={{ height: "calc(80vh - 300px)" }}
                >
                  {configuratorStep.id === 1 && <FrameSize />}
                  {configuratorStep.id === 2 && <Colors />}
                  {configuratorStep.id === 3 && <Motor />}
                  {configuratorStep.id === 4 && <Battery />}
                  {configuratorStep.id === 5 && <Charger />}
                  {configuratorStep.id === 6 && <Display />}
                  {configuratorStep.id === 7 && <Fork />}
                  {configuratorStep.id === 8 && <AssistSystem />}
                  {configuratorStep.id === 9 && <Groupest />}
                  {configuratorStep.id === 10 && <Handlebar />}
                  {configuratorStep.id === 11 && <Seatpost />}
                  {configuratorStep.id === 12 && <Rotor />}
                  {configuratorStep.id === 13 && <Saddle />}
                </div>
                {/* </Scrollbars> */}
              </form>
            </div>
          </div>
          <Price />
          <Sale />
        </div>
      </div>
    </div>
  );
}

export default StepHandler;
