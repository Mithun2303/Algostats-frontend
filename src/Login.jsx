import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false)
  const handleSubmit = async (e) => {
    console.log(email, password);
    if (email.length != 0) {
    try {
      
      const response = await axios.post(import.meta.env.VITE_API_URL + "api/auth/login/",
        {
          email: email, password: password
        }
      )
      localStorage.setItem(import.meta.env.VITE_JWT_HASH, response.data.token);
      navigate("/")
    } catch (error) {
      setShowError(true);
        setError(error.response.data.message)
    }
    }
  }
  return (
    <div className="bg-grad font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full animate-fadein">
          <div className="p-10 rounded-2xl bg-[rgba(255,255,255,0.2)] shadow-sh backdrop-blur-lg">
            <h2 className="text-white text-center text-2xl font-bold">Sign in</h2>
            <form className="mt-8 space-y-4">
              <div>
                <label className="text-white text-md font-bold mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input name="email"
                    type="text"
                    onChange={(e) => {setEmail(e.target.value);setShowError(false)}}
                    className="w-full text-gray-800 text-sm border borer-gray-300 px-4 py-3 rounded-md outline-none" placeholder="@gmail.com" required />
                </div>
              </div>

              <div>
                <label className="text-white text-md font-bold mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input name="password"
                    type="password"
                    onChange={(e) => {setPassword(e.target.value);setShowError(false)}}
                    className="w-full text-gray-800 text-sm border borde-gray-300 px-4 py-3 rounded-md outline-none" placeholder="••••••••" required />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 borer-gray-300 rounded" />
                  <label for="remember-me" className="ml-3 block text-sm text-white">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a className="text-white hover:underline font-semibold">
                    Forgot your password?
                  </a>
                </div>
              </div>
              {showError &&
                <div className='flex justify-center text-black font-extrabold'>
                    <span>
                      {error}
                    </span>
                </div>
              }
              <div className="">
                <button type="button"
                  onClick={(e) => handleSubmit(e)}
                  className="w-full py-3 px-4 text-sm font-bold tracking-wide rounded-lg text-white bg-[#231717] bg-aq1 hover:bg-aq2 focus:outline-none">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;