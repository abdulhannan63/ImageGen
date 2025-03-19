import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
// import { motion } from "framer-motion"
import * as motion from "motion/react-client"
import { AppContext } from '../context/AppContext'
const Header = () => {
  const navigate = useNavigate()
  const {user,setShowLogin} = useContext(AppContext);
  const onClickHandler=()=>{
    if (!user) {
      setShowLogin(true)
    }else{
      navigate('/result')
    }
    // onClick={() => (
    //   navigate('/result')
    // )}
  }

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className=' flex flex-col text-center items-center gap-5  my-15'>
      <p className='bg-white border border-zinc-400 rounded-full text-zinc-500 px-3 py-1 text-sm'>Best Text to Image Generator⭐</p>
      <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .4, duration: 2 }}
      >
        Turn text to <span className='text-blue-500 '>Image</span>.
      </motion.h1>
      <p className='text-center max-w-xl mx-auto text-zinc-500'>Unleash your creativity with AI. Turn your imagination into visual art in seconds  just type, and watch the magic happen.</p>
      <motion.button  onClick={onClickHandler}
        whileHover={{scale:1.09}}
        whileTap={{scale:0.95}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{default:{duration:0.5},opacity:{default:0.8,duration:1}}}
      className='rounded-full w-auto bg-black text-white px-6 py-2 cursor-pointer ' >Generate Image ✨</motion.button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className='flex flex-wrap gap-2 '>
        {Array(6).fill('').map((items, ind) => {
          return (

            <img src={ind % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2} width={70} className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' key={ind} alt="" />)
        })}
      </motion.div>
      <p className=' border-zinc-400 '>Generated images from imagify</p>
    </motion.div>

  )
}

export default Header