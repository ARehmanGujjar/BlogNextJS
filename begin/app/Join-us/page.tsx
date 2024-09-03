"use client"
import { useState } from "react"
import Login from "./_logComponents/Login"
import SignUp from "./_logComponents/SignUp"

const Page = () => {
  const [login,setLogin]=useState(true)
  const loginHandler=()=>{
    setLogin(!login)
  }
  return (
    <>
    <div className="flex flex-col rounded-lg mt-4 p-3 m-4 text-white items-center justify-center text-lg bg-gradient-to-r from-neutral-600 to-black">
            <h3>
              <span className="cursor-default dark:text-gray-300">{login?"Have an account?":"Don't have an account"}</span>
              <button onClick={()=>loginHandler()}
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                
              >
                <span
                  className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  {login?"Login":"SignUp"}
                </span>
              </button>
            </h3>
          </div>
    {!login?<Login/>:<SignUp/>}
    </>
  )
}

export default Page