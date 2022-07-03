import HeaderHelpCenter from "../../components/HelpCenter/HeaderHelpCenter";
import FooterHelpCenter from "../../components/HelpCenter/FooterHelpCenter";
import MainHelpCenter from "../../components/HelpCenter/MainHelpCenter";
import { useDispatch } from "react-redux";
// import { setSearchData } from "../../app/HelpCenterSlice";
import { getHelp } from "../../app/api/help";
import { getSearch } from "../../app/api/help/search";
import { useSelector } from "react-redux";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

const HelpCenter = ({ Help }) => {
  const state = useSelector((state) => state);
  let { searchData } = state.helpCenter;
  const [loading, setLoading] = useState(false);

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
          <MainHelpCenter Help={Help} />
          <FooterHelpCenter />
        </div>
      )}
    </>
  );
};

export default HelpCenter;

export async function getServerSideProps({ context }) {
  let data = await getHelp();
  return {
    props: { Help: data },
  };
}

// id:
// slug:
// title:
// description:
