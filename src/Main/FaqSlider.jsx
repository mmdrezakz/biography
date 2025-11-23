import { motion } from "framer-motion";
import { useState } from "react";
import Jadval from "./Jadval";

const faqs = [
  {
    question: "چرا وارد برنامه‌نویسی شدی؟",
    answer: "چون واقعا وقتی کد میزنم وارد یک دنیای دیگه میشم و میتونم ساعت ها بدون وقفه کد بزنم و لذت ببرم .",
    emoji: "💻",
  },
  {
    question: "سخت‌ترین پروژه‌ات چی بوده؟",
    answer: "پروژه طراحی سایت با دسترسی ها و مجوز های ورود و ثبت نام کاربر در سایت ",
    emoji: "🧠",
  },
  {
    question: "به کدوم ابزار بیشتر علاقه داری؟",
    answer: "React   Tailwind   Swiperjs ",
    emoji: "🛠️",
  },
  {
    question: "هدفت برای آینده چیه؟",
    answer: "میخوام فول استک دولوپر بشم .! بتونم یک تیم جمع بکنم  همیشه تو کارمون بهترین باشیم .",
    emoji: "🚀",
  },
];

export default function FaqSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % faqs.length);
  const prev = () => setCurrent((prev) => (prev - 1 + faqs.length) % faqs.length);

  return (
    <div className="relative mx-auto px-4 py-8 w-full max-w-xl">
            <div className="top-0 right-30 z-10 absolute opacity-20">
        <img  src="./assets/f5.png"></img>
      </div>
      <div className="flex justify-between items-center bg-gray-400 mb-4 p-2">
        <button onClick={prev} className="z-50 bg-white shadow-gray-600 hover:shadow-sm p-2 px-3 border border-white rounded-full hover:text-gray-500 text-2xl transition duration-150">←</button>
        <h2 className="font-vazir font-bold text-xl">سوالات متداول</h2>
        <button onClick={next} className="z-50 bg-white shadow-gray-600 hover:shadow-sm p-2 px-3 border border-white rounded-full hover:text-gray-500 text-2xl transition duration-150">→</button>
      </div>

      <motion.div
        key={current}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
        className="bg-gray-400 shadow-md p-6 rounded-lg text-right"
      >
        <div className="mb-2 font-vazir text-3xl">{faqs[current].emoji}</div>
        <h3 className="mb-2 font-vazir font-semibold text-lg">{faqs[current].question}</h3>
        <p className="font-vazir text-gray-900 text-sm">{faqs[current].answer}</p>
      </motion.div>


    <Jadval />
    </div>
  );
}