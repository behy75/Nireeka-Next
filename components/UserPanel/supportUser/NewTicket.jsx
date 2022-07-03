import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { XCircleIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  listTicketsPending,
  storeTicketPending,
  ticketCategoriesPending,
  ticketPriorityPending,
} from "../../../app/ticketSlice";
import { setTicketStep } from "../../../app/userPanelSlice";
import LoadingNireeka from "../../Atoms/LoadingNireeka";
import SuccessfulMessage from "../../Atoms/SuccessfulMessage";

export default function NewTicket() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { isAuth } = state.auth;
  let {
    ticketPriorityData,
    ticketCategoriesData,
    storeTicketReqSuccess,
    storeTicketData,
    storeTicketError,
  } = state.ticket;

  useEffect(() => {
    if (isAuth) {
      dispatch(ticketCategoriesPending());
      dispatch(ticketPriorityPending());
    }
  }, [isAuth]);

  useEffect(() => {
    if (storeTicketError) {
      dispatch(listTicketsPending());
    }
  }, [storeTicketError]);

  const [newTicket, setNewTicket] = useState({
    category: null,
    title: "",
    priority: "",
    message: "",
  });
  const [newFileTicket, setFileNewTicket] = useState(null);
  const [allFilesTicket, setAllFilesTicket] = useState([]);

  const [newTicketClick, setNewTicketClick] = useState(false);

  useEffect(() => {
    if (storeTicketError && newTicketClick) {
      const timer = setTimeout(() => {
        dispatch(setTicketStep(1));
        setNewTicketClick(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [storeTicketError, newTicketClick]);

  useEffect(() => {
    if (
      newFileTicket &&
      newFileTicket.files &&
      newFileTicket.files.size < 5000000 &&
      allFilesTicket.length < 3
    ) {
      setAllFilesTicket([...allFilesTicket, newFileTicket]);
    }
  }, [newFileTicket]);

  const handleSendComment = async (e) => {
    e.preventDefault();
    setNewTicketClick(true);
    const formData = new FormData();
    if (newFileTicket && newFileTicket.files) {
      allFilesTicket.map((item, index) =>
        formData.append(`files[${index + 1}]`, item.files)
      );
    }
    if (newTicket) {
      if (newTicket.category) {
        formData.append("category", newTicket.category);
      }
      if (newTicket.title) {
        formData.append("title", newTicket.title);
      }
      if (newTicket.priority) {
        formData.append("priority", newTicket.priority);
      }
      if (newTicket.message) {
        formData.append("message", newTicket.message);
      }
    }
    dispatch(storeTicketPending(formData));
  };

  if (
    !ticketPriorityData ||
    !ticketCategoriesData ||
    !ticketPriorityData[0] ||
    !ticketCategoriesData[0]
  ) {
    return (
      <div
        style={{ height: "100vh" }}
        className="bg-bgUserPanel flex justify-center items-center h-full w-full"
      >
        <div style={{ height: "60vh" }}>
          <ReactLoading
            type="spin"
            color="rgb(209, 213, 219)"
            height={80}
            width={80}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-3xl my-5 shadow-sm border border-gray-200 flex flex-col justify-center items-center">
      <form className="w-full p-10">
        <div className="space-y-8 sm:space-y-5">
          <div>
            <div>
              <h3 className="text-xl leading-6 font-light text-gray-900 pb-5">
                Open New Ticket
              </h3>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start border-t border-gray-200 py-5">
              <label
                htmlFor="street-address"
                className="block text-sm font-light text-gray-700 sm:mt-px sm:pt-2"
              >
                Title
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  onChange={(item) =>
                    setNewTicket({
                      category: newTicket.category,
                      priority: newTicket.priority,
                      message: newTicket.message,
                      title: item.target.value,
                    })
                  }
                  autoComplete="Title"
                  placeholder="text"
                  className="block border font-light py-2 pl-2 max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start border-t sm:border-gray-200 py-5">
              <label
                htmlFor="category"
                className="block text-sm font-light text-gray-700 sm:mt-px sm:pt-2"
              >
                Category
              </label>
              <div className="mt-1 font-light sm:mt-0 sm:col-span-2">
                <select
                  required
                  placeholder="Select Category"
                  id="category"
                  name="category"
                  autoComplete="category"
                  onChange={(item) => {
                    setNewTicket({
                      category: item.target.value,
                      priority: newTicket.priority,
                      message: newTicket.message,
                      title: newTicket.title,
                    });
                  }}
                  className="cursor-pointer max-w-lg block border py-2 font-light focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs text-sm font-ligh border-gray-300 rounded-md"
                >
                  <option className="text-sm font-light text-gray-400 cursor-pointer">
                    Select Category
                  </option>
                  {ticketCategoriesData.map((item) => (
                    <option
                      value={item.id}
                      key={item.id}
                      className="text-sm font-light cursor-pointer"
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-sm font-light text-gray-500">
                  Please select the category carefully as tickets with the wrong
                  category will not be processed and will be closed.
                </p>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start border-t border-gray-200 py-5">
              <label
                htmlFor="priority"
                className="block text-sm font-light text-gray-700 sm:mt-px sm:pt-2"
              >
                Priority
              </label>
              <div className="mt-1 font-light sm:mt-0 sm:col-span-2">
                <select
                  required
                  placeholder="Select Priority"
                  id="priority"
                  name="priority"
                  autoComplete="priority"
                  onChange={(item) => {
                    setNewTicket({
                      category: newTicket.category,
                      priority: item.target.value,
                      message: newTicket.message,
                      title: newTicket.title,
                    });
                  }}
                  className="max-w-lg cursor-pointer block border py-2 font-light focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                >
                  <option className="text-sm font-light text-gray-400 cursor-pointer">
                    Select Priority
                  </option>
                  {ticketPriorityData.map((item) => (
                    <option
                      value={item.value}
                      key={item.id}
                      className="text-sm font-light cursor-pointer"
                    >
                      {item.value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start border-t border-gray-200 py-5">
                <label
                  htmlFor="about"
                  className="block text-sm font-light text-gray-700"
                >
                  Message
                </label>
                <div className="sm:mt-0 sm:col-span-2">
                  <textarea
                    required
                    placeholder="message"
                    autoComplete="message"
                    id="message"
                    name="message"
                    rows={3}
                    className="shadow-sm font-light px-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={""}
                    onChange={(item) => {
                      setNewTicket({
                        category: newTicket.category,
                        priority: newTicket.priority,
                        message: item.target.value,
                        title: newTicket.title,
                      });
                    }}
                  />
                  <p className="text-sm font-light text-gray-500">
                    Write a few sentences about your Ticket (Max. 500
                    Characters).
                  </p>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start border-t border-gray-200 py-5">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-light text-gray-700"
                >
                  Attachments
                  {allFilesTicket &&
                    allFilesTicket.map((item, index) => (
                      <p key={index} className="text-xs text-blue-500 my-2">
                        {`${index + 1}- ${item.files.name}`}
                      </p>
                    ))}
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <div className="relative">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <input
                            accept=".jpg,.jpeg,.png,.bmp,.pdf"
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            onChange={(e) =>
                              setFileNewTicket({
                                files: e.target.files[0],
                              })
                            }
                            className="sr-only"
                          />
                        </label>
                      </div>

                      <div className="flex justify-center items-center text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload files</span>
                          <input
                            onChange={(e) =>
                              setFileNewTicket({
                                files: e.target.files[0],
                              })
                            }
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            accept=".jpg,.jpeg,.png,.bmp,.pdf"
                            className="sr-only"
                          />
                        </label>
                        {/* <p className="pl-1">or drag and drop</p> */}
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="text-xs text-gray-500 font-light px-1">
                          PNG, JPG, JPEG, BMP and PDF up to
                        </p>
                        <p className="text-xs text-gray-800 font-medium">
                          5 MB
                        </p>
                        <p className="text-xs text-gray-500 font-light px-1">
                          and
                        </p>
                        <p className="text-xs text-gray-800 font-medium">
                          3 items
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="relative flex justify-end">
            {storeTicketError && newTicketClick && (
              <div className="relative w-full sm:w-2/3 xl:w-1/2 flex justify-start">
                <SuccessfulMessage MSG="Your ticket was created successfully." />
              </div>
            )}
            <div
              className="bg-white cursor-pointer py-2 px-4 rounded-md text-sm font-light text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => dispatch(setTicketStep(1))}
            >
              Cancel
            </div>
            <div
              className="ml-3 cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              // onClick={() => dispatch(setTicketStep(1))}
              onClick={handleSendComment}
            >
              {!storeTicketError && newTicketClick ? (
                <div className="px-4">
                  <LoadingNireeka
                    colorLoading={"text-gray-700"}
                    widthLoading={"w-5"}
                    heightLoading={"h-5"}
                    borderLoading={"border-2"}
                  />
                </div>
              ) : (
                <span className="font-light">Open Ticket</span>
              )}
            </div>
          </div>
          {(((storeTicketReqSuccess === 403 || storeTicketReqSuccess === 402) &&
            newTicketClick) ||
            (newFileTicket &&
              newFileTicket.files &&
              newFileTicket.files.size > 5000000)) && (
            <div className="rounded-md bg-red-50 p-4 my-2">
              <div className="flex">
                <div className="flex-shrink-0">
                  <XCircleIcon
                    className="h-5 w-5 text-red-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    There was an error sending you
                  </h3>
                  {storeTicketReqSuccess === 403 &&
                    storeTicketData &&
                    newTicketClick && (
                      <div className="mt-2 text-sm text-red-700">
                        <ul role="list" className="list-disc pl-5 space-y-1">
                          {storeTicketData && storeTicketData.title && (
                            <li> {storeTicketData.title}</li>
                          )}
                          {storeTicketData && storeTicketData.category && (
                            <li> {storeTicketData.category}</li>
                          )}
                          {storeTicketData && storeTicketData.priority && (
                            <li> {storeTicketData.priority}</li>
                          )}
                          {storeTicketData && storeTicketData.message && (
                            <li> {storeTicketData.message}</li>
                          )}
                        </ul>
                      </div>
                    )}
                  {storeTicketReqSuccess === 402 &&
                    storeTicketData &&
                    newTicketClick && (
                      <div className="mt-2 text-sm text-red-700">
                        <ul role="list" className="list-disc pl-5 space-y-1">
                          <li>{storeTicketData}</li>
                        </ul>
                      </div>
                    )}
                  {newFileTicket &&
                    newFileTicket.files &&
                    newFileTicket.files.size > 5000000 && (
                      <div className="mt-2 text-sm text-red-700">
                        <ul role="list" className="list-disc pl-5 space-y-1">
                          <li>
                            The selected file size should not exceed 5 MB.
                          </li>
                        </ul>
                      </div>
                    )}
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
