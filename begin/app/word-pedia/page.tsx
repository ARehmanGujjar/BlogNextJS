'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const [data,setData]=useState("")
  const router = useRouter()
  const handler=()=>{
    router.back();
  }

  const submitHandle=()=>{
    console.log(data)
  }
  return (
    <>
    <div className="bg-black max-h-full text-white"> about page</div>
   <div>
<input type="text" placeholder='enter data' className='p-1 m-1 text-xl w-2/3 rounded-lg' onChange={(e) => setData(e.target.value)} />
<button className="bg-purple-400  p-2 m-2 rounded-lg border border-white" onSubmit={()=>submitHandle()}>Submit</button>
    </div>
    <div className="border border-black rounded-lg m-1 p-3 text-3xl">
      <div className="bg-gray-100 p-2 min-h-16 m-1 rounded-lg">
      <h1>{data}</h1>
      </div>
      <div className="bg-gray-300 p-2 rounded-lg">
      <h2>length:{data.length}</h2>
      <h2>{(data.length/238).toPrecision(1)} mins to read</h2>

      </div>
    </div>
    <button className="bg-red-600 p-2 m-1 text-white mt-2 border border-white rounded-lg text-lg" onClick={()=>handler()}>Back</button>
    </>
  )
}

