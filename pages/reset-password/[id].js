import { useForm } from "react-hook-form";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  forgetPasswordPending,
  postResetPasswordPending,
} from "../../app/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
const eye = <FontAwesomeIcon icon={faEye} />;

function ResetPassword() {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const token = router.query.id;
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [c_passwordShown, setConfirmPasswordShown] = useState(false);
  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(c_passwordShown ? false : true);
  };

  let { isAuth, error, isLoading } = state.auth;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = ({ email, password, c_password }) => {
    dispatch(postResetPasswordPending({ email, password, c_password, token }));
  };
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-4 sm:my-10 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="sm:shadow sm:border sm:rounded-3xl">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="sm:mx-auto sm:w-full sm:max-w-md mt-2 flex flex-col justify-center items-center">
                <Link href="/">
                  <a>
                    <Image
                      height={80}
                      width={80}
                      className="mx-auto h-20 rounded-3 cursor-pointer"
                      src="https://nireeka.com/images/icon-rect.svg"
                      alt="Workflow"
                    />
                  </a>
                </Link>
                <h2 className="mt-6 text-center text-3xl font-light text-loginColor1">
                  Reset Password
                </h2>
                <p className="mt-2 text-center">
                  <p className="font-light text-loginColor2">
                    Enter New Password and Confirm Password to continue
                  </p>
                </p>
              </div>
              <div className="bg-white py-8 px-4 shadow sm:rounded-t-lg sm:px-10">
                <form
                  className="space-y-6"
                  onSubmit={handleSubmit(handleSubmitForm)}
                >
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none font-light relative block w-full px-3 py-2 placeholder-gray-300 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email-address"
                      {...register(`email`, {
                        required: {
                          value: true,
                          message: `Email is not valid.`,
                        },
                      })}
                    />
                  </div>

                  <div className="relative flex flex-col items-center">
                    <label htmlFor="Password" className="sr-only">
                      New Password
                    </label>
                    <input
                      // onChange={(data) =>
                      //   dispatch(
                      //     setPassword(
                      //       data ? data.nativeEvent.target.value : null
                      //     )
                      //   )
                      // }
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      id="password"
                      className="appearance-none font-light relative block w-full px-3 py-2 placeholder-gray-300 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="New Password"
                      aria-invalid="true"
                      {...register(`password`, {
                        required: `must be Required`,
                        // value: true,
                        minLength: {
                          value: 8,
                          message: `Password must be at least 8 characters long.`,
                        },
                      })}
                    />
                    <i
                      className="absolute right-3 top-2 cursor-pointer"
                      onClick={togglePasswordVisiblity}
                    >
                      {eye}
                    </i>
                  </div>

                  <div className="relative flex flex-col items-center">
                    <label htmlFor="password" className="sr-only">
                      Confirm Password
                    </label>
                    <input
                      id="confirm-password"
                      name="confirm-password"
                      type={c_passwordShown ? "text" : "password"}
                      autoComplete="confirm-password"
                      required
                      className="appearance-none font-light relative block w-full px-3 py-2 placeholder-gray-300 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Confirm Password"
                      {...register(`c_password`, {
                        required: `must be Required`,
                        minLength: {
                          value: 8,
                          message: `Confirm Password must be at least 8 characters long.`,
                        },
                      })}
                    />
                    <i
                      className="absolute right-3 top-2 cursor-pointer"
                      onClick={toggleConfirmPasswordVisiblity}
                    >
                      {eye}
                    </i>
                  </div>
                  {errors && errors.password && (
                    <div className="text-red-600 text-xs sm:text-sm font-light ml-2 margin-top-0">
                      {errors.password.message}
                    </div>
                  )}
                  {error === 401 && (
                    <div className="text-red-600 text-xs sm:text-sm font-light ml-2 margin-top-0">
                      E-mail or Password is Incorrect.
                    </div>
                  )}
                  {error === 500 && (
                    <div className="text-red-600 text-xs sm:text-sm font-light ml-2 margin-top-0">
                      Sorry, server is not available, thank you very much for
                      your patience.
                    </div>
                  )}
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border hover:border-loginColor1 border-transparent rounded-md shadow-sm text-sm font-light text-white hover:text-loginColor1 bg-loginColor1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
              <div className="py-6 px-4 shadow sm:rounded-b-3xl bg-gray-200 sm:px-10">
                <div>
                  <p className="font-light text-gray-500">Not a Member?</p>
                </div>
                <div className="text-xl font-light text-loginColor1 hover:text-gray-700">
                  <Link href="/register">Join The Nireeka Community</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
