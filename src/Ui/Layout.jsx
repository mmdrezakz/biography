// components/Layout.jsx
import HeaderTop from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import HeaderOther from "../Header/HeaderOther";

export default function Layout() {
  const [darkmode, setdarkmode] = useState(false);
  const [mount, setmount] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
    const location =  useLocation()
    const isHome = location.pathname === "/"


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
console.log(scrollY);

      
      setScrolled(scrollY > 800); // اگر بیشتر از ۱۰ پیکسل اسکرول شد
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);





  return (
    <div
      ref={containerRef}
      className={`transition-colors duration-700 ease-in-out ${
        darkmode ? "dark:bg-gray-600" : "bg-gray-200"
      } body font-vazir`}
    >
      {/* نوار اسکرول بالا */}
      <motion.div
        id="scroll-indicator"
        style={{
          zIndex: 100,
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#7e7e7e",
        }}
      />

      {/* هدر ثابت */}

    {isHome ?
      <HeaderTop
        scrollYProgress={scrollYProgress}
        darkmode={darkmode}
        setdarkmode={setdarkmode}
        mount={mount}
        setmount={setmount}
      />
    :
          <HeaderOther
        scrollYProgress={scrollYProgress}
        darkmode={darkmode}
        setdarkmode={setdarkmode}
        mount={mount}
        setmount={setmount}
      />
    }


      {/* محتوای متغیر صفحات */}
      <Outlet context={{ darkmode, setdarkmode }} />


      {isHome && scrolled &&                 <motion.div    
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, }}
                  
                  transition={{
                    
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                    <Footer darkmode={darkmode} />
                    </motion.div> }
                
      
    </div>
  );
}