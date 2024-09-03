"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Header = () => {
  // const router = useRouter();
  const router = useRouter(); // Use it inside a functional component

  const authHandler = () => {
    router.push("/Join-us");
  };
  return (
    <>
      <div className="flex justify-between items-center border m-4 border-black p-2 rounded-lg">
        <div className="logo">
          <h1 className="text-lg sm:text-3xl  text-gray-300 italic bg-neutral-900 p-1 rounded-lg">
            ARBLOGS
          </h1>
        </div>
        <nav className="flex justify-center items center  p-1 ">
          <ul className="flex justify-center items-center">
            <Link href="/" className="m-1 sm:visible sm:text-xl">
              Home
            </Link>
            <Link href="/word-pedia" className="m-1 sm:visible sm:text-xl">
              WordPedia
            </Link>
            <Link href="/about" className="m-1 sm:visible sm:text-xl">
              About
            </Link>
            <Link href="/blogs" className="m-1 sm:visible sm:text-xl">
              Blogs
            </Link>
          </ul>
        </nav>
        <button
          className="rounded-full text-white text-lg p-2 bg-neutral-800"
          onClick={()=> authHandler()}
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Header;
