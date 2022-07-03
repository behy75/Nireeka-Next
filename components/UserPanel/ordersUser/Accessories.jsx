import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import AccessoriesTable from "./AccessoriesTable";

export default function Accessories() {
  const state = useSelector((state) => state);
  let { ordersData } = state.userPanel;

  return (
    <div>
      <div className="py-1">
        {ordersData && ordersData.order_accessories[0] ? (
          <div>
            {ordersData.order_accessories.map((item) => (
              <AccessoriesTable
                percent={item.progress}
                key={item.id}
                bikeIndx={item.id}
                model={`${item.id} - ${item.title}`}
                price={`${item.price}`}
                manufactureDate={`${item.estimated_shipping}`}
                colorAndSize={`Details`}
                details={`Details`}
                lastItem={item.id + 1 === ordersData.order_bikes.length}
                selectedBg={item.id === 0 ? "bg-red-500" : ""}
                stage={item.stage}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
