"use client"
import React from 'react'
import { motion } from 'framer-motion'

const TransitionEffect = () => {
  return (
    <>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-pink-400'
            initial={{x:"100%", width:"100%"}}
            animate={{x:"0%", width:"0%"}}
            exit={{x:["0%", "100%"], width:["0%", "100%"]}}
            transition={{duration:0.5, ease:"easeInOut"}}
        />
         <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-red-500'
            initial={{x:"100%", width:"100%"}}
            animate={{x:"0%", width:"0%"}}
            exit={{x:["0%", "100%"], width:["0%", "100%"]}}
            transition={{delay:0.2,duration:0.5, ease:"easeInOut"}}
        />
         <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-pink-600'
            initial={{x:"100%", width:"100%"}}
            animate={{x:"0%", width:"0%"}}
            exit={{x:["0%", "100%"], width:["0%", "100%"]}}
            transition={{delay:0.3, duration:0.5, ease:"easeInOut"}}
        />
    </>
  )
}

export default TransitionEffect