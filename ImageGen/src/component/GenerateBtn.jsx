import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"
import { AppContext } from '../context/AppContext'
const GenerateBtn = () => {
    const {user,setShowLogin} = useContext(AppContext);
      const onClickHandler=()=>{
        if (!user) {
          setShowLogin(true)
        }else{
          navigate('/result')
        }
      }
    const navigate = useNavigate()
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='pb-5 text-center '>
            <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16 '>See the magic.<span className=' text-blue-500 '>Try now</span></h1>
            <button className='rounded-full w-auto bg-black text-white px-6 py-2 cursor-pointer' onClick={onClickHandler}  >Generate ✨</button>

        </motion.div>
    )
}

export default GenerateBtn