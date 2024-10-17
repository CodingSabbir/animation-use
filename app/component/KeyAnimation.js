'use client'
import React from 'react';
import { motion } from "framer-motion"

const KeyAnimation = () => {
    return (
        <motion.div
           
            animate={{ 
               borderRadius: ["20","20","40","60","20"],
               rotate:[1,90,220,180,100,1],

            }}
            transition={{ duration: 1.7 }}
        >
            <img className='h-44 w-44 m-10' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt=""/>
        </motion.div>
    );
};

export default KeyAnimation;