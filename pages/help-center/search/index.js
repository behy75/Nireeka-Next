import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resaultPending, searchPending } from "../../../app/helpCenterSlice";
import FooterHelpCenter from "../../../components/HelpCenter/FooterHelpCenter";
import HeaderHelpCenter from "../../../components/HelpCenter/HeaderHelpCenter";
import ReactLoading from "react-loading";
import CenteredPageNumbers from "../../../components/HelpCenter/CenteredPageNumbers";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathSearchQ = router.query.q;
  const pathSearchPage = router.query.page;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { resaultData, resaultSuccess, searchReqSuccess } = state.helpCenter;
  useEffect(() => {
    if (pathSearchQ) {
      dispatch(resaultPending({ resault: pathSearchQ, id: pathSearchPage }));
    }
  }, [pathSearchQ]);

  //
  const Knowledge = () => {
    {
      !resaultData && (
        <div className="w-full mx-auto h-50 ">
          <ReactLoading
            type="spin"
            color="rgb(209, 213, 219)"
            height={80}
            width={80}
            className="h-screen mx-auto"
          />
        </div>
      );
    }
    if (resaultData?.topics.length === 0) {
      return (
        <p className="pb-8 mt-3 font-light">
          No results for {` `}
          <span className="font-light text-customColorNIR">
            {`${pathSearchQ}`}
          </span>
          {` `}
          <Link href="/help-center" passHref>
            <a className="font-light underline cursor-pointer">
              Browse knowledge base
            </a>
          </Link>
        </p>
      );
    } else {
      <p className="mt-3">
        <span className="font-light text-customColorNIR">
          {" "}
          {`${pathSearchQ}`}
        </span>
        {` `}
        <Link href="/help-center" passHref>
          <a className="font-light underline cursor-pointer">
            Browse knowledge base
          </a>
        </Link>
      </p>;
    }
  };

  let pagesNumber = Math.ceil(
    resaultData ? resaultData.pagination.total / 10 : 1
  );

  return (
    <>
      <div>
        <HeaderHelpCenter />

        <div className="bg-gray-100 ">
          <div className="w-full px-2 mx-auto lg:w-8/12 ">
            <div className="flex-col pt-2 pb-1 text-left bg-gray-100 align-center">
              <h2 className="py-1 mt-8 text-3xl font-light md:text-4xl">
                {resaultData?.topics.length} results for {`${pathSearchQ}`}
              </h2>
            </div>
          </div>
          {/* {resaultData} */}
          <div className="w-full px-2 mx-auto lg:w-8/12 ">
            <div className="flex-col pt-2 text-left bg-gray-100 pb- align-center">
              <h2 className="px-2 py-1 text-2xl font-light text-gray-700">
                Knowledge base
              </h2>
              {/* @if(count($topics) == 0) */}

              {Knowledge()}
              {/* @endif */}
            </div>

            <div className="bg-gray-100">
              <div className="flex-col w-full px-1 py-0 mx-auto md:px-4">
                {/* <!-- Input container -->
                    @foreach($topics as $topic) */}
                {!resaultData && (
                  <div className="w-full h-screen mx-auto ">
                    <ReactLoading
                      type="spin"
                      color="rgb(209, 213, 219)"
                      height={80}
                      width={80}
                      className="h-screen mx-auto py-100"
                    />
                  </div>
                )}
                {resaultData?.topics.map((item) => {
                  return (
                    <div key={item.title} className="w-full p-2 pb-8 mt-2 ">
                      <div className="px-6 py-8 bg-white border rounded-md border-customColorNIR hover:border-yellow-500">
                        {/* <Link href={}> */}

                        <Link
                          href={`/help-center/topic/${item.id}/${item.slug}`}
                        >
                          <a className="text-xl font-light hover:text-customColorNIR">
                            {item.title}
                          </a>
                        </Link>

                        {/* </Link> */}
                        <p className="py-2 mt-2 font-light">
                          {/* {{ $topic->getDescription(130) }} */}
                          {item.description}
                        </p>
                        <div className="mx-auto text-gray-500 text-md">
                          <nav className="w-full px-1 py-1 rounded bg-grey-light">
                            <ol className="flex flex-wrap list-reset text-grey-dark">
                              <Link href="/help-center">
                                <a className="font-light cursor-pointer text-blue">
                                  NIREEKA Power Bikes Help Center
                                </a>
                              </Link>
                              {/* @if(optional($topic->topicCategory)->parent) */}
                              {item.category_parent.title && (
                                <>
                                  <li>
                                    <span className="mx-2 font-light">{`>`}</span>
                                  </li>
                                  <li>
                                    <Link
                                      href={`/help-center/category/${item.category_parent.url}`}
                                    >
                                      <a
                                        href="{{ $topic->topicCategory->parent->url() }}"
                                        className="font-light text-blue hover:text-customColorNIR"
                                      >
                                        {/* {{ $topic->topicCategory->parent->title }} */}
                                        {item.category_parent.title}
                                      </a>
                                    </Link>
                                  </li>
                                </>
                              )}

                              {/* @endif */}
                              <li>
                                <span className="mx-2 font-light">{`>`}</span>
                              </li>
                              <li>
                                <Link
                                  href={`/help-center/category/${item.category.slug}`}
                                >
                                  <a className="font-light text-gray-900 hover:text-customColorNIR">
                                    {/* {{ optional($topic->topicCategory)->title }} */}
                                    {item.category.title}
                                  </a>
                                </Link>
                              </li>
                            </ol>
                          </nav>
                        </div>
                        <p className="px-1 py-2 font-light text-gray-700 agoTime">
                          {/* {{ $topic->created_at->diffForHumans() }} */}
                          {item.created_at}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* @endforeach */}
              </div>
            </div>
            {pagesNumber > 0 && (
              <CenteredPageNumbers pagesNumber={pagesNumber} />
            )}
          </div>
        </div>
        <FooterHelpCenter />
      </div>
    </>
  );
}
