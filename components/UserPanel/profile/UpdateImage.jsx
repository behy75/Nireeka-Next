import React, { useState, useCallback, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useSelector, useDispatch } from "react-redux";
import { updateAvatarPending } from "../../../app/userPanelSlice";
import LoadingNireeka from "../../Atoms/LoadingNireeka";
import SuccessfulMessage from "../../Atoms/SuccessfulMessage";
import MainModal from "../../Atoms/MainModal";

function blobToFile(theBlob) {
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  theBlob.lastModifiedDate = new Date();
  theBlob.name = "fileName.png";
  return theBlob;
}

export default function UpdateImage({ openUpload, setOpenUpload }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let { updateAvatarReqSuccess } = state.userPanel;
  const [uploadAvatarClick, setUploadAvatarClick] = useState(false);
  const [blobAvatarCroped, setBlobAvatarCroped] = useState("");

  useEffect(() => {
    if (uploadAvatarClick && updateAvatarReqSuccess === true) {
      const timer = setTimeout(() => {
        setOpenUpload(false);
        setUploadAvatarClick(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [updateAvatarReqSuccess, uploadAvatarClick]);

  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", width: 16, aspect: 16 / 16 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [blob, setBlob] = useState(null);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    // const pixelRatio = window.devicePixelRatio;
    const pixelRatio = 0.5;
    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high"; // high medium

    // first added image
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    canvas.toBlob((blob) => {
      setBlobAvatarCroped(blob);
    });

    // var link = document.createElement("a");
    // link.download = "image.png";
    // canvas.toBlob(function (blob) {
    //   link.href = URL.createObjectURL(blob);
    //   link.click();
    // }, "image/png");
  }, [completedCrop]);

  const handleSendAvatar = async (e) => {
    e.preventDefault();
    if (!blobAvatarCroped) return alert("file nist");
    if (blobAvatarCroped && blobAvatarCroped.size > 2 * 1024 * 1024)
      return alert("file");
    setUploadAvatarClick(true);
    const formData = new FormData();
    formData.append("avatar", blobToFile(blobAvatarCroped));
    dispatch(updateAvatarPending(formData));
  };

  return (
    <MainModal setOpen={setOpenUpload} open={openUpload}>
      <form className="w-full bg-white rounded-3xl my-5 flex flex-col justify-center items-center">
        <div className="border-gray-200 py-5">
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <div className="relative">
                  <span className="text-xs sm:text-sm font-light font-dosis text-indigo-600">
                    {`The size of the crop section is ${
                      blobAvatarCroped && blobAvatarCroped.size
                        ? (blobAvatarCroped.size / (1024 * 1024)).toFixed(1)
                        : 0
                    } MB.`}
                  </span>
                  {!upImg ? (
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
                        type="file"
                        accept=".jpg,.jpeg,.png,.bmp"
                        onChange={onSelectFile}
                        id="file-upload"
                        name="file-upload"
                        className="sr-only"
                      />
                    </label>
                  ) : (
                    <ReactCrop
                      src={upImg}
                      onImageLoaded={onLoad}
                      crop={crop}
                      onChange={(c) => setCrop(c)}
                      onComplete={(c) => setCompletedCrop(c)}
                    />
                  )}
                </div>

                {/* {!upImg && ( */}
                <div className="flex justify-center text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative flex justify-center cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a image</span>
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,.bmp"
                      onChange={onSelectFile}
                      id="file-upload"
                      name="file-upload"
                      className="sr-only"
                    />
                  </label>
                </div>
                {/* )} */}
                <p className="text-xs text-gray-500">
                  PNG, JPG, JPEG amd BMP up to 2MB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden">
          <canvas
            ref={previewCanvasRef}
            style={{
              width: Math.round(completedCrop?.width ?? 0),
              height: Math.round(completedCrop?.height ?? 0),
            }}
          />
        </div>
        <div className="w-full">
          <div className="px-4 py-3 rounded-3xl text-center sm:px-6">
            {uploadAvatarClick && updateAvatarReqSuccess === true && (
              <div className="relative w-full sm:w-2/3 xl:w-1/2 flex justify-start">
                <SuccessfulMessage MSG="Your Avatar was successfully updated." />
              </div>
            )}
            <div className="px-4 py-3 rounded-3xl text-center sm:px-6">
              <div
                onClick={() => {
                  setOpenUpload(false);
                }}
                className="inline-flex justify-center py-2 px-4 mx-2 text-sm font-medium rounded-md text-gray-700 cursor-pointer"
              >
                Cancel
              </div>
              {blobAvatarCroped && blobAvatarCroped.size < 2 * 1024 * 1024 ? (
                <div
                  onClick={handleSendAvatar}
                  className="inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                >
                  {updateAvatarReqSuccess === false ? (
                    <div className="p-1">
                      <LoadingNireeka
                        colorLoading={"text-white"}
                        widthLoading={"w-4"}
                        heightLoading={"h-4"}
                        borderLoading={"border-2"}
                      />
                    </div>
                  ) : (
                    "Upload"
                  )}
                </div>
              ) : (
                <div className="inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600">
                  Upload
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </MainModal>
  );
}
