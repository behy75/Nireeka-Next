import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { PaperClipIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import {
  closeTicketPending,
  commentPending,
  listTicketsPending,
  reOpenTicketPending,
  showTicketPending,
} from "../../../app/ticketSlice";
import Link from "next/link";
import SendMessage from "../../../public/images/send.png";
import AttachmentIcon from "../../../public/images/attachment.png";
import Image from "next/image";
import LoadingNireeka from "../../Atoms/LoadingNireeka";
import MainModal from "../../Atoms/MainModal";

export default function ModalTicketShowDetails({ setOpen, open }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let {
    showTicketData,
    reOpenTicketReqSuccess,
    commentReqSuccess,
    closeTicketReqSuccess,
  } = state.ticket;
  const [message, setMessage] = useState("");
  const [commentFile, setCommentFile] = useState(null);
  useEffect(() => {
    if (commentReqSuccess) {
      dispatch(listTicketsPending());
      setOpen(false);
    }
  }, [commentReqSuccess]);

  const handleSendComment = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (commentFile && commentFile.size < 5000000) {
      formData.append("files[]", commentFile);
    }
    if (message) {
      formData.append("comment", message);
    }
    if (showTicketData && showTicketData.ticket && showTicketData.ticket.id) {
      formData.append("ticket_id", showTicketData.ticket.id);
    }

    dispatch(commentPending(formData));
  };

  useEffect(() => {
    if (
      (reOpenTicketReqSuccess || commentReqSuccess || closeTicketReqSuccess) &&
      showTicketData &&
      showTicketData.ticket
    ) {
      dispatch(showTicketPending(showTicketData.ticket.id));
      dispatch(listTicketsPending());
    }
  }, [reOpenTicketReqSuccess, commentReqSuccess, closeTicketReqSuccess]);

  return (
    <MainModal setOpen={setOpen} open={open}>
      {showTicketData && showTicketData.ticket ? (
        <div className="w-full font-inter bg-white rounded-3xl my-2 flex flex-col justify-center items-center">
          {showTicketData.ticket && (
            <div className="flex flex-col font-inter justify-between items-center w-full px-4 py-2 sm:px-2">
              <div className="w-full">
                <p className="flex justify-start text-lg font-inter leading-6 font-medium text-gray-900">
                  {`Ticket #${showTicketData.ticket.id}: ${showTicketData.ticket.title}`}
                  <span className="flex items-center font-light font-inter text-sm sm:text-base">{` - ${showTicketData.category_name}`}</span>
                </p>
              </div>

              <div className="flex w-full justify-start md:justify-between my-2 items-center">
                {/* {showTicketData.ticket.status === "Closed" && (
                          <span
                            onClick={() =>
                              dispatch(
                                reOpenTicketPending(showTicketData.ticket.id)
                              )
                            }
                            className="p-1 rounded-md border border-nireekaGreen text-nireekaGreen hover:text-white hover:bg-nireekaGreen cursor-pointer mx-5"
                          >
                            Re-Open
                          </span>
                        )} */}
                <span className="font-light font-inter text-xs sm:text-sm text-gray-700">
                  {`Created ${showTicketData.ticket.created_diff}`}
                </span>

                {showTicketData.ticket.status === "Closed" && (
                  <span className="p-1 font-light fint-inter rounded-lg text-nireekaRed mx-5">
                    Closed
                  </span>
                )}
                {showTicketData.ticket.status === "Open" && (
                  <span className="p-1 font-light fint-inter rounded-lg text-nireekaGreen mx-5">
                    Open
                  </span>
                )}
                {/* {showTicketData.ticket.status === "Open" && (
                          <span
                            onClick={() => {
                              dispatch(
                                closeTicketPending(showTicketData.ticket.id)
                              );
                            }}
                            className="p-1 fint-inter font-light rounded-lg border border-nireekaRed text-nireekaRed hover:text-white hover:bg-nireekaRed cursor-pointer mx-5"
                          >
                            Close Ticket
                          </span>
                        )} */}
              </div>
            </div>
          )}
          {showTicketData.ticket && (
            <div className="w-full border-t border-gray-200 px-2 py-2 sm:p-0">
              <dl className="w-full">
                <div className="w-full pb-2 sm:pb-5 pt-2 sm:px-6 grid grid-cols-6 gap-4 border-b border-gray-200">
                  <dt className="text-sm font-inter font-light text-gray-500 col-span-6">
                    {showTicketData.ticket.message}
                  </dt>
                  {/* <dd className="m-1 font-inter font-light text-center text-white text-sm sm:mt-0 col-span-2 sm:col-span-1 bg-blue-400 rounded-xl">
                            {showTicketData.category_name}
                          </dd> */}
                  {/* {showTicketData.ticket.status === "Open" ? (
                            <dd className="m-1 font-inter font-light text-center text-white text-xs sm:text-sm sm:mt-0 col-span-2 sm:col-span-1 bg-green-400 rounded-xl">
                              {showTicketData.ticket.status}
                            </dd>
                          ) : (
                            <dd className="m-1 font-inter font-light text-center text-white text-xs sm:text-sm sm:mt-0 col-span-2 sm:col-span-1 bg-red-400 rounded-xl">
                              {showTicketData.ticket.status}
                            </dd>
                          )} */}

                  {/* <dd className="m-1 font-inter font-light text-center text-white text-xs sm:text-sm sm:mt-0 px-1 col-span-2 sm:col-span-1 bg-yellow-400 rounded-xl">
                            {showTicketData.ticket.created_diff}
                          </dd> */}
                </div>

                {showTicketData.comments.map((item) => (
                  <div className="py-4 sm:py-2" key={item.id}>
                    <div className="text-sm font-medium text-gray-500">
                      <div className="flex items-center justify-start w-full">
                        {item.user.is_admin || item.user.is_admin === 0 ? (
                          <div>
                            {item.user ? (
                              <img
                                className="h-8 w-8 rounded-full cursor-pointer"
                                src={`${item.user.avatar}`}
                                onClick={() => {
                                  setOpen(true);
                                }}
                                alt=""
                              />
                            ) : (
                              <img
                                className="h-8 w-8 rounded-full"
                                src={BellIcon}
                                alt=""
                              />
                            )}
                          </div>
                        ) : (
                          ""
                        )}

                        <div
                          className={
                            item.user.is_admin || item.user.is_admin === 0
                              ? "max-w-3/4 ml-3"
                              : "flex flex-col items-end w-full"
                          }
                        >
                          <div
                            className={
                              item.user.is_admin || item.user.is_admin === 0
                                ? " bg-gray-200 rounded-xl p-1 px-2 my-1"
                                : " bg-blue-700 rounded-xl p-1 px-2"
                            }
                          >
                            {(item.user.is_admin ||
                              item.user.is_admin === 0) && (
                              <div className="flex">
                                <div>
                                  <p className="font-light font-inter text-paleHealthChatt">
                                    {`${item.user.name} ${item.user.lastname}`}
                                  </p>
                                </div>
                                <div className="flex justify-center items-center">
                                  <p className="text-xs font-inter font-light text-center text-white bg-red-500 rounded-lg px-2 mx-2">
                                    admin
                                  </p>
                                </div>
                              </div>
                            )}

                            <div
                              className={
                                item.user.is_admin || item.user.is_admin === 0
                                  ? "font-light font-inter text-xs sm:text-sm text-gray-900"
                                  : "font-light font-inter text-xs sm:text-sm text-white"
                              }
                              dangerouslySetInnerHTML={{
                                __html: `${item.message}`,
                              }}
                            ></div>
                            <span className="flex justify-end">
                              <p
                                className={
                                  item.user.is_admin || item.user.is_admin === 0
                                    ? "text-xs font-inter font-light text-gray-400"
                                    : "text-xs font-inter font-light text-gray-100"
                                }
                              >{`${item.created_at}`}</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {item.files.map((file) => (
                      <div
                        key={file.name}
                        className="flex items-center justify-start w-full my-2"
                      >
                        <div className="h-8 w-8"></div>
                        {/* {item.user.is_admin ||item.user.is_admin===0 ? (
                                  <div>
                                    {item.user ? (
                                      <img
                                        className="h-12 w-12 rounded-full cursor-pointer"
                                        src={`${item.user.avatar}`}
                                        alt=""
                                      />
                                    ) : (
                                      <img
                                        className="h-8 w-8 rounded-full"
                                        src={BellIcon}
                                        alt=""
                                      />
                                    )}
                                  </div>
                                ) : (
                                  ""
                                )} */}

                        <div
                          className={
                            item.user.is_admin || item.user.is_admin === 0
                              ? "ml-3"
                              : "flex flex-col items-end w-full"
                          }
                        >
                          <div
                            className={
                              item.user.is_admin || item.user.is_admin === 0
                                ? "bg-gray-200 p-1 px-2 rounded-xl my-1"
                                : "bg-blue-700 p-1 px-2 rounded-xl"
                            }
                          >
                            <div>
                              <Link href={file.path}>
                                <a
                                  target="_blank"
                                  className={
                                    item.user.is_admin ||
                                    item.user.is_admin === 0
                                      ? "font-light font-inter text-xs sm:text-sm text-gray-900"
                                      : "font-light font-inter text-xs sm:text-sm text-white"
                                  }
                                >
                                  {file.name}
                                </a>
                              </Link>
                            </div>

                            <span className="flex justify-end">
                              <p
                                className={
                                  item.user.is_admin || item.user.is_admin === 0
                                    ? "text-xs font-inter font-light text-gray-400"
                                    : "text-xs font-inter font-light text-gray-100"
                                }
                              >{`${item.created_at}`}</p>
                              {/* {item.user.is_admin ||item.user.is_admin===0 && (
                                      <p className="text-xs font-light text-white bg-red-500 rounded-lg px-2 mx-2">
                                        admin
                                      </p>
                                    )} */}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}

                {showTicketData.ticket &&
                  showTicketData.ticket.status === "Open" &&
                  showTicketData.ticket.last_updated_by_id !==
                    showTicketData.ticket.user_id && (
                    <>
                      <div className="w-full h-12 flex justify-center items-center rounded-xl border border-gray-300">
                        <div>
                          <div className="w-5 mx-3 flex justify-center inems-center cursor-pointer">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer"
                            >
                              <Image
                                src={AttachmentIcon}
                                alt="attachment-icon"
                              />
                              <input
                                accept=".jpg,.jpeg,.png,.bmp,.pdf"
                                onChange={(e) =>
                                  setCommentFile(e.target.files[0])
                                }
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                          </div>
                        </div>

                        <div className="w-11/12">
                          <input
                            id="text"
                            name="text"
                            type="text"
                            value={message}
                            onChange={(item) => {
                              setMessage(item.target.value);
                            }}
                            placeholder="Type a message ..."
                            className="w-full h-full font-inter bg-white focus:outline-none px-3 sm:px-0 py-2 font-light text-xs sm:text-sm"
                          />
                        </div>
                        {commentReqSuccess === false ? (
                          <div className="mx-3">
                            <LoadingNireeka
                              colorLoading={"text-gray-700"}
                              widthLoading={"w-5"}
                              heightLoading={"h-5"}
                              borderLoading={"border-2"}
                            />
                          </div>
                        ) : (
                          <div>
                            <div
                              onClick={handleSendComment}
                              className="w-5 mx-3 flex justify-center inems-center cursor-pointer"
                            >
                              <Image src={SendMessage} alt="send-message" />
                            </div>
                          </div>
                        )}
                      </div>
                      {commentFile &&
                        commentFile.name &&
                        commentFile.size < 5000000 && (
                          <div>
                            <span className="text-xs font-inter text-blue-500 my-2">
                              {commentFile.name}
                            </span>
                          </div>
                        )}
                      {commentFile && commentFile.size > 5000000 && (
                        <div>
                          <span className="text-xs font-inter text-red-500 my-2">
                            The selected file size should not exceed 5 MB.
                          </span>
                        </div>
                      )}
                    </>
                  )}

                {showTicketData.files && showTicketData.files[0] && (
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-inter font-light text-gray-500">
                      Attachments
                    </dt>
                    {showTicketData.files.map((item) => (
                      <dd
                        key={item.name}
                        className="mt-1 text-sm font-inter text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        <ul
                          role="list"
                          className="border border-gray-200 rounded-md divide-y divide-gray-200"
                        >
                          <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                            <div className="w-0 flex-1 flex items-center">
                              <PaperClipIcon
                                className="flex-shrink-0 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-2 font-inter flex-1 w-0 truncate">
                                {item.name}
                              </span>
                            </div>
                            <div className="ml-4 font-inter flex-shrink-0">
                              <Link href={`${item.path}`}>
                                <a
                                  target="_blank"
                                  className="font-medium font-inter text-indigo-600 hover:text-indigo-500"
                                >
                                  Download
                                </a>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </dd>
                    ))}
                  </div>
                )}
              </dl>
            </div>
          )}
        </div>
      ) : (
        <div
          className="flex justify-center items-center h-full w-full"
          // style={{ height: "60vh" }}
        >
          <ReactLoading
            type="spin"
            color="rgb(209, 213, 219)"
            height={80}
            width={80}
          />
        </div>
      )}
    </MainModal>
  );
}
