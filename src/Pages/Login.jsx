import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../SupabaseClient";
import { MoonLoader } from "react-spinners";
export default function Login() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
  const [isLoading,setIsLoading] = useState(false)

const handleLogin = async (e) => {
  e.preventDefault();
  setIsLoading(true)
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("❌ ورود ناموفق: " + error.message);
    setIsLoading(false)
    return;
  }
    setIsLoading(false)
  alert("✅ ورود موفق!");
  navigate("/");
};
  return (
    <div className="flex justify-center items-center my-10 font-vazir">
      <div className="bg-gray-400 shadow-md p-8 rounded w-full max-w-sm">
        <h2 className="mb-4 font-bold text-xl text-center">ورود به حساب</h2>
<form className="space-y-4"  onSubmit={handleLogin}>
  <label>ایمیل</label>
  <input
    type="email"
    placeholder="ایمیل"
    className="bg-gray-200 p-2 border rounded w-full"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <label>رمز عبور</label>
  <input
    type="password"
    placeholder="رمز عبور"
    className="bg-gray-200 p-2 border rounded w-full"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <div>
    <p>قبلا عضو نشده‌اید؟</p>
    <Link to={"/sign"} className="font-bold hover:text-blue-950">ثبت نام</Link>
  </div>
  <button type="submit" disabled={isLoading} className="bg-gray-200 py-2 rounded w-full">
    {isLoading ? <p className="flex justify-center items-center gap-5">
      <MoonLoader color="black" size={24} />
      <p>درحال ورود</p>
    </p> : <p>ورود</p>}
  </button>
</form>
        
      </div>
    </div>
  );
}