export default function Darkmode({darkmode,mount ,DarkHandler}){

  return(
    <>
                  {mount &&
          <>
          <button className={`z-50 ${darkmode ? " bg-gray-800 " : "bg-gray-600"} rounded-full top-0 right-0 fixed md:w-14 md:h-14 h-8 w-8 mb-2  mx-3  md:m-2`} onClick={DarkHandler}>{darkmode ? <img className="w-full h-full object-contain"  src="./assets/moon.png"/> : <img className="w-full h-full object-contain" src="./assets/sun.png"/> }</button>
          </>
      }
    </>
  )
} 