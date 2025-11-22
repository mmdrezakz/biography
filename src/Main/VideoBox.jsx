import React from 'react';
import "/assets/film/1f.mp4"
import { motion } from 'framer-motion';
export default function VideoBox() {
  return (
    <div className="justify-center items-center gap-5 grid grid-cols-1 xl:grid-cols-2 bg-gray-400 shadow-lg mx-6 my-6 p-4 rounded-xl transition-all duration-500">
                      <motion.div    
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            
            transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            }}
          >

    <section className='w-full'>
        <h2 className="mb-4 font-vazir font-semibold text-gray-700 text-xl">
        🎥 سایت فیلم طراحی شده
        </h2>
         <div className="relative shadow-md pb-[56.25%] rounded-lg w-full overflow-hidden">
            <video
            loading="lazy"
          className="top-0 left-0 absolute w-full h-full"
          src="/assets/film/1f.mp4"
          title="website video "
          controls
          preload="metadata"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></video>
      </div>
    </section>
          </motion.div>

    <section className="my-6 p-6 rounded-xl font-vazir text-gray-900">
      <h2 className="mb-4 font-vazir font-bold text-2xl">🎬 قابلیت‌های سایت OdMovie</h2>

      <div className="space-y-4 text-justify leading-7">
        <p>
          <strong>OdMovie</strong> یک پلتفرم فارسی برای مرور و مشاهده اطلاعات فیلم‌ها، سریال‌ها و بازیگران است که با طراحی ساده و تجربه کاربری روان ساخته شده.
        </p>

        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong>دسته‌بندی محتوا:</strong> شامل فیلم‌ها، سریال‌ها، دوبله فارسی و بازیگران با صفحات اختصاصی.
          </li>
          <li>
            <strong>جستجوی سریع:</strong> امکان جستجوی فیلم، سریال یا بازیگر با نام.
          </li>
          <li>
            <strong>مرور بر اساس امتیاز:</strong> نمایش فیلم‌ها با امتیاز بالا یا محبوبیت بیشتر.
          </li>
          <li>
            <strong>صفحه اختصاصی هر فیلم:</strong> شامل پوستر، امتیاز، عنوان، سال تولید و لینک جزئیات.
          </li>
          <li>
            <strong>ثبت‌نام و ورود:</strong> برای ساخت حساب کاربری و استفاده از امکانات شخصی‌سازی.
          </li>
          <li>
            <strong>طراحی ریسپانسیو:</strong> سازگار با موبایل و دسکتاپ، با رنگ‌بندی ملایم و فونت فارسی.
          </li>
        </ul>

        <div className="mt-4">
          <h3 className="mb-2 font-semibold text-lg">📌 صفحات مهم سایت:</h3>
          <ul  className="justify-center items-center space-y-1 grid grid-cols-2 list-disc list-inside">
            <li><a href="https://odmovie.vercel.app/movies" className="text-gray-800 hover:underline">فیلم‌ها</a></li>
            <li><a href="https://odmovie.vercel.app/tv" className="text-gray-800 hover:underline">سریال‌ها</a></li>
            <li><a href="https://odmovie.vercel.app/people" className="text-gray-800 hover:underline">بازیگران</a></li>
            <li><a href="https://odmovie.vercel.app/farsimovie" className="text-gray-800 hover:underline">دوبله فارسی</a></li>
            <li><a href="https://odmovie.vercel.app/about" className="text-gray-800 hover:underline">درباره ما</a></li>
            <li><a href="https://odmovie.vercel.app/sign" className="text-gray-800 hover:underline">ثبت‌نام</a></li>
            <li><a href="https://odmovie.vercel.app/login" className="text-gray-800 hover:underline">ورود</a></li>
          </ul>
        </div>
      </div>
    </section>

    </div>
  );
}