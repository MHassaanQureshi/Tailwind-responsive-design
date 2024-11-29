"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-black text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="font-bold text-3xl">NAVBAR</h1>
                
                <div className="block lg:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className="text-white focus:outline-none"
                    >
                        {menuOpen ? (
                           <Image src="/images/close.png" alt="" width={50} height={50} />
                        ) : (
                            <Image src="/images/menu.png" alt="" width={50} height={50} />
                        )}
                    </button>
                </div>
               
                <ul className="hidden lg:flex space-x-8 text-2xl">
                    <li>
                        <Link href="#" className="hover:border-b-2 border-red-700">
                            LINK-1
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:border-b-2 border-red-700">
                        LINK-2
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:border-b-2 border-red-700">
                        LINK-3
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:border-b-2 border-red-700">
                        LINK-4
                        </Link>
                    </li>
                    <li>
                        <Link href="#e" className="hover:border-b-2 border-red-700">
                        LINK-5
                        </Link>
                    </li>
                </ul>
            </div>
            
            {menuOpen && (
                <div className="lg:hidden">
                    <ul className="flex flex-col space-y-4 mt-4">
                    <li>
                        <Link href="#" className="hover:border-b-2 border-red-700">
                            LINK-1
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:border-b-2 border-red-700">
                        LINK-2
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:border-b-2 border-red-700">
                        LINK-3
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:border-b-2 border-red-700">
                        LINK-4
                        </Link>
                    </li>
                    <li>
                        <Link href="#e" className="hover:border-b-2 border-red-700">
                        LINK-5
                        </Link>
                    </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
