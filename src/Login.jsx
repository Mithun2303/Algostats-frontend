import React from 'react'

function Login() {
  return (
    // <main class='max-w-screen min-h-screen bg-gradient'>
    //     <div class='flex justify-center items-center'>
    //         <form>
    //             <div>
    //                 <label for="email"><b>Email</b></label>
    //                 <input type='text' placeholder='@gmail.com' name='email' required></input>
    //                 <label for="password"><b>Password</b></label>
    //                 <input type='password' placeholder='••••••••' name='password' required></input>
    //             </div>
    //         </form>
    //     </div>
    // </main>
    <div class="bg-gradient font-[sans-serif]">
      <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div class="max-w-md w-full animate-fadein">
          <div class="p-10 rounded-2xl bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,1)] shadow-sh backdrop-blur-lg">
            <h2 class="text-white text-center text-2xl font-bold">Sign in</h2>
            <form class="mt-8 space-y-4">
              <div>
                <label class="text-white text-md font-bold mb-2 block">Email</label>
                <div class="relative flex items-center">
                  <input name="email" type="text" class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-none" placeholder="@gmail.com" required/>
                </div>
              </div>

              <div>
                <label class="text-white text-md font-bold mb-2 block">Password</label>
                <div class="relative flex items-center">
                  <input name="password" type="password" class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-none" placeholder="••••••••" required/>
                </div>
              </div>

              <div class="flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 border-gray-300 rounded" />
                  <label for="remember-me" class="ml-3 block text-sm text-white">
                    Remember me
                  </label>
                </div>
                <div class="text-sm">
                  <a class="text-white hover:underline font-semibold">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div class="!mt-9">
                <button type="button" class="w-full py-3 px-4 text-sm font-bold tracking-wide rounded-lg text-white bg-aq1 hover:bg-aq2 focus:outline-none">
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