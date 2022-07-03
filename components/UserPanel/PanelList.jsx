import React from "react";
import { motion } from "framer-motion";
import {
  ActivityImg,
  AddressImg,
  AffiliateImg,
  ChallengesImg,
  OrdersImg,
  PaynentsImg,
  ReportsImg,
  SettingImg,
  SupportImg,
  UpdateImg,
  WhiteActivityImg,
  WhiteAddressImg,
  WhiteAffiliateImg,
  WhiteChallengesImg,
  WhiteOrdersImg,
  WhitePaynentsImg,
  WhiteReportsImg,
  WhiteSettingImg,
  WhiteSupportImg,
  WhiteUpdateImg,
} from "./img";
import { useSelector, useDispatch } from "react-redux";
import { setActiveItem } from "../../app/userPanelSlice";
import Link from "next/link";

const navigation = [
  {
    name: "Activity",
    icon: ActivityImg,
    whiteIcon: WhiteActivityImg,
    href: "/user-panel",
    id: 1,
  },
  {
    name: "Orders",
    icon: OrdersImg,
    whiteIcon: WhiteOrdersImg,
    href: "/orders",
    id: 2,
  },
  {
    name: "Setting",
    icon: SettingImg,
    whiteIcon: WhiteSettingImg,
    href: "/setting",
    id: 3,
  },
  {
    name: "Reports",
    icon: ReportsImg,
    whiteIcon: WhiteReportsImg,
    href: "/reports",
    id: 4,
  },
  {
    name: "Navigations",
    icon: AddressImg,
    whiteIcon: WhiteAddressImg,
    href: "/navigations",
    id: 5,
  },
  {
    name: "Challenges",
    icon: ChallengesImg,
    whiteIcon: WhiteChallengesImg,
    href: "/challenges",
    id: 6,
  },
  {
    name: "Payments",
    icon: PaynentsImg,
    whiteIcon: WhitePaynentsImg,
    href: "/payments",
    id: 7,
  },
  {
    name: "Affiliate",
    icon: AffiliateImg,
    whiteIcon: WhiteAffiliateImg,
    href: "/affiliate",
    id: 8,
  },
  {
    name: "Support",
    icon: SupportImg,
    whiteIcon: WhiteSupportImg,
    href: "/support",
    id: 9,
  },
  {
    name: "Update",
    icon: UpdateImg,
    whiteIcon: WhiteUpdateImg,
    href: "/update",
    id: 10,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MobileItems({ item, name, id, setSidebarOpen, itemHref }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let { activeItem } = state.userPanel;

  return (
    <Link href={itemHref}>
      <a
        onClick={() => {
          dispatch(setActiveItem(id));
          setSidebarOpen(false);
        }}
        className={classNames(
          activeItem === id
            ? "bg-gray-100 text-gray-900"
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
          "group flex items-center px-2 py-2 text-sm font-light rounded-md"
        )}
      >
        <div key={name}>
          <div className="relateive flex w-full cursor-pointer group-hover:text-gray-500">
            {activeItem === id && (
              <div className="absolute left-0 w-2 h-10 rounded-r-md -mt-2 bg-blue-400"></div>
            )}
            <item.icon
              className={classNames(
                activeItem === id ? "text-gray-600" : "text-gray-400",
                "mx-3 flex-shrink-0 h-6 w-6"
              )}
              aria-hidden="true"
            />
            <p className="pl-3">{name}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

function DesktopItems({ item, name, id, itemHref }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let { activeItem } = state.userPanel;

  return (
    <Link href={itemHref}>
      <motion.a
        key={id}
        onClick={() => {
          dispatch(setActiveItem(id));
        }}
        className={classNames(
          activeItem === id
            ? "bg-white text-gray-400"
            : "text-gray-400 hover:bg-gray-700",
          "items-center justify-center h-16 w-full rounded-full cursor-pointer flex flex-col"
        )}
        whileHover={{ scale: 1.2 }}
      >
        {activeItem === id && (
          <item.icon className="h-6 w-6" aria-hidden="true" />
        )}
        {activeItem !== id && (
          <item.whiteIcon className="h-6 w-6" aria-hidden="true" />
        )}
        <div
          className={classNames(
            activeItem === id ? "text-xs" : "text-sm",
            "font-light m-1"
          )}
        >
          {name}
        </div>
      </motion.a>
    </Link>
  );
}

export function PanelDesktopList() {
  return (
    <nav
      aria-label="Sidebar"
      className="hidden md:flex md:rounded-3xl mt-10 md:bg-gray-800 md:overflow-y-auto md:justify-center"
    >
      <div className="relative w-20 flex flex-col p-3 space-y-2">
        {navigation.map((index) => (
          <DesktopItems
            key={index.id}
            name={index.name}
            item={index}
            href={index.href}
            id={index.id}
            itemHref={index.href}
          />
        ))}
      </div>
    </nav>
  );
}

export function PanelMobileList({ setSidebarOpen }) {
  return (
    <div className="mt-5 flex-1 h-0 overflow-y-auto">
      <nav className="px-2 space-y-1">
        {navigation.map((index) => (
          <MobileItems
            setSidebarOpen={setSidebarOpen}
            name={index.name}
            item={index}
            id={index.id}
            key={index.id}
            itemHref={index.href}
          />
        ))}
      </nav>
    </div>
  );
}
