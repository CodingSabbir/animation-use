'use client'
import React from 'react';
import { motion } from "framer-motion"

const AnimationRoted = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <img className='h-44 w-44 m-10' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt=""/>
        </motion.div>
    );
};

export default AnimationRoted;
