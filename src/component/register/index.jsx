import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../firebase/firebase'
import { setDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { FaUser } from "react-icons/fa";



function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user)
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: fname,
                    lastName: lname,
                    photo: "",
                });
            }
            console.log("user is registered successfully")
            toast.success("User Registered Successfully", {
                position: "top-center", height: "20"
            })
        } catch (error) {
            console.log(error.message)
            toast.success(error.message, {
                position: "bottom-center"
            })
        }
    }


    return (
        <div className='flex justify-center items-center h-screen bg-white-50'>
        
            <div className='w-96 h-100 p-6 shadow-xl bg-light-blue-50 rounded-md'>
            <h1 className='flex justify-center items-center capitalize font-bold text-2xl'> sign up</h1>
                <form onSubmit={handleRegister}>
                    <div className='mt-3'>
                        
                        <label className='block text-base mb-2'>First Name</label>
                        <input
                            type='text'
                            className='border text-base mb-2 w-full px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            placeholder='First name'
                            onChange={(event) => setFname(event.target.value)}
                            required
                        />
                    </div>

                    <div className='mt-3'>
                        <label className='block text-base mb-2'>Last name</label>
                        <input type="text"
                            className='border text-base mb-2 w-full px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            placeholder='Last name'
                            onChange={(event) => setLname(event.target.value)}
                            required
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='block text-base mb-2'>Email Address</label>
                        <input
                            type="email"
                            className='border text-base mb-2 w-full px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                    </div>


                    <div className='mt-3'>
                        <label className='block text-base mb-2'>Password</label>
                        <input
                            type='password'
                            className='border text-base mb-2 w-full px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>


                    <div className='mt-3 bg-[#002074] rounded-md py-2'>
                        <button
                            type='submit' className='w-full'>Submit</button>
                    </div>
                    <div className='flex mt-4 justify-end'>
                        <p className='text-sm '>Already have an account ?</p>
                        <button className='text-sm underline text-blue-500' onClick="location.href='/login">Login</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register
