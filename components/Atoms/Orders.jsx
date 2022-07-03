import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

// const plans = [
//   {
//     title: "Startup",
//     id: 234,
//     priceMonthly: 29,
//     priceYearly: 290,
//     price: 220,
//     estimated_shipping: 32,
//     limit: "Up to 5",
//   },
//   {
//     title: "Business",
//     id: 234,
//     priceMonthly: 99,
//     priceYearly: 990,
//     price: 220,
//     estimated_shipping: 32,
//     limit: "Up to 25",
//   },
//   {
//     title: "Enterprise",
//     id: 234,
//     priceMonthly: 249,
//     priceYearly: 2490,
//     price: 220,
//     estimated_shipping: 32,
//     limit: "Unlimited",
//   },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Orders(plans) {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Pricing plans</RadioGroup.Label>
      <div className="relative bg-white rounded-md -space-y-px">
        {plans.map((plan, planIdx) => (
          <RadioGroup.Option
            key={plan.name}
            value={plan}
            className={({ checked }) =>
              classNames(
                planIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
                planIdx === plans.length - 1
                  ? "rounded-bl-md rounded-br-md"
                  : "",
                checked
                  ? "bg-indigo-50 border-indigo-200 z-10"
                  : "border-gray-200",
                "relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-5 focus:outline-none"
              )
            }
          >
            {({ active, checked }) => (
              <>
                <div className="flex items-center text-sm">
                  <span
                    className={classNames(
                      checked
                        ? "bg-indigo-600 border-transparent"
                        : "bg-white border-gray-300",
                      active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                      "h-4 w-4 rounded-full border flex items-center justify-center"
                    )}
                    aria-hidden="true"
                  >
                    <span className="rounded-full bg-white w-1.5 h-1.5" />
                  </span>
                  <RadioGroup.Label
                    as="span"
                    className={classNames(
                      checked ? "text-indigo-900" : "text-gray-900",
                      "ml-1 font-light"
                    )}
                  >
                    {`#${plan.id} - ${plan.title}`}
                  </RadioGroup.Label>
                </div>
                <RadioGroup.Description className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                  <span
                    className={classNames(
                      checked ? "text-indigo-900" : "text-gray-900",
                      "font-light"
                    )}
                  >
                    {plan.estimated_shipping}
                  </span>
                </RadioGroup.Description>
                <RadioGroup.Description
                  className={classNames(
                    checked ? "text-indigo-700" : "text-gray-500",
                    "ml-6 pl-1 text-sm font-light md:ml-0 md:pl-0 md:text-center"
                  )}
                >
                  {`Details`}
                </RadioGroup.Description>
                <RadioGroup.Description
                  className={classNames(
                    checked ? "text-indigo-700" : "text-gray-500",
                    "ml-6 pl-1 text-sm font-light md:ml-0 md:pl-0 md:text-center"
                  )}
                >
                  {`$${plan.price} USD`}
                </RadioGroup.Description>
                <RadioGroup.Description
                  className={classNames(
                    checked ? "text-indigo-700" : "text-gray-500",
                    "ml-6 pl-1 text-sm font-light md:ml-0 md:pl-0 md:text-right"
                  )}
                >
                  {`...`}
                </RadioGroup.Description>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
