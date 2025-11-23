// pages/Home.jsx
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import VideoBox from "../Main/VideoBox";
import FaqSlider from "../Main/FaqSlider";
import CareerPath from "../Main/LifeStyle";
import { lazy } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography
} from "@mui/material";

import BounceLoader from "react-spinners/esm/BounceLoader";


// import Galery from "../Main/Galery";
const Galery = lazy(() => import ("../Main/Galery"))


export default function Home() {

  return (
    <div>
        <Helmet>
        <title>Mohammadreza Kazemi | محمدرضا کاظمی</title>
        <meta
          name="description"
          content="وبسایت شخصی محمد رضا کاظمی طراح سایت فرانت اند"
        />
        <meta
          name="keywords"
          content="طراحی سایت با React & Next "
        />

        {/* Open Graph */}
        <meta property="og:title" content="محمدرضا کاظمی | صفحه اصلی" />
        <meta
          property="og:description"
          content="وبسایت شخصی محمد رضا کاظمی طراح سایت فرانت اند"
        />
        <meta property="og:image" content="/assets/frontend_4.png" />
        <meta property="og:url" content="https://mohammadrezakz.ir/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="محمدرضا کاظمی | صفحه اصلی" />
        <meta
          name="twitter:description"
          content="وبسایت شخصی محمد رضا کاظمی طراح سایت فرانت اند"
        />
        <meta name="twitter:image" content="/assets/frontend_4.png" />

        {/* Canonical */}
        <link rel="canonical" href="mohammadrezakz.ir/" />
      </Helmet>

      <section className="justify-around items-center grid grid-cols-1 lg:grid-cols-3">
        <Main />
        {/* <Suspense fallback={<div className="flex justify-center items-center w-full h-full"><BounceLoader size={"100px"}  /></div>}> */}
        <Galery />
      </section>
      <VideoBox />
      <section className="justify-center items-center lg:items-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <FaqSlider />
        <CareerPath />


        <div className="flex flex-col justify-center items-center gap-4 md:col-span-2 lg:col-span-1 mb-62">
        <img src="./assets/f4.png" className="max-w-54 md:max-w-[370px] h-auto object-contain" />
        <img src="./assets/frontend_4.png" className="max-w-54 md:max-w-[370px] h-auto object-contain" />
        </div>

      </section>
    </div>
  );
}