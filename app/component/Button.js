'use client'
import React from 'react';
import { motion } from "framer-motion"
const Button = () => {
    return (
        <div>
            <div>
            <motion.button
            className='bg-black text-white capitalize font-semibold text-md rounded-md p-3 m-2'
            whileTap={{scale:0.5}}
            whileHover={{scale:1.4}}
            >
                
                submit
            </motion.button>
        </div>
        <div>
            <motion.button
            className='bg-black text-white capitalize font-semibold text-md rounded-md p-3 m-2'
            whileTap={{scale:0.5}}
            whileHover={{scale:1.4 , transition:{yoyo:Infinity}}}
            >
                
                submit
            </motion.button>
        </div>
        </div>
    );
};

export default Button;