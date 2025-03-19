import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, Route, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Login from './Login'

const NavBar = () => {
    const { user, credit, 
        setShowLogin,logout } = useContext(AppContext);
    const navigate = useNavigate();
    return (
        <>
            <nav className='flex justify-between text-center py-4'>
                <Link rel="stylesheet" to={"/"} >
                    <img src={assets.logo2} alt="" className=' w-7 sm:w-11 lg:w-14 ' />
                </Link>
                <div>

                    {
                        !user ?
                            <div className='flex items-center gap-2 sm:gap-5'>

                                <p className='cursor-pointer' onClick={() => {
                                    navigate('/buy');
                                }}>Pricing</p>
                                <button className='bg-zinc-800 py-2 px-2 sm:px-7 text-sm rounded-full text-zinc-100 cursor-pointer' onClick={()=>{
                                    setShowLogin(true);
                                }} >Login</button>
                            </div>
                            :
                            <div className='flex items-center gap-2 sm:gap-3'>
                                <button onClick={() => {
                                    navigate('/buy')
                                }} className='flex items-center gap-1 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-1.7  rounded-full 
                            hover:scale-105 transition-all duration-700'>
                                    <img className='w-3.5' src={assets.credit_star} alt="" />
                                    <p className='text-xs sm:text-sm text-zinc-400'>Credet: {credit}</p>
                                </button>
                                <p className='text-zinc-400 max-sm:hidden pl-4'>Hi, {user.name}</p>
                                <div className='relative group'>
                                    <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
                                    <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12 '>
                                        <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                            <li onClick={logout} className='cursor-pointer py-1 px-2 pr-10'>logout</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    }
                </div>

            </nav>
        </>
    )
}

export default NavBar