import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { motion } from 'framer-motion';

const galery =[
   {
   id:2,title:"logo2",src:"./assets/galery/2.png",
   cols:2,
rows:2
 },
  {
    id:1,title:"logo1",src:"./assets/galery/1.png",
    rows:2
  },
    {
    id:3,title:"logo3",src:"./assets/galery/3.png",
    rows:2
  },
    {
    id:4,title:"logo4",src:"./assets/galery/4.jpg",
    rows:2
  },
    {
    id:5,title:"logo5",src:"./assets/galery/5.jpg",
    rows:2
  },
    {
    id:6,title:"logo6",src:"./assets/galery/6.jpg",
    rows:2
  },
    {
    id:7,title:"logo7",src:"./assets/galery/7.jpg",
    rows:2
  }
]
export default function Galery() {
  return (
          <div className="col-span-2 bg-gray-400 mx-6 my-5 rounded-lg">
                  <motion.div    
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            
            transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            }}
          >

<ul className="bg-gray-400 p-2 rounded-lg h-auto md:h-[74vh]">
  <ImageList
    className="h-auto md:h-[72vh]"
    variant="quilted"
    cols={2}
    rowHeight={200}
  >
    {galery.map((item) => (
      <ImageListItem
        key={item.id}
        rows={item.rows || 1}
        cols={item.cols || 1}
      >
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </ImageListItem>
    ))}
  </ImageList>
</ul>
          </motion.div>
       
      </div>
  )
}
