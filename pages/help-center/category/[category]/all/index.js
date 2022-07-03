import Link from "next/link";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";
import { getAllCategory } from "../../../../../app/api/help/all";
import Breadcrumbs from "../../../../../components/HelpCenter/Breadcrumbs";
import FooterHelpCenter from "../../../../../components/HelpCenter/FooterHelpCenter";
import HeaderHelpCenter from "../../../../../components/HelpCenter/HeaderHelpCenter";
import ReactLoading from "react-loading";

export default function All({ articles }) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <>
          <div className="w-full my-auto mx-auto  h-screen ">
            <ReactLoading
              type="spin"
              color="rgb(209, 213, 219)"
              height={80}
              width={80}
              className=" mx-auto h-screen py-200"
            />
          </div>
        </>
      ) : (
        <>
          <HeaderHelpCenter />
          <div className="bg-gray-100">
            <Breadcrumbs {...articles} />
            {/* section description */}
            <div className="w-11/12 pb-2 mx-auto border-b border-gray-300 lg:w-8/12">
              <div className="flex-col pt-2 pb-2 text-left bg-gray-100 align-center">
                <h2 className="py-1 text-4xl font-light">
                  {articles.data.title}
                </h2>
                <p className="py-1 font-light text-gray-500 text-md font-dosis">
                  {articles.data.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap w-11/12 px-4 py-8 mx-auto lg:w-8/12 ">
              {/* map */}
              {articles.data.topics.map((card) => {
                return (
                  <div className="w-full p-4 md:w-1/2 " key={card.id}>
                    <Link href={`help-center/category/${card.slug}`}>
                      <a>
                        <div className="py-10 px-6 pt-8 transition-all bg-white border rounded-md border-customColorNIR hover:border-yellow-500">
                          <h6 className="text-xl font-light font-oswald ">
                            {card.title}
                          </h6>
                          <p className="pt-1 text-gray-500 text-md font-dosis font-light">
                            {card.description}
                          </p>
                        </div>
                      </a>
                    </Link>
                  </div>
                );
              })}

              {/* map */}
            </div>
          </div>
          <FooterHelpCenter />
        </>
      )}
    </>
  );
}
export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  let data = await getAllCategory(category);
  return {
    props: { articles: data, category },
  };
}
