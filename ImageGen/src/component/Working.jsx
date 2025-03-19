import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from "framer-motion"
const Working = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0.2, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='h-full flex flex-col justify-center items-center py-20 gap-5 '>

                <h1 className='text-3xl sm:text-4xl font-semibold mb-2 '>How it work ⚒️</h1>
                <p className='text-zinc-400 mb-8 '>Transform Words Into Stunning Images</p>
                <div className='space-y-4 w-full max-w-3xl text-sm'>
                    {
                        stepsData.map((e, i) => (
                            <>
                                <div key={i} className='flex items-center gap-4 m-8 border p-5 px-8 bg-white/20 rounded shadow-md cursor-pointer hover:scale-[1.02] transition-all border-zinc-200 '>
                                    <img width={40} src={e.icon} alt="" />
                                    <div className=''>
                                        <h2 className='text-sm sm:text-xl font-bold'>{e.title}</h2>
                                        <p className='text-zinc-400 text-xs sm:text-sm '>"{e.description}"</p>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </motion.div>
        </>
    )
}

export default Working