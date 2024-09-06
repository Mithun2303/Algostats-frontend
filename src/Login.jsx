import React, { useState } from 'react';
import { useAuth } from './contexts/AuthProvider';

function Login({ setUserId }) {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      await login(email, password);
    } catch (error) {
      setShowError(true);
      setError("Login failed"); // or set the error message from the caught error
    }
  };

  return (
    <div class=" font-[sans-serif]">
      <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div class="max-w-md w-full animate-fadein">
          <div class="p-10 rounded-2xl bg-[rgba(255,255,255,0.2)] shadow-sh backdrop-blur-lg">
            <h2 class="text-white text-center text-2xl font-bold">Sign in</h2>
            <form class="mt-8 space-y-4">
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
                  className="w-full py-3 px-4 text-sm font-bold tracking-wide rounded-lg text-white bg-[#002537] hover:bg-[#00344D] focus:outline-none">
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