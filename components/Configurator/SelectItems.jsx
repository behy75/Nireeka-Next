import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modals from "./Modals";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Item({ setSelectedId, selectedId, id, isLastId }) {
  const [selectedItem, setSelectedItem] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div
      key={id}
      onClick={() => setSelectedId(id)}
      className={classNames(
        selectedId === id ? "border-blue-800" : "border-gray-300",
        isLastId % 2 ? "col-span-2" : "col-span-1",
        "border-2 cursor-pointer rounded-lg flex flex-col justify-center my-1"
      )}
    >
      {open && (
        <div>
          <Modals
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            setOpen={setOpen}
            open={open}
          />
        </div>
      )}
      <div className="flex justify-center mt-1">
        <Image
          alt="bike"
          className="w-auto rounded-md"
          width={40}
          height={40}
          src="https://nireeka.com/storage/product/ym7B21ed5WRcjBHb1guN4SB08d2vGjLH3OBMF0Ej.jpg"
        />
      </div>
      <div className="flex justify-center my-0">
        <span className="text-xs sm:text-sm font-normal">250 W Motor</span>
      </div>
      <div className="flex justify-center items-center my-0">
        <span className="flex items-center relative text-xs sm:text-sm font-light text-gray-400 mx-1">
          Bafang M500
          <a
            onClick={() => {
              setSelectedItem(3);
              setOpen(true);
            }}
            className="absolute -right-4 w-3 h-3 bg-gray-500 hover:bg-gray-400 cursor-pointer text-xs font-semibold font-inter text-center text-white rounded-lg"
          >
            <svg fill="#ffffff" viewBox="0 0 50 50">
              <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z" />
            </svg>
          </a>
        </span>
      </div>
      <div className="flex justify-center items-center py-1">
        <span className="text-xs sm:text-sm font-normal">$149</span>
      </div>
    </div>
  );
}

function RadioItem({ colorData, selectedId, setSelectedId, id }) {
  return (
    <div key={id} onClick={() => setSelectedId(id)}>
      <div className="flex flex-col justify-center mx-2">
        <div
          className={classNames(
            selectedId === id ? "border-2 border-blue-800" : "",
            "cursor-pointer rounded-full flex flex-col justify-center p-1"
          )}
        >
          <Image
            alt="bike"
            className="w-auto rounded-md"
            width={40}
            height={40}
            src={colorData.srcItem}
          />
        </div>
        <div className="flex justify-center">
          <span className="text-xs sm:text-sm font-normal">
            {`$${colorData.price}`}
          </span>
        </div>
      </div>
    </div>
  );
}

function SelectItem({ data, id }) {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div key={id} className="my-1 sm:my-4 mx-2">
      <div className="mt-2">
        <span className="text-xs sm:text-lg font-medium">{`Available ${data.title}`}</span>
      </div>
      <div className="-mt-1">
        <span className="text-xs sm:text-sm font-light text-blue-400 hover:text-blue-600 cursor-pointer">
          {`Which ${data.name} is right for you?`}
        </span>
      </div>
      <div
        className={classNames(
          data.type === 1 && "grid grid-cols-2 gap-2",
          data.type === 2 && "flex",
          "border-b border-gray-300 my-2 py-2"
        )}
      >
        {data.values.map((item, index) => (
          <>
            {data.type === 1 && (
              <Item
                setSelectedId={setSelectedId}
                selectedId={selectedId}
                isLastId={index + 1 === data.values.length ? index + 1 : 0}
                id={index + 1}
                key={index + 1}
              />
            )}
            {data.type === 2 && (
              <RadioItem
                setSelectedId={setSelectedId}
                selectedId={selectedId}
                isLastId={index + 1 === data.values.length ? index + 1 : 0}
                id={index + 1}
                colorData={item}
                key={index + 1}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default function SelectItems() {
  const [size, setSize] = useState([]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize([window.innerHeight, window.innerWidth]);
    });
  }, []);
  let items = [
    { id: 1, type: 1, title: "Motors", name: "motor", values: [1, 2, 3] },
    {
      id: 2,
      type: 2,
      title: "Colors",
      name: "color",
      values: [
        {
          id: 1,
          srcItem:
            "https://nireeka.com/storage/colors/7RChGPI7LiAZw0UPPxuqTKsDAqpdaoVaiEVmOy87.png",
          price: 0,
        },
        {
          id: 2,
          srcItem:
            "https://nireeka.com/storage/colors/kwOnyPkQU9ghe36nZQHQJXAThjozpUbTWhPIea9J.png",
          price: 199,
        },
        {
          id: 3,
          srcItem:
            "https://nireeka.com/storage/colors/Jko4NPw5uk6JUsvy8Ds6zlt3bWMP91CcpL15JAKm.png",
          price: 299,
        },
        {
          id: 4,
          srcItem:
            "https://nireeka.com/storage/colors/YI6Rq6JvhfhXi1eCvP5mm3LnDybja1bw1Netfk5X.png",
          price: 399,
        },
      ],
    },
    {
      id: 3,
      type: 1,
      title: "Batteris",
      name: "battery",
      values: [1, 2, 3, 4],
    },
    { id: 4, type: 1, title: "Charger", name: "charger", values: [1, 2] },
  ];
  return (
    <div
      className="overflow-y-scroll"
      style={{
        height: size[1] < 640 ? "calc(90vh - 300px)" : "calc(75vh)",
      }}
    >
      {items.map((item, index) => (
        <SelectItem data={item} id={index + 1} key={index + 1} />
      ))}
    </div>
  );
}
