'use client'
import React from 'react';
import { motion } from "framer-motion"
export const Scroll = ({text}) => {
    return (
        <motion.div 
        initial={{opacity:0, x: -50}}
        whileInView={{opacity:1 ,x: 0, transition:{duration:1}}}
        viewport={{once:false}}
        >
            <p className='m-2 bg-teal-400 text-black w-44 p-20'>{text}</p>
        </motion.div>
    );
};


export const ScrollReview = () => {
    const content=[ "Bangladesh ","is", "a" ,"small", "country","country","country","country"]
    return (
        <div>
            {
                content.map((text,index)=>(
                    <Scroll key={index} text={text}/>
                ))
            }
        </div>
    );
};
