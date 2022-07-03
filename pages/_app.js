import React from "react";
import { Provider } from "react-redux";
import store from "../app/store";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layouts from "../components/Layouts";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </Provider>
    </React.StrictMode>
  );
}

export default MyApp;
