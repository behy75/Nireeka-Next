import { useForm } from "react-hook-form";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { forgetPasswordPending } from "../../app/authSlice";
import LoadingNireeka from "../../components/Atoms/LoadingNireeka";
import { useRouter } from "next/router";

function ForgetPassword() {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { message, status, isAuth, isLoading, error } = state.auth;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("message", message);
  const handleSubmitForm = ({ email }) => {
    dispatch(forgetPasswordPending(email));
  };

  useEffect(() => {
    if (isAuth) {
      router.push("/user-panel");
    }
  }, [isAuth, router]);
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
                  Forget Password
                </h2>
                <p className="mt-2 text-center">
                  <span className="font-light text-loginColor2">
                    Enter your email to continue
                  </span>
                </p>
              </div>
              <div className="bg-white py-8 px-4 shadow sm:rounded-t-lg sm:px-10">
                <form
                  className="space-y-2"
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
                  {error === false && (
                    <div className="text-nireekaGreen text-xs sm:text-sm font-light ml-2 margin-top-0">
                      {message}
                    </div>
                  )}
                  {status === 422 && (
                    <div className="text-red-600 text-xs sm:text-sm font-light ml-2 margin-top-0">
                      {message}
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border hover:border-loginColor1 border-transparent rounded-md shadow-sm text-sm font-light text-white hover:text-loginColor1 bg-loginColor1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {!isLoading ? (
                        <p> Send Password Reset Link</p>
                      ) : (
                        <LoadingNireeka
                          colorLoading={"text-white"}
                          widthLoading={"w-4"}
                          heightLoading={"h-4"}
                          borderLoading={"border-2"}
                        />
                      )}
                    </button>
                  </div>
                </form>
              </div>
              <div className="py-6 px-4 shadow sm:rounded-b-3xl bg-gray-200 sm:px-10">
                <div>
                  <p className="font-light text-gray-500">Not a Member?</p>
                </div>
                <div className="text-xl font-light text-loginColor1 hover:text-gray-700">
                  <Link href="/register">
                    <a>Join The Nireeka Community</a>
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

export default ForgetPassword;
