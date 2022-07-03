import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function SuccessfulMessage({ MSG }) {
  return (
    <div className={"absolute w-11/12 -top-5 rounded-md bg-green-50 py-2 px-4"}>
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className={"h-5 w-5 text-green-400"}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className={"text-sm font-light text-green-800"}>{MSG}</p>
        </div>
      </div>
    </div>
  );
}
