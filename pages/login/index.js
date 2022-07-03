import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { loginPending } from "../../app/authSlice";
import { useRouter } from "next/router";
// import NireekaGoogleLogin from "../../components/Login/NireekaGoogleLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoadingNireeka from "../../components/Atoms/LoadingNireeka";
import { loginNSDPending } from "../../app/nsdSlice";
const eye = <FontAwesomeIcon icon={faEye} />;

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  let { isAuth, error, isLoading } = state.auth;
  let { nsdIsAuth } = state.nsd;
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = ({ email, password }) => {
    dispatch(loginPending({ email, password }));
    // dispatch(loginNSDPending({ email, password }));
  };

  useEffect(() => {
    if (isAuth && JSON.parse(window.localStorage.getItem(`pathname`))) {
      router.push(JSON.parse(window.localStorage.getItem(`pathname`)));
    }
    if (isAuth && !JSON.parse(window.localStorage.getItem(`pathname`))) {
      router.push("/user-panel");
    }
  }, [isAuth, router]);

  return (
    <>
      <div className="min-h-full flex flex-col items-center py-4 sm:my-10 sm:px-6 lg:px-8">
        <div className="sm:mx-auto w-full sm:max-w-md">
          <div className="sm:shadow sm:border sm:rounded-3xl">
            <div className="md:mt-8 sm:mx-auto sm:w-full sm:max-w-md">
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
                  Nireeka Login
                </h2>
                <p className="mt-2 text-center">
                  <span className="font-light text-loginColor2">
                    Please sign in to continue
                  </span>
                </p>
              </div>
              <form
                className="bg-white py-8 px-4 sm:px-10 space-y-6"
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
                    placeholder="E-mail"
                    {...register(`email`, {
                      required: {
                        value: true,
                        message: `Email is not valid.`,
                      },
                    })}
                  />
                  {errors && errors.email && (
                    <span className="text-red-600">{errors.email}</span>
                  )}
                </div>

                <div className="flex items-center relative">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type={passwordShown ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="appearance-none font-light relative block w-full px-3 py-2 placeholder-gray-300 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    {...register(`password`, {
                      required: `This is required.`,
                      minLength: {
                        value: 8,
                        message: `Password must be at least 8 characters long.`,
                      },
                    })}
                  />
                  <i
                    className="absolute right-3 cursor-pointer"
                    onClick={togglePasswordVisiblity}
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
                    Sorry, server is not available, thank you very much for your
                    patience.
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block font-light text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm font-light text-loginColor1 hover:text-gray-700">
                    <Link href="/forget-password">
                      <a>Forgot your password?</a>
                    </Link>
                  </div>
                </div>
                {/* <div className="flex justify-center">
                  <NireekaGoogleLogin />
                </div> */}

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border hover:border-loginColor1 border-transparent rounded-md shadow-sm text-sm font-light text-white hover:text-loginColor1 bg-loginColor1 hover:bg-white"
                  >
                    {!isLoading ? (
                      <p>Sign in</p>
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
              <div className="w-full py-6 px-4 shadow sm:rounded-b-3xl bg-gray-200 sm:px-10">
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

export default Login;
