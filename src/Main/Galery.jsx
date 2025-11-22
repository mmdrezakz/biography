import React, { useState } from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { motion } from 'framer-motion';
import BounceLoader from 'react-spinners/esm/BounceLoader';



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
    const [loading, setLoading] = useState(true);

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
        {loading && ( <div className="absolute inset-0 flex justify-center items-center bg-gray-400">
          <BounceLoader color="#36d7b7" size={60} />
        </div>
          )}
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className={`w-full h-full object-cover transition-opacity duration-500 ${loading ? "opacity-0" :"opacity-100"}`}
          onLoad={() => setTimeout(() => setLoading(false), 1000)} // کمی تأخیر
          onError={() => setLoading(false)}

        />

      </ImageListItem>
    ))}
  </ImageList>
</ul>
          </motion.div>
       
      </div>
  )
}
