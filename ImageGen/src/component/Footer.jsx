import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {

    return (
        <>
            <div className='flex items-center justify-between gap-4 py-3 mt-15 '>
                <img src={assets.logo2} className='' width={40} alt="" />
                <p className='text-xs md:text-sm border-l ps-2 '>All right reserved. Copyright @ImageGen</p>
                <div className='hidden md:flex gap-2.5 '>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.instagram_icon} alt="" />
                </div>
            </div>
        </>
    )
}

export default Footer