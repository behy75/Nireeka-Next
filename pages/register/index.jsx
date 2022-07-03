import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { registerPending } from "../../app/authSlice";
import LoadingNireeka from "../../components/Atoms/LoadingNireeka";
const eye = <FontAwesomeIcon icon={faEye} />;

function Register() {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { isLoading, error, isAuth, data } = state.auth;

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [c_passwordShown, setConfirmPasswordShown] = useState(false);
  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(c_passwordShown ? false : true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const passwordError = null;
  const handleSubmitForm = (data) => {
    const registerData = {
      name: data.name,
      lastname: data.lastName,
      email: data.email,
      password: data.password,
      password_confirmation: data.c_password,
    };

    dispatch(registerPending(registerData));
  };

  useEffect(() => {
    if (isAuth) {
      router.push("/register/personal-information");
    }
  }, [isAuth, router]);

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
                  Please register to continue
                </span>
              </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 sm:px-10">
                <form
                  className="space-y-6"
                  onSubmit={handleSubmit(handleSubmitForm)}
                >
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name-address"
                      name="name"
                      type="text"
                      required
                      className="appearance-none font-light relative block w-full px-3 py-2 placeholder-gray-300 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Name"
                      {...register(`name`, {
                        required: {
                          value: true,
                          message: `Name is not valid.`,
                        },
                      })}
                    />
                  </div>

                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Last Name
                    </label>
                    <input
                      id="last-name-address"
                      name="lastName"
                      type="text"
                      autoComplete="lastName"
                      required
                      className="appearance-none font-light relative block w-full px-3 py-2 placeholder-gray-300 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Last Name"
                      {...register(`lastName`, {
                        required: {
                          value: true,
                          message: `LastName is not valid.`,
                        },
                      })}
                    />
                  </div>

                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      required
                      className="appearance-none font-light relative block w-full px-3 py-2 placeholder-gray-300 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="E-mail"
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
                      Password
                    </label>
                    <input
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      id="password"
                      className="appearance-none font-light relative block w-full px-3 py-2 placeholder-gray-300 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                      aria-invalid="true"
                      {...register(`password`, {
                        required: `must be Required`,
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
                  {errors && errors.c_password && (
                    <div className="text-red-600 text-xs sm:text-sm font-light ml-2 margin-top-0">
                      {errors.c_password.message}
                    </div>
                  )}
                  {error === 403 && data && data.email && data.email[0] && (
                    <div className="text-red-600 text-xs sm:text-sm font-light ml-2 margin-top-0">
                      The email has already been taken.
                    </div>
                  )}
                  {error === 403 &&
                    data &&
                    data.password &&
                    data.password[0] && (
                      <div className="text-red-600 text-xs sm:text-sm font-light ml-2 margin-top-0">
                        Your password and password confirmation do not match.
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
                      className="w-full flex justify-center py-2 px-4 placeholder-gray-300 border hover:border-loginColor1 border-transparent rounded-md shadow-sm text-sm font-light text-white hover:text-loginColor1 bg-loginColor1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {!isLoading ? (
                        <p>Register</p>
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
                  <p className="font-light text-gray-500">
                    Already a Nireeka Member?
                  </p>
                </div>
                <div className="text-xl font-light text-loginColor1 hover:text-gray-700">
                  <Link href="/login">
                    <a>Sign-In Here</a>
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

export default Register;
