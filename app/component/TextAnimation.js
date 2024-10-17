'use client'
import React from 'react';
import { motion } from "framer-motion"
const TextAnimation = () => {
    const message="Welcome to Bangladesh"
    const wordArray=message.split("")
    return (
       <>
        <div>
            {
                wordArray.map((text,index)=>(
                    <motion.span 
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 ,delay: index/10}}
                    >
                        {text}{""}
                    </motion.span >
                ))
            }
        </div>


        <div>
            {
                
                    <motion.div 
                   
                    initial={{ opacity: 0, x:"-100vh" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration:2}}
                    >
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et perspiciatis nulla nam dolore voluptate, quibusdam consequuntur quaerat vel explicabo.</p>
                    </motion.div >
               
            }
        </div>
        <div>
            {
                
                    <motion.div 
                   className='py-10'
                    initial={{ opacity: 0, x:"-100vh" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type:"spring", duration:2}}
                    >
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et perspiciatis nulla nam dolore voluptate, quibusdam consequuntur quaerat vel explicabo.</p>
                    </motion.div >
               
            }
        </div>
        <div>
            {
                
                    <motion.div 
                   
                    initial={{ opacity: 0, x:"-100vh" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type:"spring", bounce:2, duration:2}}
                    >
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et perspiciatis nulla nam dolore voluptate, quibusdam consequuntur quaerat vel explicabo.</p>
                    </motion.div >
               
            }
        </div>
       </>
    );
};

export default TextAnimation;