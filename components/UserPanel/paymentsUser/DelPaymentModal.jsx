import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Dialog } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { deleteOrderPending } from "../../../app/userPanelSlice";
import SuccessfulMessage from "../../Atoms/SuccessfulMessage";
import LoadingNireeka from "../../Atoms/LoadingNireeka";
import MainModal from "../../Atoms/MainModal";

export default function DelPaymentModal({ delOpen, setDelOpen, orderId }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let { deleteOrderReqSuccess } = state.userPanel;

  const [delAddressClick, setDelAddressClick] = useState(false);

  useEffect(() => {
    if (delAddressClick && deleteOrderReqSuccess) {
      const timer = setTimeout(() => {
        setDelOpen(false);
        setDelAddressClick(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [deleteOrderReqSuccess]);

  return (
    <MainModal setOpen={setDelOpen} open={delOpen}>
      {orderId ? (
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
          <div className="">
            <div className="flex items-center justify-start w-full">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <ExclamationIcon
                  className="h-6 w-6 text-red-600"
                  aria-hidden="true"
                />
              </div>
              <Dialog.Title
                as="h3"
                className="text-lg leading-6 mx-3 font-medium text-gray-900"
              >
                Delete Unpaid{" "}
              </Dialog.Title>
            </div>

            <div className="mt-3 mx-3 text-justify sm:ml-4">
              <p className="text-sm text-gray-500">
                Are you sure you want to delete your unpaid? All your data for
                this unpaid will always be deleted from our servers. This action
                is not reversible.
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-row-reverse">
            <div
              className="w-full cursor-pointer inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ml-3 sm:w-auto sm:text-sm"
              onClick={() => {
                // setOpen(false);
                dispatch(deleteOrderPending(orderId));
              }}
            >
              {deleteOrderReqSuccess === false ? (
                <div className="px-2">
                  <LoadingNireeka
                    colorLoading={"text-white"}
                    widthLoading={"w-4"}
                    heightLoading={"h-4"}
                    borderLoading={"border-2"}
                  />
                </div>
              ) : (
                <span className="text-sm font-light text-white">Delete</span>
              )}
            </div>
            <div
              className="w-full cursor-pointer inline-flex justify-center rounded-md px-4 py-2 bg-white text-base font-light text-gray-700 hover:text-gray-500 mt-0 sm:w-auto sm:text-sm"
              onClick={() => setDelOpen(false)}
            >
              Cancel
            </div>
            {delAddressClick && deleteOrderReqSuccess && (
              <div className="relative w-full flex items-center justify-start mt-2">
                <SuccessfulMessage MSG="Your unpaid was successfully deleted." />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          className="flex justify-center items-center h-full w-full"
          style={{ height: "60vh" }}
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
