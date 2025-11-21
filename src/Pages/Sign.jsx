import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { supabase } from "../SupabaseClient";

export default function Sign() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    username: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSignup = async (e) => {
  e.preventDefault();

  const { email, password, firstName, lastName, username } = formData;

  // ثبت‌نام در Supabase
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
        username: username,
      },
    },
  });

  if (signUpError) {
    alert("❌ خطا در ثبت‌نام: " + signUpError.message);
    return;
  }

  alert("✅ ثبت‌نام موفق! لطفاً ایمیلت رو تأیید کن.");
  navigate("/login");
};

  return (
    <div className="flex justify-center items-center mt-2 font-vazir">
      <div className="bg-gray-400 shadow-md p-8 rounded w-full max-w-sm">
        <h2 className="font-bold text-xl text-center">ثبت نام</h2>
        <form className="" onSubmit={handleSignup}>
          <label>نام کاربری</label>
          <input
            type="text"
            name="username"
            placeholder="نام کاربری"
            className="bg-gray-200 p-2 border rounded w-full"
            onChange={handleChange}
          />
          <label>نام</label>
          <input
            type="text"
            name="firstName"
            placeholder="نام"
            className="bg-gray-200 p-2 border rounded w-full"
            onChange={handleChange}
          />
          <label>نام خانوادگی</label>
          <input
            type="text"
            name="lastName"
            placeholder="نام خانوادگی"
            className="bg-gray-200 p-2 border rounded w-full"
            onChange={handleChange}
          />
          <label>ایمیل</label>
          <input
            type="email"
            name="email"
            placeholder="ایمیل"
            className="bg-gray-200 p-2 border rounded w-full"
            onChange={handleChange}
          />
          <label>رمز عبور</label>
          <input
            type="password"
            name="password"
            placeholder="رمز عبور"
            className="bg-gray-200 p-2 border rounded w-full"
            onChange={handleChange}
          />
          <div className="flex items-center gap-4">
            <p>قبلا ثبت نام کرده‌اید؟</p>
            <Link to={"/login"} className="font-bold hover:text-blue-950">
              ورود
            </Link>
          </div>
          <button type="submit" className="bg-gray-200 py-2 rounded w-full">
            ثبت نام
          </button>
        </form>
      </div>
    </div>
  );
}