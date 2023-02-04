import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";
import '@react-page/editor/lib/index.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
