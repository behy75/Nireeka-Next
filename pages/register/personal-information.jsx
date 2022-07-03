import React from "react";
import Gender from "../../components/Login/Gender";
import Height from "../../components/Login/Height";
import Inseam from "../../components/Login/Inseam";
import Weight from "../../components/Login/Weight";
import { useSelector, useDispatch } from "react-redux";
import { registerSecondPending } from "../../app/authSlice";
import { useForm } from "react-hook-form";
import BirthDate from "../../components/Login/BirthDate";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Personalinformation() {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  let { birth_date, gender, height, weight, inseam } = state.information;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = () => {
    const data = {
      birth_date,
      gender,
      height,
      weight,
      inseam,
    };
    dispatch(registerSecondPending(data));
    router.push("/user-panel");
  };

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-4 sm:my-10 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="sm:shadow sm:border sm:rounded-3xl">
            <div className="sm:mx-auto sm:w-full sm:max-w-md mt-2">
              <img
                className="mx-auto h-20 rounded-3"
                src="https://nireeka.com/images/icon-rect.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-light text-loginColor1">
                Join The Nireeka World!
              </h2>
              <p className="mt-2 text-center">
                <span className="font-light text-loginColor2">
                  Please Complete Contact info to continue
                </span>
              </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 sm:px-10">
                <form
                  className="space-y-6"
                  onSubmit={handleSubmit(handleSubmitForm)}
                >
                  <BirthDate />

                  <Gender />

                  <Height />

                  <Weight />

                  <Inseam />

                  <div className="flex justify-around">
                    <button
                      type="submit"
                      className="w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-light text-loginColor1 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-loginColor1"
                    >
                      Skip
                    </button>
                    <button
                      type="submit"
                      className="w-1/3 flex justify-center py-2 px-4 border hover:border-loginColor1 border-transparent rounded-md shadow-sm text-sm font-light text-white hover:text-indigo-500 bg-loginColor1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Entry
                    </button>
                  </div>
                </form>
              </div>
              <div className="py-6 px-4 shadow sm:rounded-b-3xl bg-gray-200 sm:px-10">
                <div>
                  <p className="font-light text-gray-500">
                    Check Personal Information
                  </p>
                </div>
                <div className="text-xl font-light text-loginColor1 hover:text-gray-700">
                  <Link href={"/register"}>
                    <a>Register</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
