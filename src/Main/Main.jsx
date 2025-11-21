import React from 'react'
import Button from '../Ui/Button'
import Aboutme from './Aboutme'
import AccordionComponent from './AccordionComponent'
import { motion } from 'framer-motion';
import FaqSlider from './FaqSlider';


export default function Main() {
  return (
    <>
    <section className='mx-4 my-5 p-2'>
      <main>
        <div className='bg-gray-400 shadow-gray-500 shadow-sm p-5 rounded-sm min-h-[74vh] font-Vazirmatn text-gray-800 text-justify'>
          <motion.div    
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            
            transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            }}
          >

          <Aboutme />
          <Button />
          <AccordionComponent />
        </motion.div>
        </div>    
      </main>
    </section>
              
    </>
  )
}





