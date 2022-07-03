import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBirthDate } from "../../app/informationSlice";

export default function BirthDate() {
  const dispatch = useDispatch();

  const birthday = new Date("10/26/1990");

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const countDown = (timeSpan) => {
    const today = new Date();
    timeSpan = birthday - today;

    const days = Math.floor(timeSpan / day);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);

    return days + " Days " + minutes + " Minutes " + seconds + " Seconds ";
  };
  setInterval(countDown, second);

  return (
    <div>
      <label htmlFor="Birth Date" className="sr-only">
        Birth Date
      </label>
      <input
        onChange={(data) =>
          dispatch(setBirthDate(data ? data.nativeEvent.target.value : null))
        }
        id="birth-date"
        name="birth-date"
        type="date"
        autoComplete="birth-date"
        className="appearance-none font-light relative block w-full px-3 py-2 placeholder-gray-300 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Birth Date (mm/dd/yyyy)"
      />
    </div>
  );
}
