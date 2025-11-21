import { useLocation } from "react-router-dom"



export default function TitleHeader ({darkmode}){
  const location = useLocation()
  const isOther = location.pathname === "/sign" || location.pathname === "/login" || location.pathname === "/project" || location.pathname === "/anjoman"
  return(
            <div className={` ${darkmode ?" dark:text-gray-300  " :" text-gray-900"} text-center my-3`}>
          <h1 className={`${isOther ? "text-2xl pt-5" : " text-xl md:text-4xl lg:text-6xl "} text-nowrap`}>محمدرضا کاظمی</h1>
          <h2 className={`${isOther ? "text-2xl " : " text-sm md:text-lg lg:text-4xl "}`}>طراح سایت</h2>
          <h3 className="hidden md:block text-[14px]">در مسیر رشد و یادگیری </h3>
        </div>
  )
}