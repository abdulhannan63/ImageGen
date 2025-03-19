import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "framer-motion"
const BuyCredit = () => {
  const { user } = useContext(AppContext);

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className=' flex flex-col items-center'>
      <p className='items-center border rounded-full border-zinc-400 px-3 py-1 sm:px-6 sm:py-2 text-sm '>OUR PLANS</p>
      <h1 className='text-lg sm:text-4xl font-semibold my-7'>Choose the plan</h1>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        {
          plans.map((e, i) => (
            <>
              <div key={i} className='bg-white p-11 rounded-lg mx-7 shadow shadow-zinc-300 cursor-pointer hover:scale-[1.02] transition-all duration-75'>
                <img src={assets.logo2} width={50} alt="" className='my-3' />
                <h3 className='text-zinc-600 text-lg'>{e.id}</h3>
                <p className='text-zinc-400 py-2 text-sm '>{e.desc}</p>
                <p className='text-zinc-400 text-xs my-5'> <span className='text-zinc-700 text-2xl'>${e.price} </span>/{e.credits}</p>
                <button className='bg-zinc-900 text-sm text-white py-3 px-10 rounded cursor-pointer '>{user ? 'Purchase' : 'Get Started'}</button>
              </div>
            </>
          ))
        }
      </div>

    </motion.div>
  )
}

export default BuyCredit