import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase/firebase';
import { toast } from 'react-toastify';
import SignInWithGoogle from '../../signInWithGoogle';


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            console.log("User logged in Successfully")
            window.location.href = "/profile"
        } catch (error) {
            console.log(error.message)
            toast.success(error.message, {
                position: "bottom-center"
            })

        }
    }


    return (
        <div className='flex justify-center items-center h-screen bg-black'>
            <div className='w-96 h-120 p-6 shadow- bg-white rounded-md'>
                <h1 className='flex justify-center items-center capitalize font-bold text-xl'> login</h1>
                <form onSubmit={handleSubmit}>


                    <div className='mb-3'>
                        <label className='block text-base mb-2'>Email Address</label>
                        <input
                            type="email"
                            className='border text-base mb-2 w-full px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                    </div>


                    <div>
                        <label className='block text-base mb-2'>Email Address</label>
                        <input
                            type='password'
                            className='border text-base mb-2 w-full px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>

                    <div className='mt-3 bg-[#002074] rounded-md py-2'>
                        <button
                            type='submit' className='w-full'>Submit</button>
                    </div>
                    <p className='flex text-sm justify-center items-center'>--------------or Continue with --------------</p>
                    <SignInWithGoogle />
                </form>

            </div>
        </div>
    )
}

export default Login
