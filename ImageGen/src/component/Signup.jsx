import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import { motion } from "framer-motion"
import axios from 'axios';
import { toast } from 'react-toastify';

const Signup = () => {
    const { ShowLogin, setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);
    const [state, setstate] = useState('Login');

    // input fields
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (state === 'Login') {
                const { data } = await axios.post(backendUrl + '/api/login', {email, password})

                if (data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                } else {
                    toast.error(data.error);
                }
            } else {
                const { data } = await axios.post(backendUrl + '/api/signup', {
                    username, email
                    , password
                }
                )
                if (data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                } else {
                    toast.error(data.error);
                }
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])
    return (
        <>
            <div className='fixed  top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30  flex justify-center items-center'>
                <motion.form
                    onSubmit={onSubmitHandler}
                    initial={{ opacity: 0.5, y: 100 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='bg-gradient-to-b from-teal-50 to-orange-50 p-9 flex flex-col justify-center items-center gap-3 rounded-2xl'  >
                    <img src={assets.cross_icon} className='relative top-0 left-[103px] cursor-pointer' alt="" onClick={() => {
                        setShowLogin(false)
                    }} />
                    <h1 className='text-center text-2xl text-neutral-700 font-medium '>{state}</h1>
                    {state !== 'Login' && <input type="text" onChange={(e) => setName(e.target.value)} className='border p-2 rounded-full text-sm' placeholder='Name' value={username} required />}
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='border p-2 rounded-full text-sm' placeholder='Email' required />
                    <input
                        onChange={(e) => setPassword(e.target.value)} value={password}
                        type="password" className='border p-2 rounded-full text-sm' placeholder='password' required />
                    <p className='text-sm text-blue-600 my-1 cursor-pointer'>Forgot Password</p>
                    <button className='bg-blue-600 w-full text-white py-2 rounded-full '>{
                        state === 'Login' ? 'Login' : 'Create Account'
                    }</button>
                    {state === 'Login' ? <p className='mt-2 text-center'>Don't have account? <span className='text-blue-600 cursor-pointer underline' onClick={() => setstate("SignUp")}>SignUp</span> </p> :
                        <p className='mt-2 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer underline' onClick={() => setstate("Login")}>Signin</span> </p>}


                </motion.form>
            </div>
        </>
    )
}

export default Signup