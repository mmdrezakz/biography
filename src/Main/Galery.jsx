import React, { useState } from "react";
import { motion } from "framer-motion";
import BounceLoader from "react-spinners/esm/BounceLoader";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from 'swiper/modules';

const galery = [
  { id: 1, title: "logo1", src: "./assets/galery/1.png" },
  { id: 2, title: "logo2", src: "./assets/galery/2.png" },
  { id: 3, title: "logo3", src: "./assets/galery/3.png" },
  { id: 4, title: "logo4", src: "./assets/galery/4.jpg" },
  { id: 5, title: "logo5", src: "./assets/galery/5.jpg" },
  { id: 6, title: "logo6", src: "./assets/galery/6.jpg" },
  { id: 7, title: "logo7", src: "./assets/galery/7.jpg" },
];

export default function Galery() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="md:col-span-2 bg-gray-400 mx-8 my-5 lg:py-20 rounded-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
          
        }}
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[45%] md:w-[35%] h-[400px] md:h-[500px] overflow-hidden"
        >
          {galery.map((item) => (
            <SwiperSlide
              key={item.id}
              className="relative flex justify-center items-center"
            >
              {loading && (
                <div className="absolute inset-0 flex justify-center items-center bg-gray-400">
                  <BounceLoader color="#36d7b7" size={60} />
                </div>
              )}
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
                  loading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setTimeout(() => setLoading(false), 1000)}
                onError={() => setLoading(false)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}