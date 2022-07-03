import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Styles from "../../pages/help-center/topic/[topic]/topic.module.css";
import { useSelector, useDispatch } from "react-redux";
import { helpFullPending } from "../../app/helpCenterSlice";
import { helpFullGuestPending } from "../../app/helpCenterSlice";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import ReactLoading from "react-loading";

export default function Topic({ topics }) {
  function createDangerHtml() {
    return { __html: topics.data.topic.long_desc };
  }
  const router = useRouter();
  const { query } = router;
  const idPage = query.topic;
  const state = useSelector((state) => state);
  let { isAuth } = state.auth;
  const dispatch = useDispatch();
  const [messageBox, setMessageBox] = useState(1);
  const [mes, setMes] = useState(false);
  let {
    helpFullGuestData,
    helpFullData,
    helpFullStatus,
    helpFullGuestStatus,
    helpFullGuestReqSuccess,
    helpFullReqSuccess,
  } = state.helpCenter;

  const [sendMessage, setSendMessage] = useState(false);
  const [feedback, setFeedback] = useState(true);
  const [loadings, setLoadings] = useState(false);
  const [colorBold, setColorBold] = useState(false);
  const [colorBoldNo, setColorBoldNo] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = ({ topic_id, comment, help_full }) => {
    const data = { topic_id: idPage, comment, help_full: messageBox };
    const dataGuest = { topic_id: idPage, comment, help_full: messageBox };

    {
      isAuth
        ? dispatch(helpFullPending(data))
        : dispatch(helpFullGuestPending(dataGuest));
    }
    setLoadings(true);
    // setInterval(() => {
    //   setSendMessage(true);
    // }, 2000);
    // setInterval(() => {
    //   setFeedback(false);
    // }, 5000);
  };

  if (
    (helpFullGuestReqSuccess != 0 || helpFullReqSuccess != 0) &&
    !sendMessage
  ) {
    setInterval(() => {
      setSendMessage(true);
    }, 4000);
  }

  return (
    <div className="bg-gray-100">
      <div className="w-full px-3 mx-auto lg:w-8/12">
        <nav className="w-full py-6 rounded lg:py-12 bg-grey-light">
          <ul className="flex list-reset text-grey-dark">
            <Link href="/help-center" passHref>
              <a className="font-light text-blue ">
                <li className="flex">
                  <div className="w-8 h-8 ">
                    <Image
                      src="https://nireeka.com/images/logo.jpg"
                      alt="logo"
                      width={25}
                      height={25}
                      className="mt-2 rounded-full "
                    />
                  </div>
                  <h6>Home</h6>
                </li>
              </a>
            </Link>
            <li>
              <span className="mx-2 font-light">{`>`}</span>
            </li>
            {topics.data.breadcrumbs.parent ? (
              <>
                <Link
                  href={`/help-center/category/${topics.data.breadcrumbs.parent.slug}`}
                  passHref
                >
                  {/* <Link href={topics.data.breadcrumbs.parent.url} passHref> */}
                  <a className="font-light text-blue">
                    <li>{topics.data.breadcrumbs.parent.title}</li>
                  </a>
                </Link>
                <li>
                  <span className="mx-2 font-light">{`>`}</span>
                </li>

                <li className="font-light text-blue">
                  {topics.data.breadcrumbs.title}
                </li>
              </>
            ) : (
              <li>{topics.data.breadcrumbs.title}</li>
            )}
            {/* <Link href={`/help-center/category/${articles.data.slug}`} passHref>
              <a className="font-light text-blue">
                <li>{articles.data.title}</li>
              </a>
            </Link> */}
          </ul>
        </nav>
        {/* @include('layouts.tailwind.helpCenter.breadcrumbs') */}
      </div>

      <div className={`pb-6 md:pb-16 ${Styles.tagLinks}`}>
        <div className="w-full mx-auto bg-white border-b border-gray-300 rounded-md md:w-11/12 lg:w-8/12">
          <div className="flex-col pt-2 pb-5 text-left border-b border-gray-300 align-center ">
            <h2 className="pt-12 text-3xl font-light text-center md:text-4xl lg:text-left lg:pl-16 font-oswald">
              {topics.data.topic.title}
            </h2>
            <div className="py-2 text-center text-gray-500 text-md lg:text-left lg:pl-16">
              <p className="px-2 font-light font-oswald">
                {topics.data.topic.created_at}
                {/* {{ $topic->created_at->format(' M d, Y h:i A') }} */}
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full px-2 py-3 mx-auto mt-8 md:w-11/12 ">
            <div className="w-full mx-2">
              <p className="pb-4 text-xl font-light text-gray-800">
                {topics.data.topic.short_dec}
              </p>
              <div
                className={`mb-5 text-gray-600 font-light  ${Styles.tagText}`}
                dangerouslySetInnerHTML={createDangerHtml()}
              ></div>
              <div className="mb-5">
                {!sendMessage && (
                  <>
                    {!topics.data.has_comment && feedback ? (
                      <div id="sendBtn">
                        <div className="flex-col justify-center pt-8 border-t-2">
                          <div
                            className="flex justify-center pb-1"
                            id="msgComponents"
                          >
                            <h3 className="text-xl font-light text-gray-700">
                              Was this article helpful?
                            </h3>
                            <div className="flex justify-start px-2">
                              <button
                                type="button"
                                onClick={() => {
                                  setMessageBox(1);
                                  setMes(true);
                                  setColorBold(true);
                                  setColorBoldNo(false);
                                }}
                                className={`inline-flex px-1 font-medium text-green-400 text-md  ${
                                  colorBold && "font-bold text-green-600"
                                } `}
                              >
                                yes
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  setMessageBox(0);
                                  setMes(true);
                                  setColorBold(false);
                                  setColorBoldNo(true);
                                }}
                                className={`inline-flex px-1 font-medium text-red-400 text-md  ${
                                  colorBoldNo && "font-bold text-red-600"
                                } `}
                              >
                                no
                              </button>
                            </div>
                            {/* text area */}
                          </div>
                          {loadings && (
                            <>
                              {" "}
                              {helpFullStatus || helpFullGuestStatus ? (
                                <>
                                  {(helpFullStatus === 200 ||
                                    helpFullGuestStatus === 200) && (
                                    <>
                                      <div
                                        className="justify-center pt-3 mx-auto w-52"
                                        id="notifyBox"
                                      >
                                        <div
                                          className="px-4 py-3 text-teal-900 bg-green-200 border-t-4 border-green-400 rounded-b shadow-md"
                                          role="alert"
                                        >
                                          <div className="flex">
                                            <div>
                                              <p className="font-light ">
                                                Thanks for your feedback
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                  {(helpFullStatus === 404 ||
                                    helpFullGuestStatus === 404) && (
                                    <>
                                      <div
                                        className="justify-center pt-3 mx-auto w-52"
                                        id="notifyBox"
                                      >
                                        <div
                                          className="px-4 py-3 text-red-900 bg-red-200 border-t-4 border-red-400 rounded-b shadow-md"
                                          role="alert"
                                        >
                                          <div className="flex">
                                            <div>
                                              <p className="font-light ">
                                                Thanks for your feedback
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </>
                              ) : (
                                <div className="px-4 py-3">
                                  <div className="flex">
                                    <div className="w-full mx-auto my-auto">
                                      <ReactLoading
                                        type="spin"
                                        color="rgb(209, 213, 219)"
                                        height={40}
                                        width={40}
                                        className="mx-auto"
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                        {mes ? (
                          <div className="flex-col justify-center">
                            <form onSubmit={handleSubmit(handleSubmitForm)}>
                              <div className="relative mx-auto mb-3 w-w-90 md:w-w-152 md:1">
                                <div className="absolute hidden top-1/3 right-1/4 left-1/4">
                                  <div className="relative">
                                    <div className="flex justify-start p-2 w-52 emptyMsg ">
                                      <div className="py-1 ">
                                        <svg
                                          className="w-6 h-6 pl-2 mr-2 text-yellow-500 fill-current"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                        </svg>
                                      </div>
                                      <h6 className="pt-0.5 text-gray-500 font-light">
                                        Please fill out this field.
                                      </h6>
                                    </div>
                                  </div>
                                </div>

                                <textarea
                                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                                    transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-customColorNIR focus:outline-none"
                                  rows="5"
                                  placeholder="Would you like to add a comment?"
                                  id="comment"
                                  name="comment"
                                  type="textarea"
                                  required
                                  {...register(`comment`, {
                                    required: {
                                      value: true,
                                      message: `comment is not valid.`,
                                    },
                                  })}
                                />
                              </div>
                              <div className="flex justify-center pt-2 mx-auto">
                                <button
                                  type="submit"
                                  className="w-2/12 px-3 py-2 mx-auto text-sm font-light transition-colors duration-150 bg-transparent border border-transparent rounded-md shadow-sm hover:text-white hover:bg-customColorNIR border-customColorNIR text-customColorNIR focus:outline-none focus:ring-2"
                                >
                                  Submit
                                </button>
                              </div>
                            </form>
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </>
                )}

                {/* @endif */}

                <div
                  className={` mt-8 py-10 border-t-2 ${
                    topics.data.related_topics.length === 0
                      ? ""
                      : " border-b border-gray-300 "
                  }`}
                >
                  <h3 className="text-lg font-light text-gray-700">
                    Not found your answer? Open a
                    <Link href="/support">
                      <a className="px-1 text-lg text-blue-500 underline cursor-pointer text-b textHelpCenter">
                        ticket
                      </a>
                    </Link>
                    in your dashboard under the support tab.
                  </h3>
                </div>

                {topics.data.related_topics.length > 0 ? (
                  <div className={`"pb-2 mt-2 " ${Styles.tagLinksRelated}`}>
                    <div className="w-full mx-auto ">
                      <div className="flex-col pt-1 pb-2 text-left align-center">
                        <h2 className="py-2 text-3xl font-light ">
                          Related articles
                        </h2>
                      </div>
                    </div>
                    <div className="mx-auto ">
                      <div>
                        <div className="flex flex-wrap w-full px-0 py-0 mx-auto lg:px-2 md:w-full">
                          {topics.data.related_topics.map((related) => {
                            let str = related.title;
                            str = str.replace(/\s+/g, "-").toLowerCase();
                            str = str.replace(/\//g, "").toLowerCase();
                            str = str.replace(/["']/g, "").toLowerCase();
                            return (
                              <>
                                <div
                                  className="w-full p-3 md:w-1/2 "
                                  key={related.id}
                                >
                                  <Link
                                    href={`/help-center/topic/${related.id}/${str}`}
                                    passHref
                                  >
                                    <a>
                                      <div className="h-40 px-6 pt-8 bg-white border rounded-md border-customColorNIR hover:border-yellow-500">
                                        <h6 className="text-xl font-light text-left">
                                          {/* {{ $topicRelated->title }} */}
                                          {related.title}
                                        </h6>
                                        <p className="font-light text-gray-500 text-md font-dosis">
                                          {/* {{ $topicRelated->getDescription(40) }} */}
                                          {related.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* @endif */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// href={{
//   pathname: '/help-center/category/[slug]/[seprate]',
//   query: { slug: topics.data.breadcrumbs.parent.slug ,seprate:topics.data.topic.title  }
// }}
