import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { setPassword } from "../../app/informationSlice";
const eye = <FontAwesomeIcon icon={faEye} />;

export default function Password() {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="relative flex flex-col items-center">
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        onChange={(data) =>
          dispatch(setPassword(data ? data.nativeEvent.target.value : null))
        }
        type={passwordShown ? "text" : "password"}
        name="password"
        id="password"
        className="appearance-none font-light relative block w-full px-3 py-2 placeholder-gray-300 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="password"
        aria-invalid="true"
      />
      <i
        className="absolute right-3 top-2 cursor-pointer"
        onClick={togglePasswordVisiblity}
      >
        {eye}
      </i>
    </div>
  );
}
