import { useEffect, useState } from 'react';
import { supabase } from '../SupabaseClient';
import emailjs from "emailjs-com"; // ✅ درست

export default function Anjoman() {
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState(null);
const [questionsList, setQuestionsList] = useState([]);


useEffect(() => {
  const fetchQuestions = async () => {
    const { data, error } = await supabase
      .from("questions")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setQuestionsList(data);
    }
  };

  fetchQuestions();
}, []);
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const handleSubmit = async (e) => {
  e.preventDefault();


  if (!validateEmail(email)) {
    setStatus({ type: 'error', message: 'ایمیل معتبر نیست.' });
    return;
  }

  if (question.trim().length < 5) {
    setStatus({ type: 'error', message: 'سؤال باید حداقل ۵ کاراکتر باشد.' });
    return;
  }

  // ذخیره در Supabase
const { data, error } = await supabase
  .from("questions")
  .insert([{ email, question }])
  .select()
  .single();

if (error) {
  setStatus({ type: "error", message: "خطا در ذخیره سؤال: " + error.message });
  return;
}

// اضافه کردن فوری به لیست بدون نیاز به fetch دوباره
setQuestionsList((prev) => [data, ...prev]);

  if (error) {
    setStatus({ type: "error", message: "خطا در ذخیره سؤال: " + error.message });
    return;
  }

  // ارسال ایمیل فقط بعد از ذخیره موفق
  try {
    await emailjs.send("service_fp52mhm", "template_nwcwbna", {
  email: email,
  question: question
    }, "lGqjcxZ_lkbvFtGS7");
  } catch (err) {
    console.error("خطا در ارسال ایمیل:", err);
  }

  setStatus({ type: 'success', message: 'سؤال با موفقیت ارسال شد!' });
  setEmail('');
  setQuestion('');
};
return (
  <div className="flex lg:flex-row flex-col justify-center items-start gap-8 mx-auto p-6 w-full max-w-6xl">
    


    {/* لیست سؤال‌ها */}
<div className="w-full max-w-md">

  <div className="space-y-4 bg-gray-400 shadow-inner px-4 py-3 border border-gray-200 rounded-xl max-h-96 overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-gray-100">
      <h3 className="mb-4 font-bold text-gray-800 text-xl text-center">سؤال‌های ارسال‌شده</h3>

    {questionsList.length === 0 ? (
      <p className="text-gray-600 text-sm text-center">هنوز سؤالی ثبت نشده.</p>
    ) : (
      questionsList.map((q) => (
        <div
          key={q.id}
          className="bg-gray-50 shadow-sm hover:shadow-md p-4 border border-gray-100 rounded-lg transition duration-200"
        >
          <p className="text-gray-500 text-sm break-words">👤 {q.email}</p>
          <p className="mt-2 text-gray-800 text-base break-words leading-relaxed whitespace-pre-line">
            {q.question}
          </p>
        </div>
      ))
    )}
  </div>
</div>
    {/* فرم ارسال سؤال */}
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-400 shadow-lg p-6 border border-gray-200 rounded-xl w-full max-w-md"
    >
      <h2 className="font-bold text-gray-800 text-2xl text-center">ارسال سؤال</h2>

      <div>
        <label className="block mb-1 font-medium text-gray-700 text-sm">ایمیل</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full transition"
          placeholder="you@example.com"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700 text-sm">سؤال شما</label>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={4}
          className="bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full transition"
          placeholder="سؤال خود را اینجا بنویسید..."
          required
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 py-2 rounded w-full font-semibold text-white transition duration-200"
      >
        ارسال
      </button>

      {status && (
        <div
          className={`text-sm text-center mt-2 ${
            status.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {status.message}
        </div>
      )}
    </form>
  </div>
);
}