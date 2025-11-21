
const steps = [
  {
    title: "🎓 شروع دانشگاه",
    description: "ورود به رشته مهندسی نرم‌افزار در دانشگاه خوراسگان اصفهان.",
  },
  {
    title: "💼 اولین شغل",
    description: "شروع به کار در شرکت آریا کامین - فولاد مبارکه، تجربه اولیه در پروژه‌های صنعتی.",
  },
  {
    title: "🚀 ورود به React",
    description: "یادگیری React و شروع ساخت کامپوننت‌های تعاملی و حرفه‌ای.",
  },
  {
    title: "🎨 تسلط بر UI/UX",
    description: "ترکیب Tailwind، Framer Motion و طراحی ریسپانسیو برای تجربه کاربری بهتر.",
  },
  {
    title: "🧠 حل چالش‌های SSR",
    description: "رفع مشکلات hydration mismatch و بهینه‌سازی dark mode در پروژه‌های SSR.",
  },
  {
    title: "🔥 ساخت پورتفولیوی خاص",
    description: "طراحی سایت بیوگرافی با کامپوننت‌های خلاقانه و جلوه‌های بصری حرفه‌ای.",
  },
];


 export default function CareerPath() {
  return (
    <div className="mx-auto lg:mb-62 px-4 py-8 max-w-2xl font-vazir">
      <h2 className="mb-6 font-bold text-blue-600 dark:text-blue-400 text-2xl text-center">
        مسیر حرفه‌ای من
      </h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-400 shadow-md p-4 border-blue-500 border-r-4 rounded-lg"
          >
            <h3 className="mb-1 font-semibold text-lg">
              {step.title}
            </h3>
            <p className="text-gray-950 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}