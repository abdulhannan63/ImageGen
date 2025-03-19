import React from 'react'
import { assets } from '../assets/assets'

const Login = () => {
    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30  flex justify-center items-center'>
            <form className='bg-blue-300 p-9 flex flex-col justify-center items-center gap-3 rounded-2xl'  >
                <img src={assets.cross_icon} className='' alt="" />
                <h1>Login</h1>
                <input type="text" className='border p-1.5 rounded-full' placeholder={`${<img src={assets.email_icon} width={10} />}`} required />
                <input type="password" className='border p-1.5 rounded-full' placeholder='password' required />


            </form>
        </div>
    )
}

export default Login