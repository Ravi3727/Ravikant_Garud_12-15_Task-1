import React, { useState } from 'react';
import axios from 'axios';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', {
                username,
                password
            });
            window.location.href = '/'; 
            localStorage.setItem('user', JSON.stringify(response.data.user));
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message || "Login failed");
            } else {
                alert("Something went wrong");
            }
        }
    };

    return (
        <div className='flex w-full h-screen justify-center items-center'>
            <div className='flex flex-col items-center w-full h-full justify-center'>
                <div>
                    <h1 className='text-3xl font-extrabold text-black'>Login</h1>
                </div>
                <div className='h-1/2 w-8/12 flex flex-col justify-center gap-4 items-start'>
                    <div className='flex flex-col rounded-xl gap-4 w-6/12 h-6/12'>
                        <div className='flex flex-col gap-2'>
                            <div className='text-lg font-semibold text-black'>
                                Username
                            </div>
                            <input
                                className='p-4 w-full h-12 rounded-xl border-[1px]'
                                type="text"
                                placeholder='Enter username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className='text-lg font-semibold text-black'>
                                Password
                            </div>
                            <input
                                className='p-4 w-full h-12 rounded-xl border-[1px]'
                                type="password"
                                placeholder='Enter Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div onClick={handleLogin} className='flex justify-center hover:cursor-pointer font-semibold items-center w-7/12 h-12 bg-customGray rounded-xl'>
                        <button >
                            Login
                        </button>
                    </div>
                    <div className='mx-auto'>
                        <p className='text-gray-400 text-md font-light'>Forgot Password?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
