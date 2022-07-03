import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import Breadcrumbs from "../../../../components/HelpCenter/Breadcrumbs";
import HeaderHelpCenter from "../../../../components/HelpCenter/HeaderHelpCenter";
import Topic from "../../../../components/HelpCenter/Topic";
import ReactLoading from "react-loading";
import FooterHelpCenter from "../../../../components/HelpCenter/FooterHelpCenter";

// import { getTopic } from "../../../../app/api/help/topic";
export default function Index({ items }) {
  const router = useRouter();
  const { topic } = router.query;

  const [loading, setLoading] = useState(false);

  const titleRouter = items.data.topic.title;

  return (
    <>
      {loading ? (
        <div className="w-full my-auto mx-auto h-screen ">
          <ReactLoading
            type="spin"
            color="rgb(209, 213, 219)"
            height={80}
            width={80}
            className=" mx-auto h-screen py-200"
          />
        </div>
      ) : (
        <div>
          <HeaderHelpCenter />
          {topic.status === 404 ? (
            "note found"
          ) : (
            <>
              <Topic topics={items} />
            </>
          )}
          <FooterHelpCenter />
        </div>
      )}
    </>
  );
}
export async function getServerSideProps(context) {
  const { params } = context;
  const { topic } = params;
  const res = await fetch(`http://nireeka.com/api/help-center/topic/${topic}`);
  const items = await res.json();
  return {
    props: { items },
  };
}
