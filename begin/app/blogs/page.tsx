"use client";
import Link from "next/link"
import { useState } from "react"
const page = () => {
  // const [title,setTitle]=useState(0);
  // setTitle="learn new Language";
  return (
    <>
    <div className="bg-gray-50 border-black border rounded-lg p-2 w-1/3 m-1">
      <Link href="/blogs/blogids"><h1 className="text-xl">learn language</h1></Link>
      <p className="text-md line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ab dignissimos laboriosam libero et maiores ut ipsa delectus. Tempora consequuntur, reprehenderit repudiandae incidunt porro distinctio eos soluta minima quas ducimus perspiciatis quos praesentium mollitia minus aliquid cum? Tempore soluta eligendi, nam porro odit voluptatum nesciunt accusantium, perspiciatis ab dignissimos excepturi.</p>
    </div>
    
    </>
  )
}

export default page