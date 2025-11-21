import { Link } from "react-router-dom";

export default function NavBar({darkmode}){
  return(
        <nav >
          <div className="flex justify-around md:justify-center items-center gap-x-1 md:gap-x-4 w-max">
          <Link to="/" className={`flex items-center ${darkmode ?" dark:bg-gray-700  dark:text-gray-200 " : " bg-gray-400 text-gray-800 " }  px-2 md:px-4 py-2 border-gray-800 rounded-sm   text-sm md:text-lg lg:text-2xl hover:cursor-pointer list-none`}>خانه</Link>

          <Link to="project" className={`flex items-center ${darkmode ?" dark:bg-gray-700  dark:text-gray-200 " : " bg-gray-400 text-gray-800 " }  px-2 md:px-4 py-2 border-gray-800 rounded-sm   text-sm md:text-lg lg:text-2xl hover:cursor-pointer list-none`}>پروژه</Link>
          
          <Link to="/login" className={`flex items-center ${darkmode ?" dark:bg-gray-700  dark:text-gray-200 " : " bg-gray-400 text-gray-800 " }  px-2 md:px-4 py-2 border-gray-800 rounded-sm   text-sm md:text-lg lg:text-2xl hover:cursor-pointer list-none`}>ورود/ثبت نام</Link>
          <Link to="/anjoman" className={`flex items-center ${darkmode ?" dark:bg-gray-700  dark:text-gray-200 " : " bg-gray-400 text-gray-800 " }  px-2 md:px-4 py-2 border-gray-800 rounded-sm   text-sm md:text-lg lg:text-2xl hover:cursor-pointer list-none`}>انجمن</Link>
          

          </div>

        </nav>
  )
}