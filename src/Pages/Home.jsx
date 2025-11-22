// pages/Home.jsx
import { useOutletContext } from "react-router-dom";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import VideoBox from "../Main/VideoBox";
import FaqSlider from "../Main/FaqSlider";
import CareerPath from "../Main/LifeStyle";
import { lazy } from "react";
import BounceLoader from "react-spinners/esm/BounceLoader";
// import Galery from "../Main/Galery";
const Galery = lazy(() => import ("../Main/Galery"))

export default function Home() {

  return (
    <div>
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