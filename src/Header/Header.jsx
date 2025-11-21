import React, { useEffect } from 'react'
import  "/assets/bg3.png"
import { ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';
import NavBar from "./Navbar";
import Darkmode from "./Darkmode";
import SkillsHeader from "./SkillsHeader";
import TitleHeader from "./TitleHeader";
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';




export default function HeaderTop({
darkmode,
setdarkmode,
mount,
setmount}) {

    
// darkmode
useEffect(() => {
  document.documentElement.classList.toggle("dark",darkmode)
},[darkmode])
// Mounting 
useEffect(() => {
  const timeout = setTimeout(() => {
    setmount(true);
  }, 1500); // ← تأخیر 300 میلی‌ثانیه

  return () => clearTimeout(timeout);
}, []);
//هندل کردن مود دارک
function DarkHandler(){
  setdarkmode(!darkmode)
}


  return (
        

<>


    <header className={`flex-row-reverse shadow-gray-800 shadow-md relative flex justify-around items-center bg-linear-to-r/decreasing   ${darkmode ?  " dark:from-black  dark:to-gray-900":" to-gray-400 from-gray-900 "}   px-4 text-slate-200`}>
      <motion.div    
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
            
        transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
            }}
        >

          <Darkmode mount={mount} darkmode={darkmode} DarkHandler={DarkHandler}/>
          <NavBar darkmode={darkmode} />
      </motion.div>
        <div id="img-person" >
          <img className="brightness-110 contrast-125" src="./assets/bg3.png"></img>
        </div>
        <SkillsHeader/>
      <motion.div    
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
          <TitleHeader darkmode={darkmode} />
      </motion.div>

      </header>
   </>
  )
}
