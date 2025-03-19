import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"
const Description = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col justify-center items-center my-20 gap-3'>
            <h1 className='text-3xl sm:text-4xl font-semibold '>Create AI Images</h1>
            <p className='text-zinc-400 mb-2'>Turn your imagination into visuals</p>
            <div className='md:flex justify-center items-center gap-5 md:gap-14 '>
                <img src={assets.sample_img_1} alt="" className='w-80 xl:w-90 rounded-lg items-center ' />
                <div>
                    <h2 className='text-zinc-700 mb-4 text-2xl md:text-3xl max-w-lg '>Introducing the AI-powered Text to Image Generator</h2>
                    <p className='text-zinc-400 '>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals
                        or unique imagery,our tool transforms your text into eye-catching images with
                        just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
                    <p className='text-zinc-400'>
                        Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs
                        and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Description